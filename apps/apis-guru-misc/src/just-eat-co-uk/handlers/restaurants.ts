import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestaurantsBylatlongRoute,
  getRestaurantsBypostcodePostcodeRoute,
  putRestaurantsDriverEtaRoute,
  getRestaurantsTenantRestaurantIdCatalogueRoute,
  getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesRoute,
  getRestaurantsTenantRestaurantIdCatalogueCategoriesRoute,
  getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsRoute,
  getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsRoute,
  getRestaurantsTenantRestaurantIdFeesRoute,
  putRestaurantsTenantRestaurantIdFeesRoute,
  getRestaurantsTenantRestaurantIdMenuRoute,
  putRestaurantsTenantRestaurantIdMenuRoute,
  getRestaurantsTenantRestaurantIdServicetimesRoute,
  putRestaurantsTenantRestaurantIdServicetimesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restaurantsHandler = app
  .openapi(getRestaurantsBylatlongRoute, (c) => {})
  .openapi(getRestaurantsBypostcodePostcodeRoute, (c) => {})
  .openapi(putRestaurantsDriverEtaRoute, (c) => {})
  .openapi(getRestaurantsTenantRestaurantIdCatalogueRoute, (c) => {})
  .openapi(getRestaurantsTenantRestaurantIdCatalogueAvailabilitiesRoute, (c) => {})
  .openapi(getRestaurantsTenantRestaurantIdCatalogueCategoriesRoute, (c) => {})
  .openapi(getRestaurantsTenantRestaurantIdCatalogueCategoriesCategoryIdItemsRoute, (c) => {})
  .openapi(getRestaurantsTenantRestaurantIdCatalogueItemsRoute, (c) => {})
  .openapi(getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsRoute, (c) => {})
  .openapi(
    getRestaurantsTenantRestaurantIdCatalogueItemsItemIdDealgroupsDealGroupIdDealitemvariationsRoute,
    (c) => {},
  )
  .openapi(getRestaurantsTenantRestaurantIdCatalogueItemsItemIdModifiergroupsRoute, (c) => {})
  .openapi(getRestaurantsTenantRestaurantIdCatalogueItemsItemIdVariationsRoute, (c) => {})
  .openapi(getRestaurantsTenantRestaurantIdFeesRoute, (c) => {})
  .openapi(putRestaurantsTenantRestaurantIdFeesRoute, (c) => {})
  .openapi(getRestaurantsTenantRestaurantIdMenuRoute, (c) => {})
  .openapi(putRestaurantsTenantRestaurantIdMenuRoute, (c) => {})
  .openapi(getRestaurantsTenantRestaurantIdServicetimesRoute, (c) => {})
  .openapi(putRestaurantsTenantRestaurantIdServicetimesRoute, (c) => {})
