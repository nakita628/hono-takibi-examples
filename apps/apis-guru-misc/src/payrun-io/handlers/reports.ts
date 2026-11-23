import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportsRoute, postReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
