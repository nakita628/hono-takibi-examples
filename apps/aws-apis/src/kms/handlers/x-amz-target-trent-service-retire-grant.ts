import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceRetireGrantRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceRetireGrantHandler = app.openapi(
  postXAmzTargetTrentServiceRetireGrantRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
