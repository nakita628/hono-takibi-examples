import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624GetAwsDefaultServiceQuotaHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624GetAWSDefaultServiceQuotaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
