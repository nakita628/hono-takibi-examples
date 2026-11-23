import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListServiceInstanceOutputsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720ListServiceInstanceOutputsHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListServiceInstanceOutputsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
