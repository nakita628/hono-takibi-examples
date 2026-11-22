import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeAliasHandler = app.openapi(
  postXAmzTargetGameLiftDescribeAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
