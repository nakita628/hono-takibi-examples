import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceTagResourceHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
