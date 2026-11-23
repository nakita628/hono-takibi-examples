import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDescribeKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceDescribeKeyHandler = app.openapi(
  postXAmzTargetTrentServiceDescribeKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
