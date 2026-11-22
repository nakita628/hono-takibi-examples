import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UserChannelCatalogsChannelCatalogIdRoute,
  getV2UserChannelCatalogsChannelCatalogIdRoute,
  getV2UserChannelCatalogsFilterOperatorsRoute,
  getV2UserChannelCatalogsIndexRoute,
  postV2UserChannelCatalogsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelCatalogs__GlobalHandler = app
  .openapi(getV2UserChannelCatalogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsFilterOperatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserChannelCatalogsChannelCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
