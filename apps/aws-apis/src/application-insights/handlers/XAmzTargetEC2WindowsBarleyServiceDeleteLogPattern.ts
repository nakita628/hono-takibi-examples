import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceDeleteLogPatternRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceDeleteLogPatternHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceDeleteLogPatternRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
