import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListServicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720ListServicesHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListServicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
