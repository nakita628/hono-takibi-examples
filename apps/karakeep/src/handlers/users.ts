import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersMeRoute, getUsersMeStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
