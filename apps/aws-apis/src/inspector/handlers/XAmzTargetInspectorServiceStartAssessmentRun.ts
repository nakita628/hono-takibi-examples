import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceStartAssessmentRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceStartAssessmentRunHandler = app.openapi(
  postXAmzTargetInspectorServiceStartAssessmentRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
