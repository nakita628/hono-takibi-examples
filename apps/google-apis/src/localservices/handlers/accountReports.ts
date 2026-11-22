import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AccountReportsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const accountReportsHandler = app.openapi(getV1AccountReportsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
