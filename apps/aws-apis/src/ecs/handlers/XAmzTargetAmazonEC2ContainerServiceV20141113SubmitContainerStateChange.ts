import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChangeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChangeHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChangeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
