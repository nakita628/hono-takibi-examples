import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDeleteAssessmentTemplateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceDeleteAssessmentTemplateHandler = app.openapi(
  postXAmzTargetInspectorServiceDeleteAssessmentTemplateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
