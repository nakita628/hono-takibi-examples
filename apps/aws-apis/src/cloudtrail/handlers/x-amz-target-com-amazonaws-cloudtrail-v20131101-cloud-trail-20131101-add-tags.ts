import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101AddTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101AddTagsHandler =
  app.openapi(postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101AddTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
