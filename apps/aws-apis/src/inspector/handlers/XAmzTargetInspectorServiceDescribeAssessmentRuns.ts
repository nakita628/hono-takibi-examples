import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDescribeAssessmentRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceDescribeAssessmentRunsHandler = app.openapi(
  postXAmzTargetInspectorServiceDescribeAssessmentRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
