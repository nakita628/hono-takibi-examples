import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceUpdateComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceUpdateComponentHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceUpdateComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
