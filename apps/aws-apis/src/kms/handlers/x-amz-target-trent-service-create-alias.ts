import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceCreateAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceCreateAliasHandler = app.openapi(
  postXAmzTargetTrentServiceCreateAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
