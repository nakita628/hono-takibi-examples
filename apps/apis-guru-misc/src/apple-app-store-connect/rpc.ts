import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function patchV1AgeRatingDeclarationsId(
  args: InferRequestType<(typeof client.v1.ageRatingDeclarations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ageRatingDeclarations[':id'].$patch(args, options))
}

export async function getV1AppCategories(
  args: InferRequestType<typeof client.v1.appCategories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appCategories.$get(args, options))
}

export async function getV1AppCategoriesId(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appCategories[':id'].$get(args, options))
}

export async function getV1AppCategoriesIdParent(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['parent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appCategories[':id'].parent.$get(args, options))
}

export async function getV1AppCategoriesIdSubcategories(
  args: InferRequestType<(typeof client.v1.appCategories)[':id']['subcategories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appCategories[':id'].subcategories.$get(args, options))
}

export async function getV1AppEncryptionDeclarations(
  args: InferRequestType<typeof client.v1.appEncryptionDeclarations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appEncryptionDeclarations.$get(args, options))
}

export async function getV1AppEncryptionDeclarationsId(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appEncryptionDeclarations[':id'].$get(args, options))
}

export async function getV1AppEncryptionDeclarationsIdApp(
  args: InferRequestType<(typeof client.v1.appEncryptionDeclarations)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appEncryptionDeclarations[':id'].app.$get(args, options))
}

export async function postV1AppEncryptionDeclarationsIdRelationshipsBuilds(
  args: InferRequestType<
    (typeof client.v1.appEncryptionDeclarations)[':id']['relationships']['builds']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appEncryptionDeclarations[':id'].relationships.builds.$post(args, options),
  )
}

export async function postV1AppInfoLocalizations(
  args: InferRequestType<typeof client.v1.appInfoLocalizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfoLocalizations.$post(args, options))
}

export async function getV1AppInfoLocalizationsId(
  args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfoLocalizations[':id'].$get(args, options))
}

export async function deleteV1AppInfoLocalizationsId(
  args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfoLocalizations[':id'].$delete(args, options))
}

export async function patchV1AppInfoLocalizationsId(
  args: InferRequestType<(typeof client.v1.appInfoLocalizations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfoLocalizations[':id'].$patch(args, options))
}

export async function getV1AppInfosId(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfos[':id'].$get(args, options))
}

export async function patchV1AppInfosId(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfos[':id'].$patch(args, options))
}

export async function getV1AppInfosIdAgeRatingDeclaration(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['ageRatingDeclaration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfos[':id'].ageRatingDeclaration.$get(args, options))
}

export async function getV1AppInfosIdAppInfoLocalizations(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['appInfoLocalizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfos[':id'].appInfoLocalizations.$get(args, options))
}

export async function getV1AppInfosIdPrimaryCategory(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primaryCategory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfos[':id'].primaryCategory.$get(args, options))
}

export async function getV1AppInfosIdPrimarySubcategoryOne(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryOne']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfos[':id'].primarySubcategoryOne.$get(args, options))
}

export async function getV1AppInfosIdPrimarySubcategoryTwo(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['primarySubcategoryTwo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfos[':id'].primarySubcategoryTwo.$get(args, options))
}

export async function getV1AppInfosIdSecondaryCategory(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondaryCategory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfos[':id'].secondaryCategory.$get(args, options))
}

export async function getV1AppInfosIdSecondarySubcategoryOne(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryOne']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfos[':id'].secondarySubcategoryOne.$get(args, options))
}

export async function getV1AppInfosIdSecondarySubcategoryTwo(
  args: InferRequestType<(typeof client.v1.appInfos)[':id']['secondarySubcategoryTwo']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appInfos[':id'].secondarySubcategoryTwo.$get(args, options))
}

export async function postV1AppPreOrders(
  args: InferRequestType<typeof client.v1.appPreOrders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreOrders.$post(args, options))
}

export async function getV1AppPreOrdersId(
  args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreOrders[':id'].$get(args, options))
}

export async function deleteV1AppPreOrdersId(
  args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreOrders[':id'].$delete(args, options))
}

export async function patchV1AppPreOrdersId(
  args: InferRequestType<(typeof client.v1.appPreOrders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreOrders[':id'].$patch(args, options))
}

export async function postV1AppPreviewSets(
  args: InferRequestType<typeof client.v1.appPreviewSets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreviewSets.$post(args, options))
}

export async function getV1AppPreviewSetsId(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreviewSets[':id'].$get(args, options))
}

export async function deleteV1AppPreviewSetsId(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreviewSets[':id'].$delete(args, options))
}

export async function getV1AppPreviewSetsIdAppPreviews(
  args: InferRequestType<(typeof client.v1.appPreviewSets)[':id']['appPreviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreviewSets[':id'].appPreviews.$get(args, options))
}

export async function getV1AppPreviewSetsIdRelationshipsAppPreviews(
  args: InferRequestType<
    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appPreviewSets[':id'].relationships.appPreviews.$get(args, options),
  )
}

