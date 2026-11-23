import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceDescribeApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceDescribeApplicationHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceDescribeApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
