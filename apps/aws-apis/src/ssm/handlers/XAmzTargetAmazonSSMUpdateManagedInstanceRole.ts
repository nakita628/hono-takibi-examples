import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateManagedInstanceRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMUpdateManagedInstanceRoleHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateManagedInstanceRoleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