export async function patchV1AppPreviewSetsIdRelationshipsAppPreviews(
  args: InferRequestType<
    (typeof client.v1.appPreviewSets)[':id']['relationships']['appPreviews']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appPreviewSets[':id'].relationships.appPreviews.$patch(args, options),
  )
}

export async function postV1AppPreviews(
  args: InferRequestType<typeof client.v1.appPreviews.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreviews.$post(args, options))
}

export async function getV1AppPreviewsId(
  args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreviews[':id'].$get(args, options))
}

export async function deleteV1AppPreviewsId(
  args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreviews[':id'].$delete(args, options))
}

export async function patchV1AppPreviewsId(
  args: InferRequestType<(typeof client.v1.appPreviews)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPreviews[':id'].$patch(args, options))
}

export async function getV1AppPricePoints(
  args: InferRequestType<typeof client.v1.appPricePoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPricePoints.$get(args, options))
}

export async function getV1AppPricePointsId(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPricePoints[':id'].$get(args, options))
}

export async function getV1AppPricePointsIdTerritory(
  args: InferRequestType<(typeof client.v1.appPricePoints)[':id']['territory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPricePoints[':id'].territory.$get(args, options))
}

export async function getV1AppPriceTiers(
  args: InferRequestType<typeof client.v1.appPriceTiers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPriceTiers.$get(args, options))
}

export async function getV1AppPriceTiersId(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPriceTiers[':id'].$get(args, options))
}

export async function getV1AppPriceTiersIdPricePoints(
  args: InferRequestType<(typeof client.v1.appPriceTiers)[':id']['pricePoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPriceTiers[':id'].pricePoints.$get(args, options))
}

export async function getV1AppPricesId(
  args: InferRequestType<(typeof client.v1.appPrices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appPrices[':id'].$get(args, options))
}

export async function postV1AppScreenshotSets(
  args: InferRequestType<typeof client.v1.appScreenshotSets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appScreenshotSets.$post(args, options))
}

export async function getV1AppScreenshotSetsId(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appScreenshotSets[':id'].$get(args, options))
}

export async function deleteV1AppScreenshotSetsId(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appScreenshotSets[':id'].$delete(args, options))
}

export async function getV1AppScreenshotSetsIdAppScreenshots(
  args: InferRequestType<(typeof client.v1.appScreenshotSets)[':id']['appScreenshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appScreenshotSets[':id'].appScreenshots.$get(args, options))
}

export async function getV1AppScreenshotSetsIdRelationshipsAppScreenshots(
  args: InferRequestType<
    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appScreenshotSets[':id'].relationships.appScreenshots.$get(args, options),
  )
}

export async function patchV1AppScreenshotSetsIdRelationshipsAppScreenshots(
  args: InferRequestType<
    (typeof client.v1.appScreenshotSets)[':id']['relationships']['appScreenshots']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appScreenshotSets[':id'].relationships.appScreenshots.$patch(args, options),
  )
}

export async function postV1AppScreenshots(
  args: InferRequestType<typeof client.v1.appScreenshots.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appScreenshots.$post(args, options))
}

export async function getV1AppScreenshotsId(
  args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appScreenshots[':id'].$get(args, options))
}

export async function deleteV1AppScreenshotsId(
  args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appScreenshots[':id'].$delete(args, options))
}

export async function patchV1AppScreenshotsId(
  args: InferRequestType<(typeof client.v1.appScreenshots)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appScreenshots[':id'].$patch(args, options))
}

export async function postV1AppStoreReviewAttachments(
  args: InferRequestType<typeof client.v1.appStoreReviewAttachments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreReviewAttachments.$post(args, options))
}

export async function getV1AppStoreReviewAttachmentsId(
  args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreReviewAttachments[':id'].$get(args, options))
}

export async function deleteV1AppStoreReviewAttachmentsId(
  args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreReviewAttachments[':id'].$delete(args, options))
}

export async function patchV1AppStoreReviewAttachmentsId(
  args: InferRequestType<(typeof client.v1.appStoreReviewAttachments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreReviewAttachments[':id'].$patch(args, options))
}

export async function postV1AppStoreReviewDetails(
  args: InferRequestType<typeof client.v1.appStoreReviewDetails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreReviewDetails.$post(args, options))
}

export async function getV1AppStoreReviewDetailsId(
  args: InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreReviewDetails[':id'].$get(args, options))
}

export async function patchV1AppStoreReviewDetailsId(
  args: InferRequestType<(typeof client.v1.appStoreReviewDetails)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreReviewDetails[':id'].$patch(args, options))
}

export async function getV1AppStoreReviewDetailsIdAppStoreReviewAttachments(
  args: InferRequestType<
    (typeof client.v1.appStoreReviewDetails)[':id']['appStoreReviewAttachments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appStoreReviewDetails[':id'].appStoreReviewAttachments.$get(args, options),
  )
}

