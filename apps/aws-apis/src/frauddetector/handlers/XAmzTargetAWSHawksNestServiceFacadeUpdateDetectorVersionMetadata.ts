import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
