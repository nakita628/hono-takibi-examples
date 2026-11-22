import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateEdgePackagingJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateEdgePackagingJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateEdgePackagingJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
