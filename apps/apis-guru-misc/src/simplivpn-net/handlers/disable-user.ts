import { OpenAPIHono } from '@hono/zod-openapi'
import { postDisableUserRoute } from '../routes'

const app = new OpenAPIHono()

export const disableUserHandler = app.openapi(postDisableUserRoute, (c) => {
  throw new Error('Not implemented')
})
