import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopAutoMLJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStopAutoMLJobHandler = app.openapi(
  postXAmzTargetSageMakerStopAutoMLJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
