import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateNthRootRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateNthRootHandler = app.openapi(postCalculateNthRootRoute, (c) => {
  throw new Error('Not implemented')
})
