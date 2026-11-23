import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeregisterOrganizationDelegatedAdminRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeregisterOrganizationDelegatedAdminHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeregisterOrganizationDelegatedAdminRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
