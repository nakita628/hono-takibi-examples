import { OpenAPIHono } from '@hono/zod-openapi'
import { putV2UserChannelCatalogsChannelCatalogIdColumnMappingsRoute } from '../routes'

const app = new OpenAPIHono()

export const channelCatalogs__ColumnMappingsHandler = app.openapi(
  putV2UserChannelCatalogsChannelCatalogIdColumnMappingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
