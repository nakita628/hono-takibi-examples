import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChangesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113SubmitAttachmentStateChangesHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChangesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
