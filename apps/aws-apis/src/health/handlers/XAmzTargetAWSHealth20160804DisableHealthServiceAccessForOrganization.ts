import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationHandler =
  app.openapi(
    postXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
