import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceUpdateComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceUpdateComponentHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceUpdateComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
