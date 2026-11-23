import { OpenAPIHono } from '@hono/zod-openapi'
import { getServiceVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceVersionsHandler = app.openapi(getServiceVersionsRoute, (c) => {
  throw new Error('Not implemented')
})
