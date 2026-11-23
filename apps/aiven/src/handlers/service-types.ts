import { OpenAPIHono } from '@hono/zod-openapi'
import { getServiceTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceTypesHandler = app.openapi(getServiceTypesRoute, (c) => {
  throw new Error('Not implemented')
})
