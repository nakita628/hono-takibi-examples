import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceStartAssessmentRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceStartAssessmentRunHandler = app.openapi(
  postXAmzTargetInspectorServiceStartAssessmentRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
