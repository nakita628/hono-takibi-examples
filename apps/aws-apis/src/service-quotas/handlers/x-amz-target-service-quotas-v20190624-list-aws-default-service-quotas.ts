import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624ListAwsDefaultServiceQuotasHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624ListAWSDefaultServiceQuotasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
