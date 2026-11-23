import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportsHandler =
  app.openapi(
    postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