export async function postV1AppStoreVersionLocalizations(
  args: InferRequestType<typeof client.v1.appStoreVersionLocalizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersionLocalizations.$post(args, options))
}

export async function getV1AppStoreVersionLocalizationsId(
  args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersionLocalizations[':id'].$get(args, options))
}

export async function deleteV1AppStoreVersionLocalizationsId(
  args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersionLocalizations[':id'].$delete(args, options))
}

export async function patchV1AppStoreVersionLocalizationsId(
  args: InferRequestType<(typeof client.v1.appStoreVersionLocalizations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersionLocalizations[':id'].$patch(args, options))
}

export async function getV1AppStoreVersionLocalizationsIdAppPreviewSets(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appPreviewSets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appStoreVersionLocalizations[':id'].appPreviewSets.$get(args, options),
  )
}

export async function getV1AppStoreVersionLocalizationsIdAppScreenshotSets(
  args: InferRequestType<
    (typeof client.v1.appStoreVersionLocalizations)[':id']['appScreenshotSets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appStoreVersionLocalizations[':id'].appScreenshotSets.$get(args, options),
  )
}

export async function postV1AppStoreVersionPhasedReleases(
  args: InferRequestType<typeof client.v1.appStoreVersionPhasedReleases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersionPhasedReleases.$post(args, options))
}

export async function deleteV1AppStoreVersionPhasedReleasesId(
  args: InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersionPhasedReleases[':id'].$delete(args, options))
}

export async function patchV1AppStoreVersionPhasedReleasesId(
  args: InferRequestType<(typeof client.v1.appStoreVersionPhasedReleases)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersionPhasedReleases[':id'].$patch(args, options))
}

export async function postV1AppStoreVersionSubmissions(
  args: InferRequestType<typeof client.v1.appStoreVersionSubmissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersionSubmissions.$post(args, options))
}

export async function deleteV1AppStoreVersionSubmissionsId(
  args: InferRequestType<(typeof client.v1.appStoreVersionSubmissions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersionSubmissions[':id'].$delete(args, options))
}

export async function postV1AppStoreVersions(
  args: InferRequestType<typeof client.v1.appStoreVersions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersions.$post(args, options))
}

export async function getV1AppStoreVersionsId(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersions[':id'].$get(args, options))
}

export async function deleteV1AppStoreVersionsId(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersions[':id'].$delete(args, options))
}

export async function patchV1AppStoreVersionsId(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersions[':id'].$patch(args, options))
}

export async function getV1AppStoreVersionsIdAgeRatingDeclaration(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['ageRatingDeclaration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appStoreVersions[':id'].ageRatingDeclaration.$get(args, options),
  )
}

export async function getV1AppStoreVersionsIdAppStoreReviewDetail(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreReviewDetail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appStoreVersions[':id'].appStoreReviewDetail.$get(args, options),
  )
}

export async function getV1AppStoreVersionsIdAppStoreVersionLocalizations(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionLocalizations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appStoreVersions[':id'].appStoreVersionLocalizations.$get(args, options),
  )
}

export async function getV1AppStoreVersionsIdAppStoreVersionPhasedRelease(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionPhasedRelease']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appStoreVersions[':id'].appStoreVersionPhasedRelease.$get(args, options),
  )
}

export async function getV1AppStoreVersionsIdAppStoreVersionSubmission(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['appStoreVersionSubmission']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appStoreVersions[':id'].appStoreVersionSubmission.$get(args, options),
  )
}

export async function getV1AppStoreVersionsIdBuild(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['build']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersions[':id'].build.$get(args, options))
}

export async function getV1AppStoreVersionsIdIdfaDeclaration(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['idfaDeclaration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.appStoreVersions[':id'].idfaDeclaration.$get(args, options))
}

export async function getV1AppStoreVersionsIdRelationshipsBuild(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appStoreVersions[':id'].relationships.build.$get(args, options),
  )
}

export async function patchV1AppStoreVersionsIdRelationshipsBuild(
  args: InferRequestType<
    (typeof client.v1.appStoreVersions)[':id']['relationships']['build']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appStoreVersions[':id'].relationships.build.$patch(args, options),
  )
}

export async function getV1AppStoreVersionsIdRoutingAppCoverage(
  args: InferRequestType<(typeof client.v1.appStoreVersions)[':id']['routingAppCoverage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.appStoreVersions[':id'].routingAppCoverage.$get(args, options),
  )
}

export async function getV1Apps(
  args: InferRequestType<typeof client.v1.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps.$get(args, options))
}

export async function getV1AppsId(
  args: InferRequestType<(typeof client.v1.apps)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].$get(args, options))
}

export async function patchV1AppsId(
  args: InferRequestType<(typeof client.v1.apps)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].$patch(args, options))
}

export async function getV1AppsIdAppInfos(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appInfos']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].appInfos.$get(args, options))
}

