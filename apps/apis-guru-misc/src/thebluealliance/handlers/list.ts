import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamTeamKeyEventsYearStatusesRoute } from '../routes'

const app = new OpenAPIHono()

export const listHandler = app.openapi(getTeamTeamKeyEventsYearStatusesRoute, (c) => {
  throw new Error('Not implemented')
})
