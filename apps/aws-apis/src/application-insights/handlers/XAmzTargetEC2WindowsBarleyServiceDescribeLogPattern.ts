import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceDescribeLogPatternRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceDescribeLogPatternHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceDescribeLogPatternRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
