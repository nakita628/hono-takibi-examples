import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceTagResourceHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
