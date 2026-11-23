import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTagsHandler =
  app.openapi(postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
