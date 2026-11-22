import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceCreateAssessmentTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceCreateAssessmentTargetHandler = app.openapi(
  postXAmzTargetInspectorServiceCreateAssessmentTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
