import { OpenAPIHono } from '@hono/zod-openapi'
import { postPurgeRoute } from '../routes'

const app = new OpenAPIHono()

export const purgeHandler = app.openapi(postPurgeRoute, (c) => {
  throw new Error('Not implemented')
})
