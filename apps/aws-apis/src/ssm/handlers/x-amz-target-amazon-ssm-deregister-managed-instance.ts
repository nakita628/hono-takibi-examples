import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDeregisterManagedInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDeregisterManagedInstanceHandler = app.openapi(
  postXAmzTargetAmazonSSMDeregisterManagedInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
