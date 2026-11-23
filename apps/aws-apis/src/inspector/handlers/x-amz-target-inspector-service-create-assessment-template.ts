import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceCreateAssessmentTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceCreateAssessmentTemplateHandler = app.openapi(
  postXAmzTargetInspectorServiceCreateAssessmentTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
