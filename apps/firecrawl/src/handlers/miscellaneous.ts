import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamQueueStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const miscellaneousHandler = app.openapi(getTeamQueueStatusRoute, (c) => {
  throw new Error('Not implemented')
})