export async function getV1AppsIdAppStoreVersions(
  args: InferRequestType<(typeof client.v1.apps)[':id']['appStoreVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].appStoreVersions.$get(args, options))
}

export async function getV1AppsIdAvailableTerritories(
  args: InferRequestType<(typeof client.v1.apps)[':id']['availableTerritories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].availableTerritories.$get(args, options))
}

export async function getV1AppsIdBetaAppLocalizations(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppLocalizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].betaAppLocalizations.$get(args, options))
}

export async function getV1AppsIdBetaAppReviewDetail(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaAppReviewDetail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].betaAppReviewDetail.$get(args, options))
}

export async function getV1AppsIdBetaGroups(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].betaGroups.$get(args, options))
}

export async function getV1AppsIdBetaLicenseAgreement(
  args: InferRequestType<(typeof client.v1.apps)[':id']['betaLicenseAgreement']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].betaLicenseAgreement.$get(args, options))
}

export async function getV1AppsIdBuilds(
  args: InferRequestType<(typeof client.v1.apps)[':id']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].builds.$get(args, options))
}

export async function getV1AppsIdEndUserLicenseAgreement(
  args: InferRequestType<(typeof client.v1.apps)[':id']['endUserLicenseAgreement']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].endUserLicenseAgreement.$get(args, options))
}

export async function getV1AppsIdGameCenterEnabledVersions(
  args: InferRequestType<(typeof client.v1.apps)[':id']['gameCenterEnabledVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].gameCenterEnabledVersions.$get(args, options))
}

export async function getV1AppsIdInAppPurchases(
  args: InferRequestType<(typeof client.v1.apps)[':id']['inAppPurchases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].inAppPurchases.$get(args, options))
}

export async function getV1AppsIdPerfPowerMetrics(
  args: InferRequestType<(typeof client.v1.apps)[':id']['perfPowerMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].perfPowerMetrics.$get(args, options))
}

export async function getV1AppsIdPreOrder(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preOrder']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].preOrder.$get(args, options))
}

export async function getV1AppsIdPreReleaseVersions(
  args: InferRequestType<(typeof client.v1.apps)[':id']['preReleaseVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].preReleaseVersions.$get(args, options))
}

export async function getV1AppsIdPrices(
  args: InferRequestType<(typeof client.v1.apps)[':id']['prices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].prices.$get(args, options))
}

export async function deleteV1AppsIdRelationshipsBetaTesters(
  args: InferRequestType<(typeof client.v1.apps)[':id']['relationships']['betaTesters']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.apps[':id'].relationships.betaTesters.$delete(args, options))
}

export async function getV1BetaAppLocalizations(
  args: InferRequestType<typeof client.v1.betaAppLocalizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppLocalizations.$get(args, options))
}

export async function postV1BetaAppLocalizations(
  args: InferRequestType<typeof client.v1.betaAppLocalizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppLocalizations.$post(args, options))
}

export async function getV1BetaAppLocalizationsId(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppLocalizations[':id'].$get(args, options))
}

export async function deleteV1BetaAppLocalizationsId(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppLocalizations[':id'].$delete(args, options))
}

export async function patchV1BetaAppLocalizationsId(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppLocalizations[':id'].$patch(args, options))
}

export async function getV1BetaAppLocalizationsIdApp(
  args: InferRequestType<(typeof client.v1.betaAppLocalizations)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppLocalizations[':id'].app.$get(args, options))
}

export async function getV1BetaAppReviewDetails(
  args: InferRequestType<typeof client.v1.betaAppReviewDetails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppReviewDetails.$get(args, options))
}

export async function getV1BetaAppReviewDetailsId(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppReviewDetails[':id'].$get(args, options))
}

export async function patchV1BetaAppReviewDetailsId(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppReviewDetails[':id'].$patch(args, options))
}

export async function getV1BetaAppReviewDetailsIdApp(
  args: InferRequestType<(typeof client.v1.betaAppReviewDetails)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppReviewDetails[':id'].app.$get(args, options))
}

export async function getV1BetaAppReviewSubmissions(
  args: InferRequestType<typeof client.v1.betaAppReviewSubmissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppReviewSubmissions.$get(args, options))
}

export async function postV1BetaAppReviewSubmissions(
  args: InferRequestType<typeof client.v1.betaAppReviewSubmissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppReviewSubmissions.$post(args, options))
}

export async function getV1BetaAppReviewSubmissionsId(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppReviewSubmissions[':id'].$get(args, options))
}

export async function getV1BetaAppReviewSubmissionsIdBuild(
  args: InferRequestType<(typeof client.v1.betaAppReviewSubmissions)[':id']['build']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaAppReviewSubmissions[':id'].build.$get(args, options))
}

export async function getV1BetaBuildLocalizations(
  args: InferRequestType<typeof client.v1.betaBuildLocalizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaBuildLocalizations.$get(args, options))
}

