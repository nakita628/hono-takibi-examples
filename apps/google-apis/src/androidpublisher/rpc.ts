import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsApk(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['apk']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications.internalappsharing[':packageName'].artifacts.apk.$post(
      args,
      options,
    ),
  )
}

export async function postAndroidpublisherV3ApplicationsInternalappsharingPackageNameArtifactsBundle(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications.internalappsharing)[':packageName']['artifacts']['bundle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications.internalappsharing[
      ':packageName'
    ].artifacts.bundle.$post(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigs(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs.$get(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigs(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs.$post(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameDeviceTierConfigsDeviceTierConfigId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['deviceTierConfigs'][':deviceTierConfigId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].deviceTierConfigs[
      ':deviceTierConfigId'
    ].$get(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameEdits(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits.$post(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].$get(args, options),
  )
}

export async function deleteAndroidpublisherV3ApplicationsPackageNameEditsEditId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].$delete(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApks(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks.$get(
      args,
      options,
    ),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApks(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks.$post(
      args,
      options,
    ),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksExternallyHosted(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks']['externallyHosted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[
      ':editId'
    ].apks.externallyHosted.$post(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeDeobfuscationFilesDeobfuscationFileType(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['deobfuscationFiles'][':deobfuscationFileType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
      ':apkVersionCode'
    ].deobfuscationFiles[':deobfuscationFileType'].$post(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
      ':apkVersionCode'
    ].expansionFiles[':expansionFileType'].$get(args, options),
  )
}

export async function putAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
      ':apkVersionCode'
    ].expansionFiles[':expansionFileType'].$put(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
      ':apkVersionCode'
    ].expansionFiles[':expansionFileType'].$post(args, options),
  )
}

export async function patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdApksApkVersionCodeExpansionFilesExpansionFileType(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['apks'][':apkVersionCode']['expansionFiles'][':expansionFileType']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].apks[
      ':apkVersionCode'
    ].expansionFiles[':expansionFileType'].$patch(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundles(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].bundles.$get(
      args,
      options,
    ),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameEditsEditIdBundles(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['bundles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].bundles.$post(
      args,
      options,
    ),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdCountryAvailabilityTrack(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['countryAvailability'][':track']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].countryAvailability[
      ':track'
    ].$get(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetails(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].details.$get(
      args,
      options,
    ),
  )
}

export async function putAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetails(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].details.$put(
      args,
      options,
    ),
  )
}

export async function patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdDetails(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['details']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].details.$patch(
      args,
      options,
    ),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListings(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings.$get(
      args,
      options,
    ),
  )
}

export async function deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListings(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings.$delete(
      args,
      options,
    ),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
      ':language'
    ].$get(args, options),
  )
}

export async function putAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
      ':language'
    ].$put(args, options),
  )
}

export async function deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
      ':language'
    ].$delete(args, options),
  )
}

export async function patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguage(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[
      ':language'
    ].$patch(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageType(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[':language'][
      ':imageType'
    ].$get(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageType(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[':language'][
      ':imageType'
    ].$post(args, options),
  )
}

export async function deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageType(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[':language'][
      ':imageType'
    ].$delete(args, options),
  )
}

export async function deleteAndroidpublisherV3ApplicationsPackageNameEditsEditIdListingsLanguageImageTypeImageId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['listings'][':language'][':imageType'][':imageId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].listings[':language'][
      ':imageType'
    ][':imageId'].$delete(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrack(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].testers[':track'].$get(
      args,
      options,
    ),
  )
}

export async function putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrack(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].testers[':track'].$put(
      args,
      options,
    ),
  )
}

export async function patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTestersTrack(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['testers'][':track']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].testers[
      ':track'
    ].$patch(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracks(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks.$get(
      args,
      options,
    ),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrack(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks[':track'].$get(
      args,
      options,
    ),
  )
}

export async function putAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrack(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks[':track'].$put(
      args,
      options,
    ),
  )
}

