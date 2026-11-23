import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopEdgePackagingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStopEdgePackagingJobHandler = app.openapi(
  postXAmzTargetSageMakerStopEdgePackagingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
