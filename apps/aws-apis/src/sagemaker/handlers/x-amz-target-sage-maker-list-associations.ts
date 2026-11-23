import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListAssociationsHandler = app.openapi(
  postXAmzTargetSageMakerListAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
