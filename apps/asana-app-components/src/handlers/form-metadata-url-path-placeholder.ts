import { OpenAPIHono } from '@hono/zod-openapi'
import { getFormMetadataUrlPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const formMetadataUrlPathPlaceholderHandler = app.openapi(
  getFormMetadataUrlPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
