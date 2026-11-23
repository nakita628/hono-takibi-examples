import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceDeleteAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServiceDeleteAliasHandler = app.openapi(
  postXAmzTargetTrentServiceDeleteAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
