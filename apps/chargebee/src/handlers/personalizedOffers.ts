import { OpenAPIHono } from '@hono/zod-openapi'
import { postPersonalizedOffersRoute } from '../routes'

const app = new OpenAPIHono()

export const personalizedOffersHandler = app.openapi(postPersonalizedOffersRoute, (c) => {
  throw new Error('Not implemented')
})
