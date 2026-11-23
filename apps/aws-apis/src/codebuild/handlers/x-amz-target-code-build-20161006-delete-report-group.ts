import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006DeleteReportGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006DeleteReportGroupHandler = app.openapi(
  postXAmzTargetCodeBuild20161006DeleteReportGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
