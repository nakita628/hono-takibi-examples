import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetServiceQuotasV20190624ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetServiceQuotasV20190624ListTagsForResourceHandler = app.openapi(
  postXAmzTargetServiceQuotasV20190624ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
