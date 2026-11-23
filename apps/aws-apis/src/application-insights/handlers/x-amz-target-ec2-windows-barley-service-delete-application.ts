import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceDeleteApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceDeleteApplicationHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceDeleteApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
