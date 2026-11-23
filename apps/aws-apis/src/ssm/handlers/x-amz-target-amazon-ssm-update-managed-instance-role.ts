import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateManagedInstanceRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmUpdateManagedInstanceRoleHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateManagedInstanceRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
