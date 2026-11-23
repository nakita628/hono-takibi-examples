import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAlexaForBusinessUntagResourceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
