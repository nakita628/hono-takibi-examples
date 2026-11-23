import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSIdentityStoreListGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsIdentityStoreListGroupsHandler = app.openapi(
  postXAmzTargetAWSIdentityStoreListGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
