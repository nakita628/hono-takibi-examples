import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftListBuildsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftListBuildsHandler = app.openapi(
  postXAmzTargetGameLiftListBuildsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
