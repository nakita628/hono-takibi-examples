import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415DescribeSeverityLevelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSupport20130415DescribeSeverityLevelsHandler = app.openapi(
  postXAmzTargetAWSSupport20130415DescribeSeverityLevelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
