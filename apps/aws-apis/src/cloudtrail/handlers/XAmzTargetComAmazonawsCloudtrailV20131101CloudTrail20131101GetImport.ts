import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetImportRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetImportHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetImportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
