import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChangeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113SubmitTaskStateChangeHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChangeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
