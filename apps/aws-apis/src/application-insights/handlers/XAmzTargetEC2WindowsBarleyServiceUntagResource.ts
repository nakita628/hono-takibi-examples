import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceUntagResourceHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
