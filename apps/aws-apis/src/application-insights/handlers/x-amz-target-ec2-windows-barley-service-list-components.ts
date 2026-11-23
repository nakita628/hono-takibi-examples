import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceListComponentsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceListComponentsHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceListComponentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
