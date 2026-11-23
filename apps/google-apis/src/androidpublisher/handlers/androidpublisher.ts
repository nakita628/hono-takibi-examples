import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdRoute,
  deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute,
  deleteAndroidpublisherV3NameRoute,
  getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksRoute,
  getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute,
  getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadRoute,
  getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeRoute,
  getAndroidpublisherV3ApplicationsPackageNameInappproductsRoute,
  getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
  getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenRoute,
  getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRoute,
  getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenRoute,
  getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesRoute,
  getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameReviewsRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute,
  getAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute,
  getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute,
  getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadRoute,
  getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdRoute,
  getAndroidpublisherV3NameRoute,
  getAndroidpublisherV3ParentUsersRoute,
  patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
  patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute,
  patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute,
  patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute,
  patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute,
  patchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
  patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdRoute,
  patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdRoute,
  patchAndroidpublisherV3NameRoute,
  postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkRoute,
  postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleRoute,
  postAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateRoute,
  postAndroidpublisherV3ApplicationsPackageNameEditsRoute,
  postAndroidpublisherV3ApplicationsPackageNameInappproductsRoute,
  postAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundRoute,
  postAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundRoute,
  postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeRoute,
  postAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchiveRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePricesRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivateRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersRoute,
  postAndroidpublisherV3ApplicationsPackageNameSubscriptionsRoute,
  postAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute,
  postAndroidpublisherV3NameRefundRoute,
  postAndroidpublisherV3ParentExternalTransactionsRoute,
  postAndroidpublisherV3ParentGrantsRoute,
  postAndroidpublisherV3ParentUsersRoute,
  putAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
  putAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute,
  putAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute,
  putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute,
  putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute,
  putAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute,
} from '../routes'

const app = new OpenAPIHono()

export const androidpublisherHandler = app
  .openapi(
    postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApkRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAndroidpublisherV3ApplicationsPackageNameEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameEditsEditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHostedRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrackRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidpublisherV3ApplicationsPackageNameInappproductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameInappproductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAndroidpublisherV3ApplicationsPackageNameInappproductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledgeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsumeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledgeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDeferRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefundRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevokeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReplyRoute, (c) => {
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
  .openapi(getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteAndroidpublisherV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAndroidpublisherV3NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3NameRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ParentExternalTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ParentGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAndroidpublisherV3ParentUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAndroidpublisherV3ParentUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
