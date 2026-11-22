import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationHandler =
  app.openapi(postXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
