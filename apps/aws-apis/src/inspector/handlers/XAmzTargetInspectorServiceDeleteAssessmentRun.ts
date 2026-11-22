import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDeleteAssessmentRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceDeleteAssessmentRunHandler = app.openapi(
  postXAmzTargetInspectorServiceDeleteAssessmentRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
