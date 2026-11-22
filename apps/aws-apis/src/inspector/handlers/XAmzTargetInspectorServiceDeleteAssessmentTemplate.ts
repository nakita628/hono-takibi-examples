import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDeleteAssessmentTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceDeleteAssessmentTemplateHandler = app.openapi(
  postXAmzTargetInspectorServiceDeleteAssessmentTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
