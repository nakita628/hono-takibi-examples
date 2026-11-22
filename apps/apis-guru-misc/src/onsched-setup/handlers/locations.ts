import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSetupV1LocationsIdDeleteallimagesRoute,
  deleteSetupV1LocationsIdDeleteimageRoute,
  deleteSetupV1LocationsIdEmailTemplatesMasterRoute,
  deleteSetupV1LocationsIdEmailTemplatesTemplateNameRoute,
  deleteSetupV1LocationsIdGoogleServiceAccountRoute,
  deleteSetupV1LocationsIdRoute,
  deleteSetupV1LocationsIdServicesRoute,
  deleteSetupV1LocationsServicesIdRoute,
  getSetupV1LocationsIdAppointmentremindersRoute,
  getSetupV1LocationsIdEmailTemplatesMasterRoute,
  getSetupV1LocationsIdEmailTemplatesRoute,
  getSetupV1LocationsIdEmailTemplatesTemplateNameRoute,
  getSetupV1LocationsIdRoute,
  getSetupV1LocationsIdServicesRoute,
  getSetupV1LocationsRoute,
  getSetupV1LocationsServicesIdRoute,
  postSetupV1LocationsBulkRoute,
  postSetupV1LocationsIdEmailTemplatesMasterRoute,
  postSetupV1LocationsIdEmailTemplatesRoute,
  postSetupV1LocationsIdGoogleServiceAccountRoute,
  postSetupV1LocationsIdServicesRoute,
  postSetupV1LocationsIdUploadimageRoute,
  postSetupV1LocationsRoute,
  putSetupV1LocationsIdAppointmentremindersRoute,
  putSetupV1LocationsIdHolidaysHolidayIdClosedRoute,
  putSetupV1LocationsIdRecoverRoute,
  putSetupV1LocationsIdRoute,
  putSetupV1LocationsIdSettingsScopeSettingsScopeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getSetupV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdAppointmentremindersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1LocationsIdAppointmentremindersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdDeleteallimagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdDeleteimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsIdEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsIdEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdEmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdEmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdGoogleServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsIdGoogleServiceAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1LocationsIdHolidaysHolidayIdClosedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1LocationsIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1LocationsIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1LocationsIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1LocationsIdSettingsScopeSettingsScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1LocationsIdUploadimageRoute, (c) => {
    throw new Error('Not implemented')
  })
