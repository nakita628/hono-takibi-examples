import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListAssessmentRunAgentsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceListAssessmentRunAgentsHandler = app.openapi(
  postXAmzTargetInspectorServiceListAssessmentRunAgentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
