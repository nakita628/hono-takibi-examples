import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const authInfoHandler = app.openapi(postAuthInfoRoute, (c) => {
  throw new Error('Not implemented')
})
