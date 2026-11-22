import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceListLogPatternsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceListLogPatternsHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceListLogPatternsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
