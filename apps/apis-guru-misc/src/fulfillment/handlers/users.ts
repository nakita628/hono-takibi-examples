import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersMeRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(getUsersMeRoute, (c) => {
  throw new Error('Not implemented')
})
