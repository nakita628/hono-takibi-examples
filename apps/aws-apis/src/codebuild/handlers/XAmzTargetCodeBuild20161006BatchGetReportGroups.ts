import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006BatchGetReportGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006BatchGetReportGroupsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006BatchGetReportGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
