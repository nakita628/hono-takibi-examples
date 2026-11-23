import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AccountReportsSearchRoute, getV1DetailedLeadReportsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AccountReportsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DetailedLeadReportsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
