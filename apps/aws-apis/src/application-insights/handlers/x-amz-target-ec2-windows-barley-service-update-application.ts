import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceUpdateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceUpdateApplicationHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceUpdateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
