import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1IndexRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(getV1IndexRoute, (c) => {
  throw new Error('Not implemented')
})
