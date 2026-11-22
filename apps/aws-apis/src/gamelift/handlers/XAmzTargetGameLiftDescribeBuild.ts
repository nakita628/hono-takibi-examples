import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeBuildRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDescribeBuildHandler = app.openapi(
  postXAmzTargetGameLiftDescribeBuildRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
