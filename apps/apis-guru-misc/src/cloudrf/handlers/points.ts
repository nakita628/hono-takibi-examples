import { OpenAPIHono } from '@hono/zod-openapi'
import { postPointsRoute } from '../routes'

const app = new OpenAPIHono()

export const pointsHandler = app.openapi(postPointsRoute, (c) => {
  throw new Error('Not implemented')
})
