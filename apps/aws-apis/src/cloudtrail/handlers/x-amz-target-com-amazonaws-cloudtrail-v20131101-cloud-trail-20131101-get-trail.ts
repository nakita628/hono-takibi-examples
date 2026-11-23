import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailHandler =
  app.openapi(postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailRoute, (c) => {
    throw new Error('Not implemented')
  })
