import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateCompilationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateCompilationJobHandler = app.openapi(
  postXAmzTargetSageMakerCreateCompilationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
