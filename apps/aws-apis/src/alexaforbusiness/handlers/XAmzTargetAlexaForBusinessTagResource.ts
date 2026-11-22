import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAlexaForBusinessTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAlexaForBusinessTagResourceHandler = app.openapi(
  postXAmzTargetAlexaForBusinessTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
