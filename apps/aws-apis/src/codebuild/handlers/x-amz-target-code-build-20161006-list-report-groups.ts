import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006ListReportGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006ListReportGroupsHandler = app.openapi(
  postXAmzTargetCodeBuild20161006ListReportGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
