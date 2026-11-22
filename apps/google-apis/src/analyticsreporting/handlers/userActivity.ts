import { OpenAPIHono } from '@hono/zod-openapi'
import { postV4UserActivitySearchRoute } from '../routes'

const app = new OpenAPIHono()

export const userActivityHandler = app.openapi(postV4UserActivitySearchRoute, (c) => {
  throw new Error('Not implemented')
})
