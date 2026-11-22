import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
