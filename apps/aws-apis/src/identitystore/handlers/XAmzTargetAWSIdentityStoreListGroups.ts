import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreListGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSIdentityStoreListGroupsHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreListGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
