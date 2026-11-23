import { OpenAPIHono } from '@hono/zod-openapi'
import { postStarsAddRoute } from '../routes'

const app = new OpenAPIHono()

export const starsAddHandler = app.openapi(postStarsAddRoute, (c) => {
  throw new Error('Not implemented')
})