export async function postV1BetaBuildLocalizations(
  args: InferRequestType<typeof client.v1.betaBuildLocalizations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaBuildLocalizations.$post(args, options))
}

export async function getV1BetaBuildLocalizationsId(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaBuildLocalizations[':id'].$get(args, options))
}

export async function deleteV1BetaBuildLocalizationsId(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaBuildLocalizations[':id'].$delete(args, options))
}

export async function patchV1BetaBuildLocalizationsId(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaBuildLocalizations[':id'].$patch(args, options))
}

export async function getV1BetaBuildLocalizationsIdBuild(
  args: InferRequestType<(typeof client.v1.betaBuildLocalizations)[':id']['build']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaBuildLocalizations[':id'].build.$get(args, options))
}

export async function getV1BetaGroups(
  args: InferRequestType<typeof client.v1.betaGroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaGroups.$get(args, options))
}

export async function postV1BetaGroups(
  args: InferRequestType<typeof client.v1.betaGroups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaGroups.$post(args, options))
}

export async function getV1BetaGroupsId(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaGroups[':id'].$get(args, options))
}

export async function deleteV1BetaGroupsId(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaGroups[':id'].$delete(args, options))
}

export async function patchV1BetaGroupsId(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaGroups[':id'].$patch(args, options))
}

export async function getV1BetaGroupsIdApp(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaGroups[':id'].app.$get(args, options))
}

export async function getV1BetaGroupsIdBetaTesters(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['betaTesters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaGroups[':id'].betaTesters.$get(args, options))
}

export async function getV1BetaGroupsIdBuilds(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaGroups[':id'].builds.$get(args, options))
}

export async function getV1BetaGroupsIdRelationshipsBetaTesters(
  args: InferRequestType<
    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.betaGroups[':id'].relationships.betaTesters.$get(args, options),
  )
}

export async function postV1BetaGroupsIdRelationshipsBetaTesters(
  args: InferRequestType<
    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.betaGroups[':id'].relationships.betaTesters.$post(args, options),
  )
}

export async function deleteV1BetaGroupsIdRelationshipsBetaTesters(
  args: InferRequestType<
    (typeof client.v1.betaGroups)[':id']['relationships']['betaTesters']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.betaGroups[':id'].relationships.betaTesters.$delete(args, options),
  )
}

export async function getV1BetaGroupsIdRelationshipsBuilds(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaGroups[':id'].relationships.builds.$get(args, options))
}

export async function postV1BetaGroupsIdRelationshipsBuilds(
  args: InferRequestType<(typeof client.v1.betaGroups)[':id']['relationships']['builds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaGroups[':id'].relationships.builds.$post(args, options))
}

export async function deleteV1BetaGroupsIdRelationshipsBuilds(
  args: InferRequestType<
    (typeof client.v1.betaGroups)[':id']['relationships']['builds']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.betaGroups[':id'].relationships.builds.$delete(args, options),
  )
}

export async function getV1BetaLicenseAgreements(
  args: InferRequestType<typeof client.v1.betaLicenseAgreements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaLicenseAgreements.$get(args, options))
}

export async function getV1BetaLicenseAgreementsId(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaLicenseAgreements[':id'].$get(args, options))
}

export async function patchV1BetaLicenseAgreementsId(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaLicenseAgreements[':id'].$patch(args, options))
}

export async function getV1BetaLicenseAgreementsIdApp(
  args: InferRequestType<(typeof client.v1.betaLicenseAgreements)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaLicenseAgreements[':id'].app.$get(args, options))
}

export async function postV1BetaTesterInvitations(
  args: InferRequestType<typeof client.v1.betaTesterInvitations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesterInvitations.$post(args, options))
}

export async function getV1BetaTesters(
  args: InferRequestType<typeof client.v1.betaTesters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesters.$get(args, options))
}

export async function postV1BetaTesters(
  args: InferRequestType<typeof client.v1.betaTesters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesters.$post(args, options))
}

export async function getV1BetaTestersId(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesters[':id'].$get(args, options))
}

export async function deleteV1BetaTestersId(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesters[':id'].$delete(args, options))
}

export async function getV1BetaTestersIdApps(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesters[':id'].apps.$get(args, options))
}

export async function getV1BetaTestersIdBetaGroups(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['betaGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesters[':id'].betaGroups.$get(args, options))
}

export async function getV1BetaTestersIdBuilds(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesters[':id'].builds.$get(args, options))
}

export async function getV1BetaTestersIdRelationshipsApps(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesters[':id'].relationships.apps.$get(args, options))
}

export async function deleteV1BetaTestersIdRelationshipsApps(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['apps']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesters[':id'].relationships.apps.$delete(args, options))
}

export async function getV1BetaTestersIdRelationshipsBetaGroups(
  args: InferRequestType<
    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.betaTesters[':id'].relationships.betaGroups.$get(args, options),
  )
}

