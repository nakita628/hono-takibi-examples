import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateUsernameRoute } from '../routes'

const app = new OpenAPIHono()

export const updateUsernameHandler = app.openapi(postUpdateUsernameRoute, (c) => {
  throw new Error('Not implemented')
})
