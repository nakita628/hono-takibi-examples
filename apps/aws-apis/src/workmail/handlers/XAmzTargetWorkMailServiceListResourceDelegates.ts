import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListResourceDelegatesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceListResourceDelegatesHandler = app.openapi(
  postXAmzTargetWorkMailServiceListResourceDelegatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
