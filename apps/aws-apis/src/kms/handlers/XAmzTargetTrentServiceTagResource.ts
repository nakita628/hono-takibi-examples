import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceTagResourceHandler = app.openapi(
  postXAmzTargetTrentServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
