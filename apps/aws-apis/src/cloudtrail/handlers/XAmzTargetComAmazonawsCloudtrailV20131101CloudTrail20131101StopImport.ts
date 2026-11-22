import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopImportRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopImportHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopImportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
