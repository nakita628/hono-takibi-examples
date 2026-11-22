import { OpenAPIHono } from '@hono/zod-openapi'
import { getTablesRowsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const tablesRowsHandler = app.openapi(getTablesRowsIdRoute, (c) => {
  throw new Error('Not implemented')
})
