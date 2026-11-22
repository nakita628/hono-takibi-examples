import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoute } from '../routes'

const app = new OpenAPIHono()

export const apiRootHandler = app.openapi(getRoute, (c) => {
  throw new Error('Not implemented')
})
