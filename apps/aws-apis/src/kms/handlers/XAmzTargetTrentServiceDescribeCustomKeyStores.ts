import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDescribeCustomKeyStoresRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceDescribeCustomKeyStoresHandler = app.openapi(
  postXAmzTargetTrentServiceDescribeCustomKeyStoresRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
