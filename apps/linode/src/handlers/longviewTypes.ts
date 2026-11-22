import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionLongviewTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const longviewTypesHandler = app.openapi(getApiVersionLongviewTypesRoute, (c) => {
  throw new Error('Not implemented')
})
