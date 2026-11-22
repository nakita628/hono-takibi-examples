import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesHandler =
  app.openapi(postXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
