import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListAssessmentTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceListAssessmentTargetsHandler = app.openapi(
  postXAmzTargetInspectorServiceListAssessmentTargetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
