import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceUntagResourceHandler = app.openapi(
  postXAmzTargetTrentServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
