import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetDetectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHawksNestServiceFacadeGetDetectorsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetDetectorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
