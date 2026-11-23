import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsieSnowballJobManagementServiceListCompatibleImagesHandler = app.openapi(
  postXAmzTargetAWSIESnowballJobManagementServiceListCompatibleImagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
