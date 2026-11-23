import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamAccessLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const teamAccessLogsHandler = app.openapi(getTeamAccessLogsRoute, (c) => {
  throw new Error('Not implemented')
})
