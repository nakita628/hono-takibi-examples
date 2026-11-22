import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSupport20130415DescribeCasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSupport20130415DescribeCasesHandler = app.openapi(
  postXAmzTargetAWSSupport20130415DescribeCasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
