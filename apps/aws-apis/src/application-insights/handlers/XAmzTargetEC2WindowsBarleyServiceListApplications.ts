import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceListApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceListApplicationsHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceListApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
