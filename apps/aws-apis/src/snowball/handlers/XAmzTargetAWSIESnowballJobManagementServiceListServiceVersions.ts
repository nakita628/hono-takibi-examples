import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceListServiceVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
