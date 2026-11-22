import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListCompilationJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListCompilationJobsHandler = app.openapi(
  postXAmzTargetSageMakerListCompilationJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
