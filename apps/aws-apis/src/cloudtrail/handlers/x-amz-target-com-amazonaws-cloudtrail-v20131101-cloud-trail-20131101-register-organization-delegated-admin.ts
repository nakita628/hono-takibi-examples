import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RegisterOrganizationDelegatedAdminRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RegisterOrganizationDelegatedAdminHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RegisterOrganizationDelegatedAdminRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
