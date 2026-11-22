import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceSignRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceSignHandler = app.openapi(
  postXAmzTargetTrentServiceSignRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
