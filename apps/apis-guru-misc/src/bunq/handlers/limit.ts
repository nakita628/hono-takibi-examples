import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDLimitRoute } from '../routes'

const app = new OpenAPIHono()

export const limitHandler = app.openapi(getUserUserIDLimitRoute, (c) => {
  throw new Error('Not implemented')
})
