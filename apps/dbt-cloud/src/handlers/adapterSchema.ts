import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3AdapterSchemaIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const adapterSchemaHandler = app.openapi(getApiV3AdapterSchemaIndexRoute, (c) => {
  throw new Error('Not implemented')
})
