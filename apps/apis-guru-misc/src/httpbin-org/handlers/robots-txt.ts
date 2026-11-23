import { OpenAPIHono } from '@hono/zod-openapi'
import { getRobotsTxtRoute } from '../routes'

const app = new OpenAPIHono()

export const robotsTxtHandler = app.openapi(getRobotsTxtRoute, (c) => {
  throw new Error('Not implemented')
})
