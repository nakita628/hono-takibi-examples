import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceCreateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceCreateApplicationHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceCreateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
