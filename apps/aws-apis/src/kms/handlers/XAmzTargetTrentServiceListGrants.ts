import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceListGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceListGrantsHandler = app.openapi(
  postXAmzTargetTrentServiceListGrantsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
