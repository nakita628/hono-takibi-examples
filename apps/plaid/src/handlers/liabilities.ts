import { OpenAPIHono } from '@hono/zod-openapi'
import { postLiabilitiesGetRoute } from '../routes'

const app = new OpenAPIHono()

export const liabilitiesHandler = app.openapi(postLiabilitiesGetRoute, (c) => {
  throw new Error('Not implemented')
})
