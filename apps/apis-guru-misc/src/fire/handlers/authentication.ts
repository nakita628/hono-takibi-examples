import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1AppsAccesstokensRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app.openapi(postV1AppsAccesstokensRoute, (c) => {
  throw new Error('Not implemented')
})
