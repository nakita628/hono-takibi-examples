import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceUpdateLogPatternRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceUpdateLogPatternHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceUpdateLogPatternRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