export async function postV1BetaTestersIdRelationshipsBetaGroups(
  args: InferRequestType<
    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.betaTesters[':id'].relationships.betaGroups.$post(args, options),
  )
}

export async function deleteV1BetaTestersIdRelationshipsBetaGroups(
  args: InferRequestType<
    (typeof client.v1.betaTesters)[':id']['relationships']['betaGroups']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.betaTesters[':id'].relationships.betaGroups.$delete(args, options),
  )
}

export async function getV1BetaTestersIdRelationshipsBuilds(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesters[':id'].relationships.builds.$get(args, options))
}

export async function postV1BetaTestersIdRelationshipsBuilds(
  args: InferRequestType<(typeof client.v1.betaTesters)[':id']['relationships']['builds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.betaTesters[':id'].relationships.builds.$post(args, options))
}

export async function deleteV1BetaTestersIdRelationshipsBuilds(
  args: InferRequestType<
    (typeof client.v1.betaTesters)[':id']['relationships']['builds']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.betaTesters[':id'].relationships.builds.$delete(args, options),
  )
}

export async function getV1BuildBetaDetails(
  args: InferRequestType<typeof client.v1.buildBetaDetails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.buildBetaDetails.$get(args, options))
}

export async function getV1BuildBetaDetailsId(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.buildBetaDetails[':id'].$get(args, options))
}

export async function patchV1BuildBetaDetailsId(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.buildBetaDetails[':id'].$patch(args, options))
}

export async function getV1BuildBetaDetailsIdBuild(
  args: InferRequestType<(typeof client.v1.buildBetaDetails)[':id']['build']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.buildBetaDetails[':id'].build.$get(args, options))
}

export async function postV1BuildBetaNotifications(
  args: InferRequestType<typeof client.v1.buildBetaNotifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.buildBetaNotifications.$post(args, options))
}

export async function getV1Builds(
  args: InferRequestType<typeof client.v1.builds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds.$get(args, options))
}

export async function getV1BuildsId(
  args: InferRequestType<(typeof client.v1.builds)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].$get(args, options))
}

export async function patchV1BuildsId(
  args: InferRequestType<(typeof client.v1.builds)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].$patch(args, options))
}

export async function getV1BuildsIdApp(
  args: InferRequestType<(typeof client.v1.builds)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].app.$get(args, options))
}

export async function getV1BuildsIdAppEncryptionDeclaration(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appEncryptionDeclaration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].appEncryptionDeclaration.$get(args, options))
}

export async function getV1BuildsIdAppStoreVersion(
  args: InferRequestType<(typeof client.v1.builds)[':id']['appStoreVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].appStoreVersion.$get(args, options))
}

export async function getV1BuildsIdBetaAppReviewSubmission(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaAppReviewSubmission']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].betaAppReviewSubmission.$get(args, options))
}

export async function getV1BuildsIdBetaBuildLocalizations(
  args: InferRequestType<(typeof client.v1.builds)[':id']['betaBuildLocalizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].betaBuildLocalizations.$get(args, options))
}

export async function getV1BuildsIdBuildBetaDetail(
  args: InferRequestType<(typeof client.v1.builds)[':id']['buildBetaDetail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].buildBetaDetail.$get(args, options))
}

export async function getV1BuildsIdDiagnosticSignatures(
  args: InferRequestType<(typeof client.v1.builds)[':id']['diagnosticSignatures']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].diagnosticSignatures.$get(args, options))
}

export async function getV1BuildsIdIcons(
  args: InferRequestType<(typeof client.v1.builds)[':id']['icons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].icons.$get(args, options))
}

export async function getV1BuildsIdIndividualTesters(
  args: InferRequestType<(typeof client.v1.builds)[':id']['individualTesters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].individualTesters.$get(args, options))
}

export async function getV1BuildsIdPerfPowerMetrics(
  args: InferRequestType<(typeof client.v1.builds)[':id']['perfPowerMetrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].perfPowerMetrics.$get(args, options))
}

export async function getV1BuildsIdPreReleaseVersion(
  args: InferRequestType<(typeof client.v1.builds)[':id']['preReleaseVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].preReleaseVersion.$get(args, options))
}

export async function getV1BuildsIdRelationshipsAppEncryptionDeclaration(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.builds[':id'].relationships.appEncryptionDeclaration.$get(args, options),
  )
}

export async function patchV1BuildsIdRelationshipsAppEncryptionDeclaration(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['appEncryptionDeclaration']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.builds[':id'].relationships.appEncryptionDeclaration.$patch(args, options),
  )
}

export async function postV1BuildsIdRelationshipsBetaGroups(
  args: InferRequestType<(typeof client.v1.builds)[':id']['relationships']['betaGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.builds[':id'].relationships.betaGroups.$post(args, options))
}

export async function deleteV1BuildsIdRelationshipsBetaGroups(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['betaGroups']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.builds[':id'].relationships.betaGroups.$delete(args, options),
  )
}

export async function getV1BuildsIdRelationshipsIndividualTesters(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.builds[':id'].relationships.individualTesters.$get(args, options),
  )
}

export async function postV1BuildsIdRelationshipsIndividualTesters(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.builds[':id'].relationships.individualTesters.$post(args, options),
  )
}

export async function deleteV1BuildsIdRelationshipsIndividualTesters(
  args: InferRequestType<
    (typeof client.v1.builds)[':id']['relationships']['individualTesters']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.builds[':id'].relationships.individualTesters.$delete(args, options),
  )
}

