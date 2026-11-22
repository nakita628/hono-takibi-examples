import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationHandler =
  app.openapi(
    postXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
