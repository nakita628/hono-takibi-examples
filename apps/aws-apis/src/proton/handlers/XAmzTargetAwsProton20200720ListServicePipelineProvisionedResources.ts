import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesHandler =
  app.openapi(postXAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
