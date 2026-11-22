import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftListTagsForResourceHandler = app.openapi(
  postXAmzTargetGameLiftListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
