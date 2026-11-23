import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const getProfileHandler = app.openapi(postGetProfileRoute, (c) => {
  throw new Error('Not implemented')
})
