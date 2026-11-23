import { OpenAPIHono } from '@hono/zod-openapi'
import { postChangepasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const changepasswordHandler = app.openapi(postChangepasswordRoute, (c) => {
  throw new Error('Not implemented')
})
