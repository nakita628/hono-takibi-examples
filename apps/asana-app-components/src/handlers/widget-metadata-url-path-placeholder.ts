import { OpenAPIHono } from '@hono/zod-openapi'
import { getWidgetMetadataUrlPathPlaceholderRoute } from '../routes'

const app = new OpenAPIHono()

export const widgetMetadataUrlPathPlaceholderHandler = app.openapi(
  getWidgetMetadataUrlPathPlaceholderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
