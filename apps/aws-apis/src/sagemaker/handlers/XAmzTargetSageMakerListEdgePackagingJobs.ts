import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListEdgePackagingJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListEdgePackagingJobsHandler = app.openapi(
  postXAmzTargetSageMakerListEdgePackagingJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
