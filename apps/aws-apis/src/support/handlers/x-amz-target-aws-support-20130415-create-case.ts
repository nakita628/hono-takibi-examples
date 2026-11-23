import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415CreateCaseRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSupport20130415CreateCaseHandler = app.openapi(
  postXAmzTargetAWSSupport20130415CreateCaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
