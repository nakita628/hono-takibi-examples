import { OpenAPIHono } from '@hono/zod-openapi'
import { getDndTeamInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const dndTeamInfoHandler = app.openapi(getDndTeamInfoRoute, (c) => {
  throw new Error('Not implemented')
})
