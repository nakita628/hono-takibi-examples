import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetEC2WindowsBarleyServiceListLogPatternSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetEC2WindowsBarleyServiceListLogPatternSetsHandler = app.openapi(
  postXAmzTargetEC2WindowsBarleyServiceListLogPatternSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
