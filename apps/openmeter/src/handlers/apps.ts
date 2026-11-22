import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppsIdRoute,
  getApiV1AppsIdRoute,
  getApiV1AppsRoute,
  getApiV1MarketplaceListingsRoute,
  getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeRoute,
  getApiV1MarketplaceListingsTypeInstallOauth2Route,
  getApiV1MarketplaceListingsTypeRoute,
  postApiV1MarketplaceListingsTypeInstallApikeyRoute,
  postApiV1MarketplaceListingsTypeInstallRoute,
  putApiV1AppsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getApiV1AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MarketplaceListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MarketplaceListingsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MarketplaceListingsTypeInstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MarketplaceListingsTypeInstallApikeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MarketplaceListingsTypeInstallOauth2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
