import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetInspectorServiceDescribeAssessmentTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetInspectorServiceDescribeAssessmentTemplatesHandler = app.openapi(
  postXAmzTargetInspectorServiceDescribeAssessmentTemplatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
