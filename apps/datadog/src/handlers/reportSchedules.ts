import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ReportingScheduleScheduleUuidRoute,
  getApiV2ReportingDatasetDatasetIdSchedulesRoute,
  getApiV2ReportingScheduleListRoute,
  getApiV2ReportingScheduleResourceTypeResourceIdRoute,
  getApiV2ReportingScheduleScheduleUuidRoute,
  patchApiV2ReportingScheduleScheduleUuidRoute,
  patchApiV2ReportingScheduleScheduleUuidToggleRoute,
  postApiV2ReportingPrintRoute,
  postApiV2ReportingScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportSchedulesHandler = app
  .openapi(getApiV2ReportingDatasetDatasetIdSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ReportingPrintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ReportingScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingScheduleListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingScheduleResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ReportingScheduleScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReportingScheduleScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ReportingScheduleScheduleUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ReportingScheduleScheduleUuidToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
