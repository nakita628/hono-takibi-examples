import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListQueriesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListQueriesHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListQueriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
