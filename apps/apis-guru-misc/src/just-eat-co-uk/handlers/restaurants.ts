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
  getRestaurantsTenantRestaurantIdCustomerclaimsIdRoute,
  getRestaurantsTenantRestaurantIdCustomerclaimsRoute,
  getRestaurantsTenantRestaurantIdFeesRoute,
  getRestaurantsTenantRestaurantIdMenuRoute,
  getRestaurantsTenantRestaurantIdOrdertimesRoute,
  getRestaurantsTenantRestaurantIdServicetimesRoute,
  postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseRoute,
  putRestaurantsDriverEtaRoute,
  putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationRoute,
  putRestaurantsTenantRestaurantIdFeesRoute,
  putRestaurantsTenantRestaurantIdMenuRoute,
  putRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeRoute,
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
  .openapi(getRestaurantsTenantRestaurantIdCustomerclaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdCustomerclaimsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putRestaurantsTenantRestaurantIdCustomerclaimsIdRestaurantresponseJustificationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
  .openapi(getRestaurantsTenantRestaurantIdOrdertimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestaurantsTenantRestaurantIdOrdertimesDayOfWeekServiceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestaurantsTenantRestaurantIdServicetimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestaurantsTenantRestaurantIdServicetimesRoute, (c) => {
    throw new Error('Not implemented')
  })
