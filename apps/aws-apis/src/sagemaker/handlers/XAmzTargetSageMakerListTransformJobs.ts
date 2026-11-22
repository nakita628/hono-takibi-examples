import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListTransformJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListTransformJobsHandler = app.openapi(
  postXAmzTargetSageMakerListTransformJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
