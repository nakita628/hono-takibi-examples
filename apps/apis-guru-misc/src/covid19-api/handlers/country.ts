import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCountryAllRoute,
  getCountryCodeRoute,
  getCountryRoute,
  getReportCountryAllRoute,
  getReportCountryCodeRoute,
  getReportCountryNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const countryHandler = app
  .openapi(getCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCountryAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCountryCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportCountryAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportCountryCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportCountryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
