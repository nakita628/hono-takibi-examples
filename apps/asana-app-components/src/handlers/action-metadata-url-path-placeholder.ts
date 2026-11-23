import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionMetadataUrlPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const actionMetadataUrlPathPlaceholderHandler = app.openapi(
  getActionMetadataUrlPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
