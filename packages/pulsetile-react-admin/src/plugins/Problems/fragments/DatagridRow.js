import React from "react";
import moment from "moment";

import TableCell from '@material-ui/core/TableCell';

import CustomDatagridRow from "../../../common/ResourseTemplates/ListTemplate/fragments/CustomDatagridRow";
import { DATE_FORMAT } from "../../../common/ResourseTemplates/ListTemplate/fragments/constants";

const ProblemsDatagridRow = props => {
    const { record } = props;
    if (!record) {
        return null;
    }
    return (
        <CustomDatagridRow {...props} >
            <TableCell key={`${record.id}-problem`}>
                {record.problem}
            </TableCell>
            <TableCell key={`${record.id}-dateOfOnset`}>
                {moment(record.dateOfOnset).format(DATE_FORMAT)}
            </TableCell>
            <TableCell key={`${record.id}-source`}>
                {record.source}
            </TableCell>
        </CustomDatagridRow>
    );
};

export default ProblemsDatagridRow;

