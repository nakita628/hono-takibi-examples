import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeCompilationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeCompilationJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeCompilationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
