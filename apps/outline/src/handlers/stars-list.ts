import { OpenAPIHono } from '@hono/zod-openapi'
import { postStarsListRoute } from '../routes'

const app = new OpenAPIHono()

export const starsListHandler = app.openapi(postStarsListRoute, (c) => {
  throw new Error('Not implemented')
})
