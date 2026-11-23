import { OpenAPIHono } from '@hono/zod-openapi'
import { getTeamBillableInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const teamBillableInfoHandler = app.openapi(getTeamBillableInfoRoute, (c) => {
  throw new Error('Not implemented')
})
