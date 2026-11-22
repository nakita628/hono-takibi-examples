import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