export async function postV1BundleIdCapabilities(
  args: InferRequestType<typeof client.v1.bundleIdCapabilities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bundleIdCapabilities.$post(args, options))
}

export async function deleteV1BundleIdCapabilitiesId(
  args: InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bundleIdCapabilities[':id'].$delete(args, options))
}

export async function patchV1BundleIdCapabilitiesId(
  args: InferRequestType<(typeof client.v1.bundleIdCapabilities)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bundleIdCapabilities[':id'].$patch(args, options))
}

export async function getV1BundleIds(
  args: InferRequestType<typeof client.v1.bundleIds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bundleIds.$get(args, options))
}

export async function postV1BundleIds(
  args: InferRequestType<typeof client.v1.bundleIds.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bundleIds.$post(args, options))
}

export async function getV1BundleIdsId(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bundleIds[':id'].$get(args, options))
}

export async function deleteV1BundleIdsId(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bundleIds[':id'].$delete(args, options))
}

export async function patchV1BundleIdsId(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bundleIds[':id'].$patch(args, options))
}

export async function getV1BundleIdsIdApp(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bundleIds[':id'].app.$get(args, options))
}

export async function getV1BundleIdsIdBundleIdCapabilities(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['bundleIdCapabilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bundleIds[':id'].bundleIdCapabilities.$get(args, options))
}

export async function getV1BundleIdsIdProfiles(
  args: InferRequestType<(typeof client.v1.bundleIds)[':id']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bundleIds[':id'].profiles.$get(args, options))
}

export async function getV1Certificates(
  args: InferRequestType<typeof client.v1.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates.$get(args, options))
}

export async function postV1Certificates(
  args: InferRequestType<typeof client.v1.certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates.$post(args, options))
}

export async function getV1CertificatesId(
  args: InferRequestType<(typeof client.v1.certificates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':id'].$get(args, options))
}

export async function deleteV1CertificatesId(
  args: InferRequestType<(typeof client.v1.certificates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.certificates[':id'].$delete(args, options))
}

export async function getV1Devices(
  args: InferRequestType<typeof client.v1.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.devices.$get(args, options))
}

export async function postV1Devices(
  args: InferRequestType<typeof client.v1.devices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.devices.$post(args, options))
}

export async function getV1DevicesId(
  args: InferRequestType<(typeof client.v1.devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.devices[':id'].$get(args, options))
}

export async function patchV1DevicesId(
  args: InferRequestType<(typeof client.v1.devices)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.devices[':id'].$patch(args, options))
}

export async function getV1DiagnosticSignaturesIdLogs(
  args: InferRequestType<(typeof client.v1.diagnosticSignatures)[':id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.diagnosticSignatures[':id'].logs.$get(args, options))
}

export async function postV1EndUserLicenseAgreements(
  args: InferRequestType<typeof client.v1.endUserLicenseAgreements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.endUserLicenseAgreements.$post(args, options))
}

export async function getV1EndUserLicenseAgreementsId(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.endUserLicenseAgreements[':id'].$get(args, options))
}

export async function deleteV1EndUserLicenseAgreementsId(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.endUserLicenseAgreements[':id'].$delete(args, options))
}

export async function patchV1EndUserLicenseAgreementsId(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.endUserLicenseAgreements[':id'].$patch(args, options))
}

export async function getV1EndUserLicenseAgreementsIdTerritories(
  args: InferRequestType<(typeof client.v1.endUserLicenseAgreements)[':id']['territories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.endUserLicenseAgreements[':id'].territories.$get(args, options),
  )
}

export async function getV1FinanceReports(
  args: InferRequestType<typeof client.v1.financeReports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.financeReports.$get(args, options))
}

export async function getV1GameCenterEnabledVersionsIdCompatibleVersions(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['compatibleVersions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.gameCenterEnabledVersions[':id'].compatibleVersions.$get(args, options),
  )
}

export async function getV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$get(args, options),
  )
}

export async function postV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$post(
      args,
      options,
    ),
  )
}

export async function deleteV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$delete(
      args,
      options,
    ),
  )
}

export async function patchV1GameCenterEnabledVersionsIdRelationshipsCompatibleVersions(
  args: InferRequestType<
    (typeof client.v1.gameCenterEnabledVersions)[':id']['relationships']['compatibleVersions']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.gameCenterEnabledVersions[':id'].relationships.compatibleVersions.$patch(
      args,
      options,
    ),
  )
}

