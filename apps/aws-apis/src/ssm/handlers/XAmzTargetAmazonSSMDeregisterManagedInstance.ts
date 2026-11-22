import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeregisterManagedInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDeregisterManagedInstanceHandler = app.openapi(
  postXAmzTargetAmazonSSMDeregisterManagedInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
