import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiFeatsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const featsHandler = app.openapi(getApiFeatsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
