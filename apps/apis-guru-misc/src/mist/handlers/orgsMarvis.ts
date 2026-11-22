import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1OrgsOrgIdTroubleshootRoute } from '../routes'

const app = new OpenAPIHono()

export const orgsMarvisHandler = app.openapi(getApiV1OrgsOrgIdTroubleshootRoute, (c) => {
  throw new Error('Not implemented')
})
