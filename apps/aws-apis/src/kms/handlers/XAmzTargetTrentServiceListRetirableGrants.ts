import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceListRetirableGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceListRetirableGrantsHandler = app.openapi(
  postXAmzTargetTrentServiceListRetirableGrantsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