export async function patchAndroidpublisherV3ApplicationsPackageNameEditsEditIdTracksTrack(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId']['tracks'][':track']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId'].tracks[
      ':track'
    ].$patch(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameEditsEditIdCommit(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:commit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId:commit'].$post(
      args,
      options,
    ),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameEditsEditIdValidate(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['edits'][':editId:validate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].edits[':editId:validate'].$post(
      args,
      options,
    ),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCode(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].generatedApks[':versionCode'].$get(
      args,
      options,
    ),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameGeneratedApksVersionCodeDownloadsDownloadIdDownload(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['generatedApks'][':versionCode']['downloads'][':downloadId:download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].generatedApks[':versionCode'].downloads[
      ':downloadId:download'
    ].$get(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameInappproducts(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].inappproducts.$get(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameInappproducts(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].inappproducts.$post(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameInappproductsSku(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$get(
      args,
      options,
    ),
  )
}

export async function putAndroidpublisherV3ApplicationsPackageNameInappproductsSku(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAndroidpublisherV3ApplicationsPackageNameInappproductsSku(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$delete(
      args,
      options,
    ),
  )
}

export async function patchAndroidpublisherV3ApplicationsPackageNameInappproductsSku(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['inappproducts'][':sku']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].inappproducts[':sku'].$patch(
      args,
      options,
    ),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameOrdersOrderIdRefund(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['orders'][':orderId:refund']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].orders[':orderId:refund'].$post(
      args,
      options,
    ),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNamePricingConvertRegionPrices(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['pricing:convertRegionPrices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName']['pricing:convertRegionPrices'].$post(
      args,
      options,
    ),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensToken(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].purchases.products[':productId'].tokens[
      ':token'
    ].$get(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenAcknowledge(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:acknowledge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].purchases.products[':productId'].tokens[
      ':token:acknowledge'
    ].$post(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNamePurchasesProductsProductIdTokensTokenConsume(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['products'][':productId']['tokens'][':token:consume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].purchases.products[':productId'].tokens[
      ':token:consume'
    ].$post(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensToken(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
      ':subscriptionId'
    ].tokens[':token'].$get(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenAcknowledge(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:acknowledge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
      ':subscriptionId'
    ].tokens[':token:acknowledge'].$post(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenCancel(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
      ':subscriptionId'
    ].tokens[':token:cancel'].$post(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenDefer(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:defer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
      ':subscriptionId'
    ].tokens[':token:defer'].$post(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRefund(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:refund']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
      ':subscriptionId'
    ].tokens[':token:refund'].$post(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsSubscriptionIdTokensTokenRevoke(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptions'][':subscriptionId']['tokens'][':token:revoke']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].purchases.subscriptions[
      ':subscriptionId'
    ].tokens[':token:revoke'].$post(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNamePurchasesSubscriptionsv2TokensToken(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['subscriptionsv2']['tokens'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].purchases.subscriptionsv2.tokens[
      ':token'
    ].$get(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNamePurchasesVoidedpurchases(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['purchases']['voidedpurchases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].purchases.voidedpurchases.$get(
      args,
      options,
    ),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameReviews(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].reviews.$get(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameReviewsReviewId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].reviews[':reviewId'].$get(
      args,
      options,
    ),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameReviewsReviewIdReply(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['reviews'][':reviewId:reply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].reviews[':reviewId:reply'].$post(
      args,
      options,
    ),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameSubscriptions(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions.$get(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameSubscriptions(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions.$post(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].basePlans[
      ':basePlanId'
    ].$delete(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffers(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].basePlans[
      ':basePlanId'
    ].offers.$get(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffers(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].basePlans[
      ':basePlanId'
    ].offers.$post(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].basePlans[
      ':basePlanId'
    ].offers[':offerId'].$get(args, options),
  )
}

export async function deleteAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].basePlans[
      ':basePlanId'
    ].offers[':offerId'].$delete(args, options),
  )
}

export async function patchAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].basePlans[
      ':basePlanId'
    ].offers[':offerId'].$patch(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdActivate(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].basePlans[
      ':basePlanId'
    ].offers[':offerId:activate'].$post(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdOffersOfferIdDeactivate(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId']['offers'][':offerId:deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].basePlans[
      ':basePlanId'
    ].offers[':offerId:deactivate'].$post(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdActivate(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].basePlans[
      ':basePlanId:activate'
    ].$post(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdDeactivate(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].basePlans[
      ':basePlanId:deactivate'
    ].$post(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdBasePlansBasePlanIdMigratePrices(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId']['basePlans'][':basePlanId:migratePrices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[':productId'].basePlans[
      ':basePlanId:migratePrices'
    ].$post(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameSubscriptionsProductIdArchive(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['subscriptions'][':productId:archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].subscriptions[
      ':productId:archive'
    ].$post(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariants(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].systemApks[
      ':versionCode'
    ].variants.$get(args, options),
  )
}

export async function postAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariants(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].systemApks[
      ':versionCode'
    ].variants.$post(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantId(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].systemApks[':versionCode'].variants[
      ':variantId'
    ].$get(args, options),
  )
}

export async function getAndroidpublisherV3ApplicationsPackageNameSystemApksVersionCodeVariantsVariantIdDownload(
  args: InferRequestType<
    (typeof client.androidpublisher.v3.applications)[':packageName']['systemApks'][':versionCode']['variants'][':variantId:download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3.applications[':packageName'].systemApks[':versionCode'].variants[
      ':variantId:download'
    ].$get(args, options),
  )
}

export async function getAndroidpublisherV3Name(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.androidpublisher.v3[':name'].$get(args, options))
}

export async function deleteAndroidpublisherV3Name(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.androidpublisher.v3[':name'].$delete(args, options))
}

export async function patchAndroidpublisherV3Name(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.androidpublisher.v3[':name'].$patch(args, options))
}

export async function postAndroidpublisherV3NameRefund(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':name:refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.androidpublisher.v3[':name:refund'].$post(args, options))
}

export async function postAndroidpublisherV3ParentExternalTransactions(
  args: InferRequestType<
    (typeof client.androidpublisher.v3)[':parent']['externalTransactions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.androidpublisher.v3[':parent'].externalTransactions.$post(args, options),
  )
}

export async function postAndroidpublisherV3ParentGrants(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':parent']['grants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.androidpublisher.v3[':parent'].grants.$post(args, options))
}

export async function getAndroidpublisherV3ParentUsers(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.androidpublisher.v3[':parent'].users.$get(args, options))
}

export async function postAndroidpublisherV3ParentUsers(
  args: InferRequestType<(typeof client.androidpublisher.v3)[':parent']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.androidpublisher.v3[':parent'].users.$post(args, options))
}
