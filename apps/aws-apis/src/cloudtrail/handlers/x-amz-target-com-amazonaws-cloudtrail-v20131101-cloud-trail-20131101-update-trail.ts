import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrailRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrailHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
