import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDeleteAssessmentTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceDeleteAssessmentTargetHandler = app.openapi(
  postXAmzTargetInspectorServiceDeleteAssessmentTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
