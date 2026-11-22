import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006BatchGetReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006BatchGetReportsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006BatchGetReportsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
