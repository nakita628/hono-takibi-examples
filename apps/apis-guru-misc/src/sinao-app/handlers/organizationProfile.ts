import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsAppIdOrganizationRoute, postAppsAppIdOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationProfileHandler = app
  .openapi(getAppsAppIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
