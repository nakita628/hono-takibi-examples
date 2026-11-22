import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV3SeasonpassRoute } from '../routes'

const app = new OpenAPIHono()

export const seasonPassHandler = app.openapi(postApiV3SeasonpassRoute, (c) => {
  throw new Error('Not implemented')
})
