import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestaurantsBylatlongRoute,
  getRestaurantsBypostcodePostcodeRoute,
  getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesRoute,
  getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsRoute,
  getRestaurantsTenantRestaurantIdCatalogueCategoriesRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsRoute,
  getRestaurantsTenantRestaurantIdCatalogueRoute,
  getRestaurantsTenantRestaurantIdFeesRoute,
  getRestaurantsTenantRestaurantIdMenuRoute,
  getRestaurantsTenantRestaurantIdServicetimesRoute,
  putRestaurantsDriverEtaRoute,
  putRestaurantsTenantRestaurantIdFeesRoute,
  putRestaurantsTenantRestaurantIdMenuRoute,
  putRestaurantsTenantRestaurantIdServicetimesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restaurantsHandler = app
  .openapi(getRestaurantsBylatlongRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsBypostcodePostcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestaurantsDriverEtaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdCatalogueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdCatalogueCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdCatalogueItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestaurantsTenantRestaurantIdFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestaurantsTenantRestaurantIdMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdServicetimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestaurantsTenantRestaurantIdServicetimesRoute, (c) => {
    throw new Error('Not implemented')
  })
