import { OpenAPIHono } from '@hono/zod-openapi'
import { getProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app.openapi(getProfileRoute, (c) => {
  throw new Error('Not implemented')
})
