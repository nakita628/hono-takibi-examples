import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute,
  patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
  patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute,
  postAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monetizationHandler = app
  .openapi(postAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
