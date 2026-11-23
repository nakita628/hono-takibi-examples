import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006ListReportsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListReportsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
