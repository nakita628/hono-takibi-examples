import { OpenAPIHono } from '@hono/zod-openapi'
import { postPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const passwordHandler = app.openapi(postPasswordRoute, (c) => {
  throw new Error('Not implemented')
})
