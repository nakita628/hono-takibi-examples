import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthorise3dRoute } from '../routes'

const app = new OpenAPIHono()

export const authorise3dHandler = app.openapi(postAuthorise3dRoute, (c) => {
  throw new Error('Not implemented')
})
