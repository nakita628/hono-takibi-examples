import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateChannelHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateChannelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
