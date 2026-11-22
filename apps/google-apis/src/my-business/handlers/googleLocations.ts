import { OpenAPIHono } from '@hono/zod-openapi'
import { postV4GoogleLocationsSearchRoute, postV4NameReportRoute } from '../routes'

const app = new OpenAPIHono()

export const googleLocationsHandler = app
  .openapi(postV4GoogleLocationsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NameReportRoute, (c) => {
    throw new Error('Not implemented')
  })
