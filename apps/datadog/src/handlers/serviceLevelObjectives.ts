import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2SloReportReportIdDownloadRoute,
  getApiV2SloReportReportIdStatusRoute,
  getApiV2SloSloIdStatusRoute,
  postApiV2SloReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceLevelObjectivesHandler = app
  .openapi(postApiV2SloReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SloReportReportIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SloReportReportIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SloSloIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
