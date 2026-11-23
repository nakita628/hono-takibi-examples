import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceDescribeComponentConfigurationHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceDescribeComponentConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
