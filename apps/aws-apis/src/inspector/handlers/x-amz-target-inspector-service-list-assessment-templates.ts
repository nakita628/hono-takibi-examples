import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceListAssessmentTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceListAssessmentTemplatesHandler = app.openapi(
  postXAmzTargetInspectorServiceListAssessmentTemplatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
