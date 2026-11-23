import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceListRetirableGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceListRetirableGrantsHandler = app.openapi(
  postXAmzTargetTrentServiceListRetirableGrantsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
