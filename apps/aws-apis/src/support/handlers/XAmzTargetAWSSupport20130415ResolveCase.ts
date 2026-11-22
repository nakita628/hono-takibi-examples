import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415ResolveCaseRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSupport20130415ResolveCaseHandler = app.openapi(
  postXAmzTargetAWSSupport20130415ResolveCaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
