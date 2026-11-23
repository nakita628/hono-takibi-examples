import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHawksNestServiceFacadeGetDetectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsHawksNestServiceFacadeGetDetectorsHandler = app.openapi(
  postXAmzTargetAWSHawksNestServiceFacadeGetDetectorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
