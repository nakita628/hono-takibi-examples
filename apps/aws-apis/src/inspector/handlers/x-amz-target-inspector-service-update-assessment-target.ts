import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceUpdateAssessmentTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceUpdateAssessmentTargetHandler = app.openapi(
  postXAmzTargetInspectorServiceUpdateAssessmentTargetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