export async function postV1IdfaDeclarations(
  args: InferRequestType<typeof client.v1.idfaDeclarations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.idfaDeclarations.$post(args, options))
}

export async function deleteV1IdfaDeclarationsId(
  args: InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.idfaDeclarations[':id'].$delete(args, options))
}

export async function patchV1IdfaDeclarationsId(
  args: InferRequestType<(typeof client.v1.idfaDeclarations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.idfaDeclarations[':id'].$patch(args, options))
}

export async function getV1InAppPurchasesId(
  args: InferRequestType<(typeof client.v1.inAppPurchases)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.inAppPurchases[':id'].$get(args, options))
}

export async function getV1PreReleaseVersions(
  args: InferRequestType<typeof client.v1.preReleaseVersions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.preReleaseVersions.$get(args, options))
}

export async function getV1PreReleaseVersionsId(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.preReleaseVersions[':id'].$get(args, options))
}

export async function getV1PreReleaseVersionsIdApp(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.preReleaseVersions[':id'].app.$get(args, options))
}

export async function getV1PreReleaseVersionsIdBuilds(
  args: InferRequestType<(typeof client.v1.preReleaseVersions)[':id']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.preReleaseVersions[':id'].builds.$get(args, options))
}

export async function getV1Profiles(
  args: InferRequestType<typeof client.v1.profiles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.profiles.$get(args, options))
}

export async function postV1Profiles(
  args: InferRequestType<typeof client.v1.profiles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.profiles.$post(args, options))
}

export async function getV1ProfilesId(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.profiles[':id'].$get(args, options))
}

export async function deleteV1ProfilesId(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.profiles[':id'].$delete(args, options))
}

export async function getV1ProfilesIdBundleId(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['bundleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.profiles[':id'].bundleId.$get(args, options))
}

export async function getV1ProfilesIdCertificates(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['certificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.profiles[':id'].certificates.$get(args, options))
}

export async function getV1ProfilesIdDevices(
  args: InferRequestType<(typeof client.v1.profiles)[':id']['devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.profiles[':id'].devices.$get(args, options))
}

export async function postV1RoutingAppCoverages(
  args: InferRequestType<typeof client.v1.routingAppCoverages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.routingAppCoverages.$post(args, options))
}

export async function getV1RoutingAppCoveragesId(
  args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.routingAppCoverages[':id'].$get(args, options))
}

export async function deleteV1RoutingAppCoveragesId(
  args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.routingAppCoverages[':id'].$delete(args, options))
}

export async function patchV1RoutingAppCoveragesId(
  args: InferRequestType<(typeof client.v1.routingAppCoverages)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.routingAppCoverages[':id'].$patch(args, options))
}

export async function getV1SalesReports(
  args: InferRequestType<typeof client.v1.salesReports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.salesReports.$get(args, options))
}

export async function getV1Territories(
  args: InferRequestType<typeof client.v1.territories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.territories.$get(args, options))
}

export async function getV1UserInvitations(
  args: InferRequestType<typeof client.v1.userInvitations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.userInvitations.$get(args, options))
}

export async function postV1UserInvitations(
  args: InferRequestType<typeof client.v1.userInvitations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.userInvitations.$post(args, options))
}

export async function getV1UserInvitationsId(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.userInvitations[':id'].$get(args, options))
}

export async function deleteV1UserInvitationsId(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.userInvitations[':id'].$delete(args, options))
}

export async function getV1UserInvitationsIdVisibleApps(
  args: InferRequestType<(typeof client.v1.userInvitations)[':id']['visibleApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.userInvitations[':id'].visibleApps.$get(args, options))
}

export async function getV1Users(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users.$get(args, options))
}

export async function getV1UsersId(
  args: InferRequestType<(typeof client.v1.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':id'].$get(args, options))
}

export async function deleteV1UsersId(
  args: InferRequestType<(typeof client.v1.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':id'].$delete(args, options))
}

export async function patchV1UsersId(
  args: InferRequestType<(typeof client.v1.users)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':id'].$patch(args, options))
}

export async function getV1UsersIdRelationshipsVisibleApps(
  args: InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':id'].relationships.visibleApps.$get(args, options))
}

export async function postV1UsersIdRelationshipsVisibleApps(
  args: InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':id'].relationships.visibleApps.$post(args, options))
}

export async function deleteV1UsersIdRelationshipsVisibleApps(
  args: InferRequestType<
    (typeof client.v1.users)[':id']['relationships']['visibleApps']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.users[':id'].relationships.visibleApps.$delete(args, options),
  )
}

export async function patchV1UsersIdRelationshipsVisibleApps(
  args: InferRequestType<(typeof client.v1.users)[':id']['relationships']['visibleApps']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':id'].relationships.visibleApps.$patch(args, options))
}

export async function getV1UsersIdVisibleApps(
  args: InferRequestType<(typeof client.v1.users)[':id']['visibleApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.users[':id'].visibleApps.$get(args, options))
}
