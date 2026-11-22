import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopEdgePackagingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStopEdgePackagingJobHandler = app.openapi(
  postXAmzTargetSageMakerStopEdgePackagingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
