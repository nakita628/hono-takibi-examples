import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceCreateAssessmentTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceCreateAssessmentTemplateHandler = app.openapi(
  postXAmzTargetInspectorServiceCreateAssessmentTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
