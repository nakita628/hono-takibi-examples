import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceCreateGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceCreateGrantHandler = app.openapi(
  postXAmzTargetTrentServiceCreateGrantRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
