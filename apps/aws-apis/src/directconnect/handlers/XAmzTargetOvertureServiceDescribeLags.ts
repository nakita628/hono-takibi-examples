import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeLagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeLagsHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeLagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
