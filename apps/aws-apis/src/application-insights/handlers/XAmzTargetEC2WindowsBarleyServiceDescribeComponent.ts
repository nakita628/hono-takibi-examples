import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceDescribeComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceDescribeComponentHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceDescribeComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
