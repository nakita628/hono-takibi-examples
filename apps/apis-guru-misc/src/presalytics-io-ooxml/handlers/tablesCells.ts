import { OpenAPIHono } from '@hono/zod-openapi'
import { getTablesCellsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const tablesCellsHandler = app.openapi(getTablesCellsIdRoute, (c) => {
  throw new Error('Not implemented')
})
