import { OpenAPIHono } from '@hono/zod-openapi'
import { getOncallsRoute } from '../routes'

const app = new OpenAPIHono()

export const onCallsHandler = app.openapi(getOncallsRoute, (c) => {
  throw new Error('Not implemented')
})
