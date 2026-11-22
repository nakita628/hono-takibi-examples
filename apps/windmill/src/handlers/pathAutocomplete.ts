import { OpenAPIHono } from '@hono/zod-openapi'
import { getWWorkspacePathAutocompleteListPathsRoute } from '../routes'

const app = new OpenAPIHono()

export const pathAutocompleteHandler = app.openapi(
  getWWorkspacePathAutocompleteListPathsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
