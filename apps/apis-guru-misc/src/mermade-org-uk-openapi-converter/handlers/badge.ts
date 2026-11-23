import { OpenAPIHono } from '@hono/zod-openapi'
import { getBadgeRoute } from '../routes'

const app = new OpenAPIHono()

export const badgeHandler = app.openapi(getBadgeRoute, (c) => {
  throw new Error('Not implemented')
})
