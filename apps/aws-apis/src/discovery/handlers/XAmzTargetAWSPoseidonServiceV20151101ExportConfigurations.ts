import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
