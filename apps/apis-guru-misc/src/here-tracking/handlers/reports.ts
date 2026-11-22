import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportsV4HealthRoute,
  getReportsV4ReportIdRoute,
  getReportsV4VersionRoute,
  postReportsV4Route,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(postReportsV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsV4HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsV4VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsV4ReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
