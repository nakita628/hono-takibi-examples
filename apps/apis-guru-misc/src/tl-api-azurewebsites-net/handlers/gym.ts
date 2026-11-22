import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiGymGymIDRoute } from '../routes'

const app = new OpenAPIHono()

export const gymHandler = app.openapi(getApiGymGymIDRoute, (c) => {
  throw new Error('Not implemented')
})
