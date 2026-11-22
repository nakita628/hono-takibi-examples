import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListServicePipelineOutputsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListServicePipelineOutputsHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListServicePipelineOutputsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
