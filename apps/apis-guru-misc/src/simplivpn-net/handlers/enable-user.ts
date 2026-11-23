import { OpenAPIHono } from '@hono/zod-openapi'
import { postEnableUserRoute } from '../routes'

const app = new OpenAPIHono()

export const enableUserHandler = app.openapi(postEnableUserRoute, (c) => {
  throw new Error('Not implemented')
})
