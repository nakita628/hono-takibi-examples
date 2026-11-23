import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const createAccountHandler = app.openapi(postCreateAccountRoute, (c) => {
  throw new Error('Not implemented')
})
