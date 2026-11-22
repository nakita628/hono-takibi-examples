import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1OrgsOrgIdClaimRoute } from '../routes'

const app = new OpenAPIHono()

export const orgsClaimHandler = app.openapi(postApiV1OrgsOrgIdClaimRoute, (c) => {
  throw new Error('Not implemented')
})
