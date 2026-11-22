import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessUntagResourceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
