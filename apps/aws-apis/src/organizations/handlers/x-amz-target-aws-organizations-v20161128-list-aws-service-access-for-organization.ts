import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128ListAwsServiceAccessForOrganizationHandler =
  app.openapi(
    postXAmzTargetAWSOrganizationsV20161128ListAWSServiceAccessForOrganizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
