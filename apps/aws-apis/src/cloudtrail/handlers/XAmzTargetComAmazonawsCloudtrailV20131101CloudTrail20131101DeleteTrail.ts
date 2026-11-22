import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrailRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrailHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrailRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
