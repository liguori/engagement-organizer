/**
 * Engagement Organizer
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AppointmentType } from './appointmentType';
import { Customer } from './customer';

export interface AppointmentExtraInfo { 
    warning?: boolean;
    warningDescription?: string;
    projectColor?: string;
    id?: number;
    customer?: Customer;
    customerID?: number;
    type?: AppointmentType;
    project?: string;
    typeID?: number;
    availabilityID?: number;
    startDate?: Date;
    endDate?: Date;
    note?: string;
    confirmed?: boolean;
    requireTravel?: boolean;
    travelBooked?: boolean;
}