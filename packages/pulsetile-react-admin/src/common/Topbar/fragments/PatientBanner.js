import React from "react";
import get from "lodash/get";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

/**
 * This component returnts banner with Patient information
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @param {shape} classes
 * @param {shape} patientInfo
 * @constructor
 */
const PatientBanner = ({ classes, patientInfo, patientIdLabel, hidePatientPostCode }) => {
    const addressArray = [
        get(patientInfo, 'address', null),
        get(patientInfo, 'city', null),
        get(patientInfo, 'country', null)
    ];
    if (!hidePatientPostCode) {
        addressArray.push(get(patientInfo, 'postCode', null));
    }
    const doctor = get(patientInfo, 'gpName', null);
    const dateOfBirth = get(patientInfo, 'birthDate', null);
    return (
        <Grid id="patientBanner" className={classes.patientInfo} container spacing={24}>
            <Grid className={classes.gridBlock} item xs={12} lg={8}>
                <Typography id="patientBanner-name" variant="h6" className={classes.patientNameBlock}>
                    <span className={classes.keyName}>{get(patientInfo, 'name', null)}</span>
                </Typography>
                { doctor &&
                    <Typography id="patientBanner-doctor" variant="body2">
                        <span className={classes.keyName}>Doctor: </span>
                        <span className={classes.keyName}>{doctor}</span>
                    </Typography>
                }
                <Typography id="patientBanner-address" variant="body2">
                    <span className={classes.keyName}>Address: </span>
                    <span className={classes.keyName}>{addressArray.join(', ')}</span>
                </Typography>
            </Grid>
            <Grid className={classes.gridBlock} item xs={6} lg={2}>
                {
                    dateOfBirth &&
                        <Typography variant="body2">
                            <span className={classes.keyName}>D.O.B.: </span>
                            <span className={classes.keyName}>{dateOfBirth}</span>
                        </Typography>
                }
                <Typography id="patientBanner-phone" variant="body2">
                    <span className={classes.keyName}>Phone: </span>
                    <span className={classes.keyName}>{get(patientInfo, 'phone', null)}</span>
                </Typography>
            </Grid>
            <Grid className={classes.gridBlock} item xs={6} lg={2}>
                <Typography id="patientBanner-gender" variant="body2">
                    <span className={classes.keyName}>Gender: </span>
                    <span className={classes.keyName}>{ get(patientInfo, 'gender', null) }</span>
                </Typography>
                <Typography id="patientBanner-nhsNumber" variant="body2">
                    <span className={classes.keyName}>{patientIdLabel ? patientIdLabel : "NHS No."} </span>
                    <span className={classes.keyName}>{ get(patientInfo, 'nhsNumber', null) }</span>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default PatientBanner;