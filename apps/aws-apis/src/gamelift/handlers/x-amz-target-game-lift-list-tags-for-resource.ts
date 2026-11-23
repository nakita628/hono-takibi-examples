import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftListTagsForResourceHandler = app.openapi(
  postXAmzTargetGameLiftListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
