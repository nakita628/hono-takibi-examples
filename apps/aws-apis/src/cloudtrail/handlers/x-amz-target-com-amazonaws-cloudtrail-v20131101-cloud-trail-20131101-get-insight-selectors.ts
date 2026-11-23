import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectorsHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
