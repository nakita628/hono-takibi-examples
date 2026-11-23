import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportCountryAllRoute,
  getReportCountryCodeRoute,
  getReportCountryNameRoute,
  getReportTotalsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportHandler = app
  .openapi(getReportCountryAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportCountryCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportCountryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
