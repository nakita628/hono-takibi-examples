import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RestoreEventDataStoreRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RestoreEventDataStoreHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RestoreEventDataStoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
