import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListComponentProvisionedResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListComponentProvisionedResourcesHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListComponentProvisionedResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
