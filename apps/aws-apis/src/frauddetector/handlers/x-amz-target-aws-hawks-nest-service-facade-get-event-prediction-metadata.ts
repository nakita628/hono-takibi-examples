import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetEventPredictionMetadataHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
