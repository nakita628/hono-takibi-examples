import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSMPMeteringServiceRegisterUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSMPMeteringServiceRegisterUsageHandler = app.openapi(
  postXAmzTargetAWSMPMeteringServiceRegisterUsageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
