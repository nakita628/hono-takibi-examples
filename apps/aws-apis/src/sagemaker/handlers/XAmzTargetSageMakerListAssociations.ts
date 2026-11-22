import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListAssociationsHandler = app.openapi(
  postXAmzTargetSageMakerListAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
