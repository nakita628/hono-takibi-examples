import { OpenAPIHono } from '@hono/zod-openapi'
import { postDetectRoute } from '../routes'

const app = new OpenAPIHono()

export const detectHandler = app.openapi(postDetectRoute, (c) => {
  throw new Error('Not implemented')
})
