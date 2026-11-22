import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006DeleteReportRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006DeleteReportHandler = app.openapi(
  postXAmzTargetCodeBuild20161006DeleteReportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
