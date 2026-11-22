import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceUpdateAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceUpdateAliasHandler = app.openapi(
  postXAmzTargetTrentServiceUpdateAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
