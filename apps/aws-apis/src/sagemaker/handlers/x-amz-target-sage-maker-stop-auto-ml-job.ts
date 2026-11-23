import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopAutoMLJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStopAutoMlJobHandler = app.openapi(
  postXAmzTargetSageMakerStopAutoMLJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
