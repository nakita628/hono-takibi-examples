import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateServicePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720UpdateServicePipelineHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateServicePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
