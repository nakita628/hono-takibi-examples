import { OpenAPIHono } from '@hono/zod-openapi'
import { patchApiV2TeamsRoute } from '../routes'

const app = new OpenAPIHono()

export const teamsBetaHandler = app.openapi(patchApiV2TeamsRoute, (c) => {
  throw new Error('Not implemented')
})
