import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationMembershipsRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationMembershipsHandler = app.openapi(getOrganizationMembershipsRoute, (c) => {
  throw new Error('Not implemented')
})
