import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceCreateLogPatternRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetEc2WindowsBarleyServiceCreateLogPatternHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceCreateLogPatternRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
