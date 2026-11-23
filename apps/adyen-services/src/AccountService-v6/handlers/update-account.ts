import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const updateAccountHandler = app.openapi(postUpdateAccountRoute, (c) => {
  throw new Error('Not implemented')
})
