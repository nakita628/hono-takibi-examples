import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryRoute,
  postV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaces__ChannelCatalogs__PublicationsHandler = app
  .openapi(
    getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
