import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceDeleteComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceDeleteComponentHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceDeleteComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
