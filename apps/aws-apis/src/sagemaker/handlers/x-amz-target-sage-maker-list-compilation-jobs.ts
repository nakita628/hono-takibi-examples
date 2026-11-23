import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListCompilationJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListCompilationJobsHandler = app.openapi(
  postXAmzTargetSageMakerListCompilationJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
