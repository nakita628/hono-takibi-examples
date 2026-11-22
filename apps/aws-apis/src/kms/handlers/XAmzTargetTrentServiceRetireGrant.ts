import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceRetireGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceRetireGrantHandler = app.openapi(
  postXAmzTargetTrentServiceRetireGrantRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
