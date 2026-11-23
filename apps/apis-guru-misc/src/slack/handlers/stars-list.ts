import { OpenAPIHono } from '@hono/zod-openapi'
import { getStarsListRoute } from '../routes'

const app = new OpenAPIHono()

export const starsListHandler = app.openapi(getStarsListRoute, (c) => {
  throw new Error('Not implemented')
})
