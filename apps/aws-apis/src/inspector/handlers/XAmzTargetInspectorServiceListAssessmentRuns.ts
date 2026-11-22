import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListAssessmentRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceListAssessmentRunsHandler = app.openapi(
  postXAmzTargetInspectorServiceListAssessmentRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
