import { OpenAPIHono } from '@hono/zod-openapi'
import { postDsQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const dsHandler = app.openapi(postDsQueryRoute, (c) => {
  throw new Error('Not implemented')
})
