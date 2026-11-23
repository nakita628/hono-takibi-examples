import { OpenAPIHono } from '@hono/zod-openapi'
import { postRecoverRoute } from '../routes'

const app = new OpenAPIHono()

export const recoverHandler = app.openapi(postRecoverRoute, (c) => {
  throw new Error('Not implemented')
})
