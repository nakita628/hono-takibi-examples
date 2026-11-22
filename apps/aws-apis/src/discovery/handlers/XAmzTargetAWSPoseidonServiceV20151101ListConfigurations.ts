import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101ListConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101ListConfigurationsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101ListConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
