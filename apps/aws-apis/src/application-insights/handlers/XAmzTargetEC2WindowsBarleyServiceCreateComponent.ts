import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceCreateComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceCreateComponentHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceCreateComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
