import React from "react";
import * as XLSX from 'xlsx';
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import ExcelExampleData from "./ExcelData";

const ExcelDownloadExample = () => {
    const cardHeaderDetails = [
        { value: 1, label: "Excel Download Example Data", type: "heading" },
        { value: 1, label: "Excel Download", type: "button" },
    ];

    const tableHeadings = [
        { value: 1, label: "Sno" }, { value: 2, label: "Name" },
        { value: 3, label: "Age" }, { value: 4, label: "Gender" },
        { value: 5, label: "Email" }, { value: 6, label: "Mobile" },
    ];

    const handleExcelDownload = (data, singleRow = false) => {
        let excelFile;

        if (singleRow) {
            excelFile = [{
                "Sno": data.index + 1,
                "Name": data.name || "",
                "Age": data.age || "",
                "Gender": data.gender || "",
                "Email": data.email || "",
                "Mobile": data.mobileNo || ""
            }];
        } else {
            excelFile = data.map((item, index) => ({
                "Sno": index + 1,
                "Name": item.name || "",
                "Age": item.age || "",
                "Gender": item.gender || "",
                "Email": item.email || "",
                "Mobile": item.mobileNo || ""
            }));
        }

        const worksheet = XLSX.utils.json_to_sheet(excelFile);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const fileName = singleRow ? `row_data_${data.name}.xlsx` : 'full_data.xlsx';
        XLSX.writeFile(workbook, fileName);
    }

    return (
        <div className="text-center">
            <Card className="mt-3">
                <Card.Header>
                    <Row>
                        {cardHeaderDetails.map((item) => (<Col sm={6}><Form>
                            {item.type === "heading" && (
                                <Form.Label className="fw-bold text-uppercase mt-3">{item.label}</Form.Label>
                            )}
                            {item.type === "button" && (
                                <Button variant="success" onClick={() => handleExcelDownload(ExcelExampleData)}>{item.label}</Button>
                            )}</Form></Col>))
                        }
                    </Row>
                </Card.Header>
                <Card.Body>
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                {tableHeadings.map((item, index) => (
                                    <th scope="col" key={index}>{item.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {ExcelExampleData.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobileNo}</td>
                                    <td><button className="btn btn-outline-success btn-sm" onClick={() => handleExcelDownload({ ...item, index }, true)}>Download</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </div>
    )
}
export default ExcelDownloadExample;