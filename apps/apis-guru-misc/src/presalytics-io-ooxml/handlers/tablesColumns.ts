import { OpenAPIHono } from '@hono/zod-openapi'
import { getTablesColumnsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const tablesColumnsHandler = app.openapi(getTablesColumnsIdRoute, (c) => {
  throw new Error('Not implemented')
})
