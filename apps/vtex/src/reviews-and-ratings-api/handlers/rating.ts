import { OpenAPIHono } from '@hono/zod-openapi'
import { getRatingProductIdRoute } from '../routes'

const app = new OpenAPIHono()

export const ratingHandler = app.openapi(getRatingProductIdRoute, (c) => {
  throw new Error('Not implemented')
})
