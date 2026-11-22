import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDescribeAssessmentTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetInspectorServiceDescribeAssessmentTargetsHandler = app.openapi(
  postXAmzTargetInspectorServiceDescribeAssessmentTargetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
