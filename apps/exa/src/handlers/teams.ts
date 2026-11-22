import { OpenAPIHono } from '@hono/zod-openapi'
import { getV0TeamsMeRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app.openapi(getV0TeamsMeRoute, (c) => {
  throw new Error('Not implemented')
})
