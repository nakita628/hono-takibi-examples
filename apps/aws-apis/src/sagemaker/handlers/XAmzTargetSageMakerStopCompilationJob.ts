import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopCompilationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerStopCompilationJobHandler = app.openapi(
  postXAmzTargetSageMakerStopCompilationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
