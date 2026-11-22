import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListAssessmentRunAgentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceListAssessmentRunAgentsHandler = app.openapi(
  postXAmzTargetInspectorServiceListAssessmentRunAgentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
