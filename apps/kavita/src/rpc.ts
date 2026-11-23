import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAccountOidcAuthenticated(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Account['oidc-authenticated'].$get(undefined, options))
}

export async function postApiAccountClearOidcLink(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Account['clear-oidc-link'].$post(undefined, options))
}

export async function getApiAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Account.$get(undefined, options))
}

export async function postApiAccountResetPassword(
  args: InferRequestType<(typeof client.api.Account)['reset-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['reset-password'].$post(args, options))
}

export async function postApiAccountRegister(
  args: InferRequestType<typeof client.api.Account.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account.register.$post(args, options))
}

export async function postApiAccountLogin(
  args: InferRequestType<typeof client.api.Account.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account.login.$post(args, options))
}

export async function getApiAccountRefreshAccount(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Account['refresh-account'].$get(undefined, options))
}

export async function postApiAccountRefreshToken(
  args: InferRequestType<(typeof client.api.Account)['refresh-token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['refresh-token'].$post(args, options))
}

export async function getApiAccountRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Account.roles.$get(undefined, options))
}

export async function postApiAccountUpdateUsername(
  args: InferRequestType<typeof client.api.Account.update.username.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account.update.username.$post(args, options))
}

export async function postApiAccountUpdateEmail(
  args: InferRequestType<typeof client.api.Account.update.email.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account.update.email.$post(args, options))
}

export async function postApiAccountUpdateAgeRestriction(
  args: InferRequestType<(typeof client.api.Account.update)['age-restriction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account.update['age-restriction'].$post(args, options))
}

export async function postApiAccountUpdate(
  args: InferRequestType<typeof client.api.Account.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account.update.$post(args, options))
}

export async function getApiAccountInviteUrl(
  args: InferRequestType<(typeof client.api.Account)['invite-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['invite-url'].$get(args, options))
}

export async function postApiAccountInvite(
  args: InferRequestType<typeof client.api.Account.invite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account.invite.$post(args, options))
}

export async function postApiAccountConfirmEmail(
  args: InferRequestType<(typeof client.api.Account)['confirm-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['confirm-email'].$post(args, options))
}

export async function postApiAccountConfirmEmailUpdate(
  args: InferRequestType<(typeof client.api.Account)['confirm-email-update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['confirm-email-update'].$post(args, options))
}

export async function postApiAccountConfirmPasswordReset(
  args: InferRequestType<(typeof client.api.Account)['confirm-password-reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['confirm-password-reset'].$post(args, options))
}

export async function postApiAccountForgotPassword(
  args: InferRequestType<(typeof client.api.Account)['forgot-password']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['forgot-password'].$post(args, options))
}

export async function getApiAccountEmailConfirmed(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Account['email-confirmed'].$get(undefined, options))
}

export async function postApiAccountConfirmMigrationEmail(
  args: InferRequestType<(typeof client.api.Account)['confirm-migration-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['confirm-migration-email'].$post(args, options))
}

export async function postApiAccountResendConfirmationEmail(
  args: InferRequestType<(typeof client.api.Account)['resend-confirmation-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['resend-confirmation-email'].$post(args, options))
}

export async function getApiAccountOpdsUrl(
  args: InferRequestType<(typeof client.api.Account)['opds-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['opds-url'].$get(args, options))
}

export async function getApiAccountIsEmailValid(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Account['is-email-valid'].$get(undefined, options))
}

export async function getApiAccountAuthKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Account['auth-keys'].$get(undefined, options))
}

export async function postApiAccountRotateAuthKey(
  args: InferRequestType<(typeof client.api.Account)['rotate-auth-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['rotate-auth-key'].$post(args, options))
}

export async function postApiAccountCreateAuthKey(
  args: InferRequestType<(typeof client.api.Account)['create-auth-key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['create-auth-key'].$post(args, options))
}

export async function deleteApiAccountAuthKey(
  args: InferRequestType<(typeof client.api.Account)['auth-key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Account['auth-key'].$delete(args, options))
}

export async function getApiActivityCurrent(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Activity.current.$get(undefined, options))
}

export async function getApiAdminExists(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Admin.exists.$get(undefined, options))
}

export async function postApiAnnotationAllFiltered(
  args: InferRequestType<(typeof client.api.Annotation)['all-filtered']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation['all-filtered'].$post(args, options))
}

export async function getApiAnnotationAll(
  args: InferRequestType<typeof client.api.Annotation.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation.all.$get(args, options))
}

export async function getApiAnnotationAllForSeries(
  args: InferRequestType<(typeof client.api.Annotation)['all-for-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation['all-for-series'].$get(args, options))
}

export async function getApiAnnotationAnnotationId(
  args: InferRequestType<(typeof client.api.Annotation)[':annotationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation[':annotationId'].$get(args, options))
}

export async function postApiAnnotationCreate(
  args: InferRequestType<typeof client.api.Annotation.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation.create.$post(args, options))
}

export async function postApiAnnotationUpdate(
  args: InferRequestType<typeof client.api.Annotation.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation.update.$post(args, options))
}

export async function postApiAnnotationLike(
  args: InferRequestType<typeof client.api.Annotation.like.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation.like.$post(args, options))
}

export async function postApiAnnotationUnlike(
  args: InferRequestType<typeof client.api.Annotation.unlike.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation.unlike.$post(args, options))
}

export async function deleteApiAnnotation(
  args: InferRequestType<typeof client.api.Annotation.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation.$delete(args, options))
}

export async function postApiAnnotationBulkDelete(
  args: InferRequestType<(typeof client.api.Annotation)['bulk-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation['bulk-delete'].$post(args, options))
}

export async function postApiAnnotationExportFilter(
  args: InferRequestType<(typeof client.api.Annotation)['export-filter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation['export-filter'].$post(args, options))
}

export async function postApiAnnotationExport(
  args: InferRequestType<typeof client.api.Annotation.export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Annotation.export.$post(args, options))
}

export async function getApiBookChapterIdBookInfo(
  args: InferRequestType<(typeof client.api.Book)[':chapterId']['book-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Book[':chapterId']['book-info'].$get(args, options))
}

export async function getApiBookChapterIdBookResources(
  args: InferRequestType<(typeof client.api.Book)[':chapterId']['book-resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Book[':chapterId']['book-resources'].$get(args, options))
}

export async function getApiBookChapterIdChapters(
  args: InferRequestType<(typeof client.api.Book)[':chapterId']['chapters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Book[':chapterId'].chapters.$get(args, options))
}

export async function getApiBookChapterIdBookPage(
  args: InferRequestType<(typeof client.api.Book)[':chapterId']['book-page']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Book[':chapterId']['book-page'].$get(args, options))
}

export async function postApiCblSync(
  args: InferRequestType<typeof client.api.Cbl.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl.sync.$post(args, options))
}

export async function postApiCblFileImport(
  args: InferRequestType<(typeof client.api.Cbl)['file-import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl['file-import'].$post(args, options))
}

export async function postApiCblUploadCblFile(
  args: InferRequestType<(typeof client.api.Cbl)['upload-cbl-file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl['upload-cbl-file'].$post(args, options))
}

export async function postApiCblRepoImport(
  args: InferRequestType<(typeof client.api.Cbl)['repo-import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl['repo-import'].$post(args, options))
}

export async function postApiCblReValidate(
  args: InferRequestType<(typeof client.api.Cbl)['re-validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl['re-validate'].$post(args, options))
}

export async function postApiCblFinalizeImport(
  args: InferRequestType<(typeof client.api.Cbl)['finalize-import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl['finalize-import'].$post(args, options))
}

export async function getApiCblRemapRules(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Cbl['remap-rules'].$get(undefined, options))
}

export async function postApiCblRemapRules(
  args: InferRequestType<(typeof client.api.Cbl)['remap-rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl['remap-rules'].$post(args, options))
}

export async function getApiCblRemapRulesAll(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Cbl['remap-rules'].all.$get(undefined, options))
}

export async function postApiCblRemapRulesIdPromote(
  args: InferRequestType<(typeof client.api.Cbl)['remap-rules'][':id']['promote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl['remap-rules'][':id'].promote.$post(args, options))
}

export async function postApiCblRemapRulesIdDemote(
  args: InferRequestType<(typeof client.api.Cbl)['remap-rules'][':id']['demote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl['remap-rules'][':id'].demote.$post(args, options))
}

export async function postApiCblRemapRulesId(
  args: InferRequestType<(typeof client.api.Cbl)['remap-rules'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl['remap-rules'][':id'].$post(args, options))
}

export async function deleteApiCblRemapRulesId(
  args: InferRequestType<(typeof client.api.Cbl)['remap-rules'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl['remap-rules'][':id'].$delete(args, options))
}

export async function getApiCblBrowse(
  args: InferRequestType<typeof client.api.Cbl.browse.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Cbl.browse.$get(args, options))
}

export async function getApiChapter(
  args: InferRequestType<typeof client.api.Chapter.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Chapter.$get(args, options))
}

export async function deleteApiChapter(
  args: InferRequestType<typeof client.api.Chapter.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Chapter.$delete(args, options))
}

export async function getApiChapterRestoreInfo(
  args: InferRequestType<(typeof client.api.Chapter)['restore-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Chapter['restore-info'].$get(args, options))
}

export async function postApiChapterDeleteMultiple(
  args: InferRequestType<(typeof client.api.Chapter)['delete-multiple']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Chapter['delete-multiple'].$post(args, options))
}

export async function postApiChapterUpdate(
  args: InferRequestType<typeof client.api.Chapter.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Chapter.update.$post(args, options))
}

export async function getApiChapterChapterDetailPlus(
  args: InferRequestType<(typeof client.api.Chapter)['chapter-detail-plus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Chapter['chapter-detail-plus'].$get(args, options))
}

export async function getApiCollection(
  args: InferRequestType<typeof client.api.Collection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Collection.$get(args, options))
}

export async function deleteApiCollection(
  args: InferRequestType<typeof client.api.Collection.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Collection.$delete(args, options))
}

export async function getApiCollectionSingle(
  args: InferRequestType<typeof client.api.Collection.single.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Collection.single.$get(args, options))
}

export async function getApiCollectionAllSeries(
  args: InferRequestType<(typeof client.api.Collection)['all-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Collection['all-series'].$get(args, options))
}

export async function getApiCollectionNameExists(
  args: InferRequestType<(typeof client.api.Collection)['name-exists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Collection['name-exists'].$get(args, options))
}

export async function postApiCollectionUpdate(
  args: InferRequestType<typeof client.api.Collection.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Collection.update.$post(args, options))
}

export async function postApiCollectionPromoteMultiple(
  args: InferRequestType<(typeof client.api.Collection)['promote-multiple']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Collection['promote-multiple'].$post(args, options))
}

export async function postApiCollectionDeleteMultiple(
  args: InferRequestType<(typeof client.api.Collection)['delete-multiple']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Collection['delete-multiple'].$post(args, options))
}

export async function postApiCollectionUpdateForSeries(
  args: InferRequestType<(typeof client.api.Collection)['update-for-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Collection['update-for-series'].$post(args, options))
}

export async function postApiCollectionUpdateSeries(
  args: InferRequestType<(typeof client.api.Collection)['update-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Collection['update-series'].$post(args, options))
}

export async function getApiCollectionMalStacks(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Collection['mal-stacks'].$get(undefined, options))
}

export async function postApiCollectionImportStack(
  args: InferRequestType<(typeof client.api.Collection)['import-stack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Collection['import-stack'].$post(args, options))
}

export async function getApiColorScapeSeries(
  args: InferRequestType<typeof client.api.ColorScape.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ColorScape.series.$get(args, options))
}

export async function getApiColorScapeVolume(
  args: InferRequestType<typeof client.api.ColorScape.volume.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ColorScape.volume.$get(args, options))
}

export async function getApiColorScapeChapter(
  args: InferRequestType<typeof client.api.ColorScape.chapter.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ColorScape.chapter.$get(args, options))
}

export async function getApiColorScapePerson(
  args: InferRequestType<typeof client.api.ColorScape.person.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ColorScape.person.$get(args, options))
}

export async function getApiColorScapeReadingList(
  args: InferRequestType<(typeof client.api.ColorScape)['reading-list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ColorScape['reading-list'].$get(args, options))
}

export async function getApiColorScapeCollection(
  args: InferRequestType<typeof client.api.ColorScape.collection.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ColorScape.collection.$get(args, options))
}

export async function postApiDeviceCreate(
  args: InferRequestType<typeof client.api.Device.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Device.create.$post(args, options))
}

export async function postApiDeviceUpdate(
  args: InferRequestType<typeof client.api.Device.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Device.update.$post(args, options))
}

export async function getApiDevice(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Device.$get(undefined, options))
}

export async function deleteApiDevice(
  args: InferRequestType<typeof client.api.Device.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Device.$delete(args, options))
}

export async function postApiDeviceSendTo(
  args: InferRequestType<(typeof client.api.Device)['send-to']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Device['send-to'].$post(args, options))
}

export async function postApiDeviceSendSeriesTo(
  args: InferRequestType<(typeof client.api.Device)['send-series-to']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Device['send-series-to'].$post(args, options))
}

export async function getApiDeviceClientDevices(
  args: InferRequestType<typeof client.api.Device.client.devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Device.client.devices.$get(args, options))
}

export async function getApiDeviceClientAllDevices(
  args: InferRequestType<(typeof client.api.Device.client)['all-devices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Device.client['all-devices'].$get(args, options))
}

export async function deleteApiDeviceClientDevice(
  args: InferRequestType<typeof client.api.Device.client.device.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Device.client.device.$delete(args, options))
}

export async function postApiDeviceClientUpdateName(
  args: InferRequestType<(typeof client.api.Device.client)['update-name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Device.client['update-name'].$post(args, options))
}

export async function getApiDownloadVolumeSize(
  args: InferRequestType<(typeof client.api.Download)['volume-size']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download['volume-size'].$get(args, options))
}

export async function postApiDownloadBulkVolumeSize(
  args: InferRequestType<(typeof client.api.Download)['bulk-volume-size']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download['bulk-volume-size'].$post(args, options))
}

export async function getApiDownloadChapterSize(
  args: InferRequestType<(typeof client.api.Download)['chapter-size']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download['chapter-size'].$get(args, options))
}

export async function postApiDownloadBulkChapterSize(
  args: InferRequestType<(typeof client.api.Download)['bulk-chapter-size']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download['bulk-chapter-size'].$post(args, options))
}

export async function getApiDownloadSeriesSize(
  args: InferRequestType<(typeof client.api.Download)['series-size']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download['series-size'].$get(args, options))
}

export async function getApiDownloadReadinglistSize(
  args: InferRequestType<(typeof client.api.Download)['readinglist-size']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download['readinglist-size'].$get(args, options))
}

export async function postApiDownloadBulkReadinglistSize(
  args: InferRequestType<(typeof client.api.Download)['bulk-readinglist-size']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download['bulk-readinglist-size'].$post(args, options))
}

export async function postApiDownloadBulkSeriesSize(
  args: InferRequestType<(typeof client.api.Download)['bulk-series-size']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download['bulk-series-size'].$post(args, options))
}

export async function getApiDownloadVolume(
  args: InferRequestType<typeof client.api.Download.volume.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download.volume.$get(args, options))
}

export async function getApiDownloadChapter(
  args: InferRequestType<typeof client.api.Download.chapter.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download.chapter.$get(args, options))
}

export async function getApiDownloadSeries(
  args: InferRequestType<typeof client.api.Download.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download.series.$get(args, options))
}

export async function postApiDownloadBookmarks(
  args: InferRequestType<typeof client.api.Download.bookmarks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Download.bookmarks.$post(args, options))
}

export async function getApiEmailAll(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Email.all.$get(undefined, options))
}

export async function postApiFilterUpdateSeries(
  args: InferRequestType<typeof client.api.Filter.update.series.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Filter.update.series.$post(args, options))
}

export async function postApiFilterUpdateReadingList(
  args: InferRequestType<(typeof client.api.Filter.update)['reading-list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Filter.update['reading-list'].$post(args, options))
}

export async function postApiFilterUpdatePerson(
  args: InferRequestType<typeof client.api.Filter.update.person.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Filter.update.person.$post(args, options))
}

export async function postApiFilterUpdateAnnotation(
  args: InferRequestType<typeof client.api.Filter.update.annotation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Filter.update.annotation.$post(args, options))
}

export async function getApiFilter(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Filter.$get(undefined, options))
}

export async function deleteApiFilter(
  args: InferRequestType<typeof client.api.Filter.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Filter.$delete(args, options))
}

export async function postApiFilterEncodeSeries(
  args: InferRequestType<typeof client.api.Filter.encode.series.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Filter.encode.series.$post(args, options))
}

export async function postApiFilterEncodeReadingList(
  args: InferRequestType<(typeof client.api.Filter.encode)['reading-list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Filter.encode['reading-list'].$post(args, options))
}

export async function postApiFilterEncodePerson(
  args: InferRequestType<typeof client.api.Filter.encode.person.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Filter.encode.person.$post(args, options))
}

export async function postApiFilterEncodeAnnotation(
  args: InferRequestType<typeof client.api.Filter.encode.annotation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Filter.encode.annotation.$post(args, options))
}

export async function postApiFilterDecode(
  args: InferRequestType<typeof client.api.Filter.decode.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Filter.decode.$post(args, options))
}

export async function postApiFilterRename(
  args: InferRequestType<typeof client.api.Filter.rename.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Filter.rename.$post(args, options))
}

export async function getApiFontAll(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Font.all.$get(undefined, options))
}

export async function getApiFont(
  args: InferRequestType<typeof client.api.Font.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Font.$get(args, options))
}

export async function deleteApiFont(
  args: InferRequestType<typeof client.api.Font.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Font.$delete(args, options))
}

export async function postApiFontUpload(
  args: InferRequestType<typeof client.api.Font.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Font.upload.$post(args, options))
}

export async function postApiFontUploadByUrl(
  args: InferRequestType<(typeof client.api.Font)['upload-by-url']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Font['upload-by-url'].$post(args, options))
}

export async function getApiHealth(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Health.$get(undefined, options))
}

export async function getApiImageChapterCover(
  args: InferRequestType<(typeof client.api.Image)['chapter-cover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image['chapter-cover'].$get(args, options))
}

export async function getApiImageLibraryCover(
  args: InferRequestType<(typeof client.api.Image)['library-cover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image['library-cover'].$get(args, options))
}

export async function getApiImageVolumeCover(
  args: InferRequestType<(typeof client.api.Image)['volume-cover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image['volume-cover'].$get(args, options))
}

export async function getApiImageSeriesCover(
  args: InferRequestType<(typeof client.api.Image)['series-cover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image['series-cover'].$get(args, options))
}

export async function getApiImageCollectionCover(
  args: InferRequestType<(typeof client.api.Image)['collection-cover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image['collection-cover'].$get(args, options))
}

export async function getApiImageReadinglistCover(
  args: InferRequestType<(typeof client.api.Image)['readinglist-cover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image['readinglist-cover'].$get(args, options))
}

export async function getApiImageBookmark(
  args: InferRequestType<typeof client.api.Image.bookmark.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image.bookmark.$get(args, options))
}

export async function getApiImageWebLink(
  args: InferRequestType<(typeof client.api.Image)['web-link']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image['web-link'].$get(args, options))
}

export async function getApiImagePublisher(
  args: InferRequestType<typeof client.api.Image.publisher.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image.publisher.$get(args, options))
}

export async function getApiImagePersonCover(
  args: InferRequestType<(typeof client.api.Image)['person-cover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image['person-cover'].$get(args, options))
}

export async function getApiImageUserCover(
  args: InferRequestType<(typeof client.api.Image)['user-cover']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image['user-cover'].$get(args, options))
}

export async function getApiImageCoverUpload(
  args: InferRequestType<(typeof client.api.Image)['cover-upload']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image['cover-upload'].$get(args, options))
}

export async function getApiImageExternalSeries(
  args: InferRequestType<typeof client.api.Image.external.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image.external.series.$get(args, options))
}

export async function getApiImageExternalVolume(
  args: InferRequestType<typeof client.api.Image.external.volume.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image.external.volume.$get(args, options))
}

export async function getApiImageExternalChapter(
  args: InferRequestType<typeof client.api.Image.external.chapter.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Image.external.chapter.$get(args, options))
}

export async function postApiKavitaPlusAuditEntries(
  args: InferRequestType<(typeof client.api)['kavita-plus-audit']['entries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['kavita-plus-audit'].entries.$post(args, options))
}

export async function getApiKavitaPlusAuditEntriesSeriesSeriesId(
  args: InferRequestType<
    (typeof client.api)['kavita-plus-audit']['entries']['series'][':seriesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['kavita-plus-audit'].entries.series[':seriesId'].$get(args, options),
  )
}

export async function getApiKavitaPlusAuditStats(options?: ClientRequestOptions) {
  return await parseResponse(client.api['kavita-plus-audit'].stats.$get(undefined, options))
}

export async function getApiKavitaPlusAuditMyStats(options?: ClientRequestOptions) {
  return await parseResponse(client.api['kavita-plus-audit']['my-stats'].$get(undefined, options))
}

export async function postApiKavitaPlusAuditMyActivity(
  args: InferRequestType<(typeof client.api)['kavita-plus-audit']['my-activity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['kavita-plus-audit']['my-activity'].$post(args, options))
}

export async function getApiKavitaPlusAuditFailedScrobbleEvents(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api['kavita-plus-audit']['failed-scrobble-events'].$get(undefined, options),
  )
}

export async function getKoboApiKeyV1Initialization(
  args: InferRequestType<(typeof client.Kobo)[':apiKey']['v1']['initialization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Kobo[':apiKey'].v1.initialization.$get(args, options))
}

export async function getKoboApiKeyV1LibrarySync(
  args: InferRequestType<(typeof client.Kobo)[':apiKey']['v1']['library']['sync']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Kobo[':apiKey'].v1.library.sync.$get(args, options))
}

export async function getKoboApiKeyV1LibraryBookIdMetadata(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['library'][':bookId']['metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Kobo[':apiKey'].v1.library[':bookId'].metadata.$get(args, options),
  )
}

export async function getKoboApiKeyV1LibraryBookIdState(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['library'][':bookId']['state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Kobo[':apiKey'].v1.library[':bookId'].state.$get(args, options))
}

export async function putKoboApiKeyV1LibraryBookIdState(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['library'][':bookId']['state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Kobo[':apiKey'].v1.library[':bookId'].state.$put(args, options))
}

export async function getKoboApiKeyV1LibraryBookIdFileEpub(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['library'][':bookId']['file']['epub']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Kobo[':apiKey'].v1.library[':bookId'].file.epub.$get(args, options),
  )
}

export async function getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightIsGreyScaleImageJpg(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['books'][':thumbnailId']['thumbnail'][':width'][':height'][':isGreyScale']['image.jpg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Kobo[':apiKey'].v1.books[':thumbnailId'].thumbnail[':width'][':height'][':isGreyScale'][
      'image.jpg'
    ].$get(args, options),
  )
}

export async function getKoboApiKeyV1BooksThumbnailIdThumbnailWidthHeightQualityIsGreyScaleImageJpg(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['books'][':thumbnailId']['thumbnail'][':width'][':height'][':quality'][':isGreyScale']['image.jpg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Kobo[':apiKey'].v1.books[':thumbnailId'].thumbnail[':width'][':height'][':quality'][
      ':isGreyScale'
    ]['image.jpg'].$get(args, options),
  )
}

export async function postKoboApiKeyV1LibraryBookId(
  args: InferRequestType<(typeof client.Kobo)[':apiKey']['v1']['library'][':bookId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Kobo[':apiKey'].v1.library[':bookId'].$post(args, options))
}

export async function deleteKoboApiKeyV1LibraryBookId(
  args: InferRequestType<(typeof client.Kobo)[':apiKey']['v1']['library'][':bookId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Kobo[':apiKey'].v1.library[':bookId'].$delete(args, options))
}

export async function getKoboApiKeyV1ProductsBookIdReviews(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['products'][':bookId']['reviews']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Kobo[':apiKey'].v1.products[':bookId'].reviews.$get(args, options),
  )
}

export async function putKoboApiKeyV1ProductsBookIdReviews(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['products'][':bookId']['reviews']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Kobo[':apiKey'].v1.products[':bookId'].reviews.$put(args, options),
  )
}

export async function getKoboApiKeyV1ProductsBookIdRecommendations(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['products'][':bookId']['recommendations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Kobo[':apiKey'].v1.products[':bookId'].recommendations.$get(args, options),
  )
}

export async function getKoboApiKeyV1ProductsBooksBookId(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['products']['books'][':bookId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Kobo[':apiKey'].v1.products.books[':bookId'].$get(args, options),
  )
}

export async function getKoboApiKeyV1ProductsBookIdNextread(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['products'][':bookId']['nextread']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Kobo[':apiKey'].v1.products[':bookId'].nextread.$get(args, options),
  )
}

export async function getKoboApiKeyV1ProductsBooksSeriesBookId(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['products']['books']['series'][':bookId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Kobo[':apiKey'].v1.products.books.series[':bookId'].$get(args, options),
  )
}

export async function getKoboApiKeyV1ProductsBookIdsPrices(
  args: InferRequestType<
    (typeof client.Kobo)[':apiKey']['v1']['products'][':bookIds']['prices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.Kobo[':apiKey'].v1.products[':bookIds'].prices.$get(args, options),
  )
}

export async function getKoboApiKeyV1UserReviews(
  args: InferRequestType<(typeof client.Kobo)[':apiKey']['v1']['user']['reviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Kobo[':apiKey'].v1.user.reviews.$get(args, options))
}

export async function getKoboApiKeyV1UserWishlist(
  args: InferRequestType<(typeof client.Kobo)[':apiKey']['v1']['user']['wishlist']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Kobo[':apiKey'].v1.user.wishlist.$get(args, options))
}

export async function getKoboApiKeyV1AnalyticsGettests(
  args: InferRequestType<(typeof client.Kobo)[':apiKey']['v1']['analytics']['gettests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Kobo[':apiKey'].v1.analytics.gettests.$get(args, options))
}

export async function postKoboApiKeyV1AnalyticsGettests(
  args: InferRequestType<(typeof client.Kobo)[':apiKey']['v1']['analytics']['gettests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Kobo[':apiKey'].v1.analytics.gettests.$post(args, options))
}

export async function getApiV3ContentBookIdAnnotations(
  args: InferRequestType<(typeof client.api.v3.content)[':bookId']['annotations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.content[':bookId'].annotations.$get(args, options))
}

export async function patchApiV3ContentBookIdAnnotations(
  args: InferRequestType<(typeof client.api.v3.content)[':bookId']['annotations']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v3.content[':bookId'].annotations.$patch(args, options))
}

export async function postApiV3ContentCheckforchanges(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v3.content.checkforchanges.$post(undefined, options))
}

export async function getApiKoreaderApiKeyUsersAuth(
  args: InferRequestType<(typeof client.api.Koreader)[':apiKey']['users']['auth']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Koreader[':apiKey'].users.auth.$get(args, options))
}

export async function putApiKoreaderApiKeySyncsProgress(
  args: InferRequestType<(typeof client.api.Koreader)[':apiKey']['syncs']['progress']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Koreader[':apiKey'].syncs.progress.$put(args, options))
}

export async function getApiKoreaderApiKeySyncsProgressEbookHash(
  args: InferRequestType<
    (typeof client.api.Koreader)[':apiKey']['syncs']['progress'][':ebookHash']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Koreader[':apiKey'].syncs.progress[':ebookHash'].$get(args, options),
  )
}

export async function postApiLibraryCreate(
  args: InferRequestType<typeof client.api.Library.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library.create.$post(args, options))
}

export async function getApiLibraryList(
  args: InferRequestType<typeof client.api.Library.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library.list.$get(args, options))
}

export async function postApiLibraryHasFilesAtRoot(
  args: InferRequestType<(typeof client.api.Library)['has-files-at-root']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['has-files-at-root'].$post(args, options))
}

export async function getApiLibrary(
  args: InferRequestType<typeof client.api.Library.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library.$get(args, options))
}

export async function getApiLibraryLibraries(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Library.libraries.$get(undefined, options))
}

export async function getApiLibraryUserLibraries(
  args: InferRequestType<(typeof client.api.Library)['user-libraries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['user-libraries'].$get(args, options))
}

export async function getApiLibraryJumpBar(
  args: InferRequestType<(typeof client.api.Library)['jump-bar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['jump-bar'].$get(args, options))
}

export async function postApiLibraryGrantAccess(
  args: InferRequestType<(typeof client.api.Library)['grant-access']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['grant-access'].$post(args, options))
}

export async function postApiLibraryScan(
  args: InferRequestType<typeof client.api.Library.scan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library.scan.$post(args, options))
}

export async function postApiLibraryFolderWatchRetry(
  args: InferRequestType<(typeof client.api.Library)['folder-watch']['retry']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['folder-watch'].retry.$post(args, options))
}

export async function getApiLibraryWatchStatus(
  args: InferRequestType<(typeof client.api.Library)['watch-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['watch-status'].$get(args, options))
}

export async function postApiLibraryScanMultiple(
  args: InferRequestType<(typeof client.api.Library)['scan-multiple']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['scan-multiple'].$post(args, options))
}

export async function postApiLibraryScanAll(
  args: InferRequestType<(typeof client.api.Library)['scan-all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['scan-all'].$post(args, options))
}

export async function postApiLibraryRefreshMetadata(
  args: InferRequestType<(typeof client.api.Library)['refresh-metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['refresh-metadata'].$post(args, options))
}

export async function postApiLibraryRefreshMetadataMultiple(
  args: InferRequestType<(typeof client.api.Library)['refresh-metadata-multiple']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['refresh-metadata-multiple'].$post(args, options))
}

export async function postApiLibraryCopySettingsFrom(
  args: InferRequestType<(typeof client.api.Library)['copy-settings-from']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['copy-settings-from'].$post(args, options))
}

export async function postApiLibraryScanFolder(
  args: InferRequestType<(typeof client.api.Library)['scan-folder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['scan-folder'].$post(args, options))
}

export async function deleteApiLibraryDelete(
  args: InferRequestType<typeof client.api.Library.delete.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library.delete.$delete(args, options))
}

export async function deleteApiLibraryDeleteMultiple(
  args: InferRequestType<(typeof client.api.Library)['delete-multiple']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['delete-multiple'].$delete(args, options))
}

export async function getApiLibraryNameExists(
  args: InferRequestType<(typeof client.api.Library)['name-exists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['name-exists'].$get(args, options))
}

export async function postApiLibraryUpdate(
  args: InferRequestType<typeof client.api.Library.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library.update.$post(args, options))
}

export async function getApiLibraryMetadataProviders(
  args: InferRequestType<(typeof client.api.Library)['metadata-providers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library['metadata-providers'].$get(args, options))
}

export async function getApiLibraryMetadataEnabledLibraries(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.Library['metadata-enabled-libraries'].$get(undefined, options),
  )
}

export async function getApiLibraryScrobbleEnabledLibraries(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.Library['scrobble-enabled-libraries'].$get(undefined, options),
  )
}

export async function getApiLibraryType(
  args: InferRequestType<typeof client.api.Library.type.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Library.type.$get(args, options))
}

export async function getApiLicenseValidLicense(
  args: InferRequestType<(typeof client.api.License)['valid-license']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.License['valid-license'].$get(args, options))
}

export async function getApiLicenseHasLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.api.License['has-license'].$get(undefined, options))
}

export async function getApiLicenseInfo(
  args: InferRequestType<typeof client.api.License.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.License.info.$get(args, options))
}

export async function postApiLicense(
  args: InferRequestType<typeof client.api.License.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.License.$post(args, options))
}

export async function deleteApiLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.api.License.$delete(undefined, options))
}

export async function postApiLicenseReset(
  args: InferRequestType<typeof client.api.License.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.License.reset.$post(args, options))
}

export async function postApiLicenseResendLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.api.License['resend-license'].$post(undefined, options))
}

export async function getApiLicenseProviderHealth(
  args: InferRequestType<(typeof client.api.License)['provider-health']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.License['provider-health'].$get(args, options))
}

export async function getApiLicenseStats(options?: ClientRequestOptions) {
  return await parseResponse(client.api.License.stats.$get(undefined, options))
}

export async function deleteApiLicenseCancel(
  args: InferRequestType<typeof client.api.License.cancel.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.License.cancel.$delete(args, options))
}

export async function getApiLicenseProducts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.License.products.$get(undefined, options))
}

export async function postApiLicenseRenew(
  args: InferRequestType<typeof client.api.License.renew.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.License.renew.$post(args, options))
}

export async function postApiLicenseChangeEmail(
  args: InferRequestType<(typeof client.api.License)['change-email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.License['change-email'].$post(args, options))
}

export async function getApiLocale(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Locale.$get(undefined, options))
}

export async function postApiManageSeriesMetadata(
  args: InferRequestType<(typeof client.api.Manage)['series-metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Manage['series-metadata'].$post(args, options))
}

export async function getApiManageMatchedSeriesCounts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Manage['matched-series-counts'].$get(undefined, options))
}

export async function getApiMetadataGenres(
  args: InferRequestType<typeof client.api.Metadata.genres.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Metadata.genres.$get(args, options))
}

export async function postApiMetadataGenresWithCounts(
  args: InferRequestType<(typeof client.api.Metadata)['genres-with-counts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Metadata['genres-with-counts'].$post(args, options))
}

export async function getApiMetadataPeopleByRole(
  args: InferRequestType<(typeof client.api.Metadata)['people-by-role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Metadata['people-by-role'].$get(args, options))
}

export async function getApiMetadataPeople(
  args: InferRequestType<typeof client.api.Metadata.people.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Metadata.people.$get(args, options))
}

export async function getApiMetadataTags(
  args: InferRequestType<typeof client.api.Metadata.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Metadata.tags.$get(args, options))
}

export async function getApiMetadataReadinglistTags(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Metadata['readinglist-tags'].$get(undefined, options))
}

export async function postApiMetadataTagsWithCounts(
  args: InferRequestType<(typeof client.api.Metadata)['tags-with-counts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Metadata['tags-with-counts'].$post(args, options))
}

export async function getApiMetadataAgeRatings(
  args: InferRequestType<(typeof client.api.Metadata)['age-ratings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Metadata['age-ratings'].$get(args, options))
}

export async function getApiMetadataPublicationStatus(
  args: InferRequestType<(typeof client.api.Metadata)['publication-status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Metadata['publication-status'].$get(args, options))
}

export async function getApiMetadataLanguages(
  args: InferRequestType<typeof client.api.Metadata.languages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Metadata.languages.$get(args, options))
}

export async function getApiMetadataAllLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Metadata['all-languages'].$get(undefined, options))
}

export async function getApiMetadataAllBcp47Languages(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Metadata['all-bcp47-languages'].$get(undefined, options))
}

export async function getApiMetadataLanguageTitle(
  args: InferRequestType<(typeof client.api.Metadata)['language-title']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Metadata['language-title'].$get(args, options))
}

export async function getApiMetadataSeriesDetailPlus(
  args: InferRequestType<(typeof client.api.Metadata)['series-detail-plus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Metadata['series-detail-plus'].$get(args, options))
}

export async function getApiOAuthStart(
  args: InferRequestType<typeof client.api.OAuth.start.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.OAuth.start.$get(args, options))
}

export async function getApiOAuthCallback(
  args: InferRequestType<typeof client.api.OAuth.callback.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.OAuth.callback.$get(args, options))
}

export async function getOidcLogin(
  args: InferRequestType<typeof client.Oidc.login.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.Oidc.login.$get(args, options))
}

export async function getOidcLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.Oidc.logout.$get(undefined, options))
}

export async function getApiOpdsApiKey(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey'].$get(args, options))
}

export async function postApiOpdsApiKey(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey'].$post(args, options))
}

export async function getApiOpdsApiKeySmartFiltersFilterId(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['smart-filters'][':filterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Opds[':apiKey']['smart-filters'][':filterId'].$get(args, options),
  )
}

export async function getApiOpdsApiKeySmartFilters(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['smart-filters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey']['smart-filters'].$get(args, options))
}

export async function getApiOpdsApiKeyLibraries(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['libraries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey'].libraries.$get(args, options))
}

export async function getApiOpdsApiKeyWantToRead(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['want-to-read']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey']['want-to-read'].$get(args, options))
}

export async function getApiOpdsApiKeyCollections(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey'].collections.$get(args, options))
}

export async function getApiOpdsApiKeyCollectionsCollectionId(
  args: InferRequestType<
    (typeof client.api.Opds)[':apiKey']['collections'][':collectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Opds[':apiKey'].collections[':collectionId'].$get(args, options),
  )
}

export async function getApiOpdsApiKeyReadingList(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['reading-list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey']['reading-list'].$get(args, options))
}

export async function getApiOpdsApiKeyReadingListReadingListId(
  args: InferRequestType<
    (typeof client.api.Opds)[':apiKey']['reading-list'][':readingListId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Opds[':apiKey']['reading-list'][':readingListId'].$get(args, options),
  )
}

export async function getApiOpdsApiKeyLibrariesLibraryId(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['libraries'][':libraryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey'].libraries[':libraryId'].$get(args, options))
}

export async function getApiOpdsApiKeyRecentlyAdded(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['recently-added']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey']['recently-added'].$get(args, options))
}

export async function getApiOpdsApiKeyRecentlyUpdated(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['recently-updated']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey']['recently-updated'].$get(args, options))
}

export async function getApiOpdsApiKeyOnDeck(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['on-deck']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey']['on-deck'].$get(args, options))
}

export async function getApiOpdsApiKeySeries(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey'].series.$get(args, options))
}

export async function getApiOpdsApiKeySearch(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey'].search.$get(args, options))
}

export async function getApiOpdsApiKeySeriesSeriesId(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['series'][':seriesId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey'].series[':seriesId'].$get(args, options))
}

export async function getApiOpdsApiKeySeriesSeriesIdVolumeVolumeId(
  args: InferRequestType<
    (typeof client.api.Opds)[':apiKey']['series'][':seriesId']['volume'][':volumeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Opds[':apiKey'].series[':seriesId'].volume[':volumeId'].$get(args, options),
  )
}

export async function getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterId(
  args: InferRequestType<
    (typeof client.api.Opds)[':apiKey']['series'][':seriesId']['volume'][':volumeId']['chapter'][':chapterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Opds[':apiKey'].series[':seriesId'].volume[':volumeId'].chapter[':chapterId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiOpdsApiKeySeriesSeriesIdVolumeVolumeIdChapterChapterIdDownloadFilename(
  args: InferRequestType<
    (typeof client.api.Opds)[':apiKey']['series'][':seriesId']['volume'][':volumeId']['chapter'][':chapterId']['download'][':filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Opds[':apiKey'].series[':seriesId'].volume[':volumeId'].chapter[
      ':chapterId'
    ].download[':filename'].$get(args, options),
  )
}

export async function getApiOpdsApiKeyImage(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['image']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey'].image.$get(args, options))
}

export async function getApiOpdsApiKeyFavicon(
  args: InferRequestType<(typeof client.api.Opds)[':apiKey']['favicon']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Opds[':apiKey'].favicon.$get(args, options))
}

export async function postApiPanelsSaveProgress(
  args: InferRequestType<(typeof client.api.Panels)['save-progress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Panels['save-progress'].$post(args, options))
}

export async function getApiPanelsGetProgress(
  args: InferRequestType<(typeof client.api.Panels)['get-progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Panels['get-progress'].$get(args, options))
}

export async function getApiPerson(
  args: InferRequestType<typeof client.api.Person.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Person.$get(args, options))
}

export async function getApiPersonSearch(
  args: InferRequestType<typeof client.api.Person.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Person.search.$get(args, options))
}

export async function getApiPersonRoles(
  args: InferRequestType<typeof client.api.Person.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Person.roles.$get(args, options))
}

export async function postApiPersonAll(
  args: InferRequestType<typeof client.api.Person.all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Person.all.$post(args, options))
}

export async function postApiPersonUpdate(
  args: InferRequestType<typeof client.api.Person.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Person.update.$post(args, options))
}

export async function getApiPersonCoversdbImage(
  args: InferRequestType<(typeof client.api.Person)['coversdb-image']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Person['coversdb-image'].$get(args, options))
}

export async function getApiPersonSeriesKnownFor(
  args: InferRequestType<(typeof client.api.Person)['series-known-for']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Person['series-known-for'].$get(args, options))
}

export async function getApiPersonChaptersByRole(
  args: InferRequestType<(typeof client.api.Person)['chapters-by-role']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Person['chapters-by-role'].$get(args, options))
}

export async function postApiPersonMerge(
  args: InferRequestType<typeof client.api.Person.merge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Person.merge.$post(args, options))
}

export async function postApiPersonValidAlias(
  args: InferRequestType<(typeof client.api.Person)['valid-alias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Person['valid-alias'].$post(args, options))
}

export async function postApiPluginAuthenticate(
  args: InferRequestType<typeof client.api.Plugin.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Plugin.authenticate.$post(args, options))
}

export async function getApiPluginVersion(
  args: InferRequestType<typeof client.api.Plugin.version.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Plugin.version.$get(args, options))
}

export async function getApiPluginAuthkeyExpires(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Plugin['authkey-expires'].$get(undefined, options))
}

export async function getApiPluginParse(
  args: InferRequestType<typeof client.api.Plugin.parse.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Plugin.parse.$get(args, options))
}

export async function postApiPluginParseBulk(
  args: InferRequestType<(typeof client.api.Plugin)['parse-bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Plugin['parse-bulk'].$post(args, options))
}

export async function postApiRatingSeries(
  args: InferRequestType<typeof client.api.Rating.series.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Rating.series.$post(args, options))
}

export async function postApiRatingChapter(
  args: InferRequestType<typeof client.api.Rating.chapter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Rating.chapter.$post(args, options))
}

export async function getApiRatingOverallSeries(
  args: InferRequestType<(typeof client.api.Rating)['overall-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Rating['overall-series'].$get(args, options))
}

export async function getApiRatingOverallChapter(
  args: InferRequestType<(typeof client.api.Rating)['overall-chapter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Rating['overall-chapter'].$get(args, options))
}

export async function getApiReaderPdf(
  args: InferRequestType<typeof client.api.Reader.pdf.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader.pdf.$get(args, options))
}

export async function getApiReaderImage(
  args: InferRequestType<typeof client.api.Reader.image.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader.image.$get(args, options))
}

export async function getApiReaderThumbnail(
  args: InferRequestType<typeof client.api.Reader.thumbnail.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader.thumbnail.$get(args, options))
}

export async function getApiReaderBookmarkImage(
  args: InferRequestType<(typeof client.api.Reader)['bookmark-image']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['bookmark-image'].$get(args, options))
}

export async function getApiReaderFileDimensions(
  args: InferRequestType<(typeof client.api.Reader)['file-dimensions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['file-dimensions'].$get(args, options))
}

export async function getApiReaderChapterInfo(
  args: InferRequestType<(typeof client.api.Reader)['chapter-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['chapter-info'].$get(args, options))
}

export async function getApiReaderBookmarkInfo(
  args: InferRequestType<(typeof client.api.Reader)['bookmark-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['bookmark-info'].$get(args, options))
}

export async function postApiReaderMarkChapterRead(
  args: InferRequestType<(typeof client.api.Reader)['mark-chapter-read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['mark-chapter-read'].$post(args, options))
}

export async function postApiReaderMarkRead(
  args: InferRequestType<(typeof client.api.Reader)['mark-read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['mark-read'].$post(args, options))
}

export async function postApiReaderMarkUnread(
  args: InferRequestType<(typeof client.api.Reader)['mark-unread']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['mark-unread'].$post(args, options))
}

export async function postApiReaderMarkVolumeUnread(
  args: InferRequestType<(typeof client.api.Reader)['mark-volume-unread']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['mark-volume-unread'].$post(args, options))
}

export async function postApiReaderMarkVolumeRead(
  args: InferRequestType<(typeof client.api.Reader)['mark-volume-read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['mark-volume-read'].$post(args, options))
}

export async function postApiReaderMarkMultipleRead(
  args: InferRequestType<(typeof client.api.Reader)['mark-multiple-read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['mark-multiple-read'].$post(args, options))
}

export async function postApiReaderMarkMultipleUnread(
  args: InferRequestType<(typeof client.api.Reader)['mark-multiple-unread']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['mark-multiple-unread'].$post(args, options))
}

export async function postApiReaderMarkMultipleSeriesRead(
  args: InferRequestType<(typeof client.api.Reader)['mark-multiple-series-read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['mark-multiple-series-read'].$post(args, options))
}

export async function postApiReaderMarkMultipleSeriesUnread(
  args: InferRequestType<(typeof client.api.Reader)['mark-multiple-series-unread']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['mark-multiple-series-unread'].$post(args, options))
}

export async function getApiReaderGetProgress(
  args: InferRequestType<(typeof client.api.Reader)['get-progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['get-progress'].$get(args, options))
}

export async function postApiReaderProgress(
  args: InferRequestType<typeof client.api.Reader.progress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader.progress.$post(args, options))
}

export async function getApiReaderContinuePoint(
  args: InferRequestType<(typeof client.api.Reader)['continue-point']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['continue-point'].$get(args, options))
}

export async function getApiReaderHasProgress(
  args: InferRequestType<(typeof client.api.Reader)['has-progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['has-progress'].$get(args, options))
}

export async function getApiReaderChapterBookmarks(
  args: InferRequestType<(typeof client.api.Reader)['chapter-bookmarks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['chapter-bookmarks'].$get(args, options))
}

export async function postApiReaderAllBookmarks(
  args: InferRequestType<(typeof client.api.Reader)['all-bookmarks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['all-bookmarks'].$post(args, options))
}

export async function postApiReaderRemoveBookmarks(
  args: InferRequestType<(typeof client.api.Reader)['remove-bookmarks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['remove-bookmarks'].$post(args, options))
}

export async function postApiReaderBulkRemoveBookmarks(
  args: InferRequestType<(typeof client.api.Reader)['bulk-remove-bookmarks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['bulk-remove-bookmarks'].$post(args, options))
}

export async function getApiReaderVolumeBookmarks(
  args: InferRequestType<(typeof client.api.Reader)['volume-bookmarks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['volume-bookmarks'].$get(args, options))
}

export async function getApiReaderSeriesBookmarks(
  args: InferRequestType<(typeof client.api.Reader)['series-bookmarks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['series-bookmarks'].$get(args, options))
}

export async function postApiReaderBookmark(
  args: InferRequestType<typeof client.api.Reader.bookmark.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader.bookmark.$post(args, options))
}

export async function postApiReaderUnbookmark(
  args: InferRequestType<typeof client.api.Reader.unbookmark.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader.unbookmark.$post(args, options))
}

export async function getApiReaderNextChapter(
  args: InferRequestType<(typeof client.api.Reader)['next-chapter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['next-chapter'].$get(args, options))
}

export async function getApiReaderPrevChapter(
  args: InferRequestType<(typeof client.api.Reader)['prev-chapter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['prev-chapter'].$get(args, options))
}

export async function getApiReaderTimeLeft(
  args: InferRequestType<(typeof client.api.Reader)['time-left']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['time-left'].$get(args, options))
}

export async function getApiReaderTimeLeftForChapter(
  args: InferRequestType<(typeof client.api.Reader)['time-left-for-chapter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['time-left-for-chapter'].$get(args, options))
}

export async function getApiReaderPtoc(
  args: InferRequestType<typeof client.api.Reader.ptoc.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader.ptoc.$get(args, options))
}

export async function deleteApiReaderPtoc(
  args: InferRequestType<typeof client.api.Reader.ptoc.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader.ptoc.$delete(args, options))
}

export async function postApiReaderCreatePtoc(
  args: InferRequestType<(typeof client.api.Reader)['create-ptoc']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['create-ptoc'].$post(args, options))
}

export async function getApiReaderPromptRereadSeries(
  args: InferRequestType<(typeof client.api.Reader)['prompt-reread']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['prompt-reread'].series.$get(args, options))
}

export async function getApiReaderPromptRereadVolume(
  args: InferRequestType<(typeof client.api.Reader)['prompt-reread']['volume']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['prompt-reread'].volume.$get(args, options))
}

export async function getApiReaderPromptRereadChapter(
  args: InferRequestType<(typeof client.api.Reader)['prompt-reread']['chapter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['prompt-reread'].chapter.$get(args, options))
}

export async function getApiReaderFirstProgressDate(
  args: InferRequestType<(typeof client.api.Reader)['first-progress-date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Reader['first-progress-date'].$get(args, options))
}

export async function getApiReadingList(
  args: InferRequestType<typeof client.api.ReadingList.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList.$get(args, options))
}

export async function deleteApiReadingList(
  args: InferRequestType<typeof client.api.ReadingList.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList.$delete(args, options))
}

export async function postApiReadingListLists(
  args: InferRequestType<typeof client.api.ReadingList.lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList.lists.$post(args, options))
}

export async function postApiReadingListAll(
  args: InferRequestType<typeof client.api.ReadingList.all.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList.all.$post(args, options))
}

export async function getApiReadingListListsForSeries(
  args: InferRequestType<(typeof client.api.ReadingList)['lists-for-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['lists-for-series'].$get(args, options))
}

export async function getApiReadingListListsForChapter(
  args: InferRequestType<(typeof client.api.ReadingList)['lists-for-chapter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['lists-for-chapter'].$get(args, options))
}

export async function getApiReadingListItems(
  args: InferRequestType<typeof client.api.ReadingList.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList.items.$get(args, options))
}

export async function postApiReadingListUpdatePosition(
  args: InferRequestType<(typeof client.api.ReadingList)['update-position']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['update-position'].$post(args, options))
}

export async function postApiReadingListDeleteItem(
  args: InferRequestType<(typeof client.api.ReadingList)['delete-item']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['delete-item'].$post(args, options))
}

export async function postApiReadingListRemoveRead(
  args: InferRequestType<(typeof client.api.ReadingList)['remove-read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['remove-read'].$post(args, options))
}

export async function postApiReadingListCreate(
  args: InferRequestType<typeof client.api.ReadingList.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList.create.$post(args, options))
}

export async function postApiReadingListUpdate(
  args: InferRequestType<typeof client.api.ReadingList.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList.update.$post(args, options))
}

export async function postApiReadingListUpdateBySeries(
  args: InferRequestType<(typeof client.api.ReadingList)['update-by-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['update-by-series'].$post(args, options))
}

export async function postApiReadingListUpdateByMultiple(
  args: InferRequestType<(typeof client.api.ReadingList)['update-by-multiple']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['update-by-multiple'].$post(args, options))
}

export async function postApiReadingListUpdateByMultipleSeries(
  args: InferRequestType<(typeof client.api.ReadingList)['update-by-multiple-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.ReadingList['update-by-multiple-series'].$post(args, options),
  )
}

export async function postApiReadingListUpdateByVolume(
  args: InferRequestType<(typeof client.api.ReadingList)['update-by-volume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['update-by-volume'].$post(args, options))
}

export async function postApiReadingListUpdateByChapter(
  args: InferRequestType<(typeof client.api.ReadingList)['update-by-chapter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['update-by-chapter'].$post(args, options))
}

export async function getApiReadingListPeople(
  args: InferRequestType<typeof client.api.ReadingList.people.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList.people.$get(args, options))
}

export async function getApiReadingListAllPeople(
  args: InferRequestType<(typeof client.api.ReadingList)['all-people']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['all-people'].$get(args, options))
}

export async function getApiReadingListNextChapter(
  args: InferRequestType<(typeof client.api.ReadingList)['next-chapter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['next-chapter'].$get(args, options))
}

export async function getApiReadingListPrevChapter(
  args: InferRequestType<(typeof client.api.ReadingList)['prev-chapter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['prev-chapter'].$get(args, options))
}

export async function getApiReadingListNameExists(
  args: InferRequestType<(typeof client.api.ReadingList)['name-exists']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['name-exists'].$get(args, options))
}

export async function postApiReadingListPromoteMultiple(
  args: InferRequestType<(typeof client.api.ReadingList)['promote-multiple']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['promote-multiple'].$post(args, options))
}

export async function postApiReadingListDeleteMultiple(
  args: InferRequestType<(typeof client.api.ReadingList)['delete-multiple']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['delete-multiple'].$post(args, options))
}

export async function getApiReadingListInfo(
  args: InferRequestType<typeof client.api.ReadingList.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList.info.$get(args, options))
}

export async function postApiReadingListExportAsCbl(
  args: InferRequestType<(typeof client.api.ReadingList)['export-as-cbl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['export-as-cbl'].$post(args, options))
}

export async function postApiReadingListRegenerateCover(
  args: InferRequestType<(typeof client.api.ReadingList)['regenerate-cover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.ReadingList['regenerate-cover'].$post(args, options))
}

export async function getApiReadingProfileAll(options?: ClientRequestOptions) {
  return await parseResponse(client.api['reading-profile'].all.$get(undefined, options))
}

export async function getApiReadingProfileLibraryIdSeriesId(
  args: InferRequestType<(typeof client.api)['reading-profile'][':libraryId'][':seriesId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['reading-profile'][':libraryId'][':seriesId'].$get(args, options),
  )
}

export async function getApiReadingProfileSeries(
  args: InferRequestType<(typeof client.api)['reading-profile']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['reading-profile'].series.$get(args, options))
}

export async function postApiReadingProfileSeries(
  args: InferRequestType<(typeof client.api)['reading-profile']['series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['reading-profile'].series.$post(args, options))
}

export async function getApiReadingProfileLibrary(
  args: InferRequestType<(typeof client.api)['reading-profile']['library']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['reading-profile'].library.$get(args, options))
}

export async function postApiReadingProfileCreate(
  args: InferRequestType<(typeof client.api)['reading-profile']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['reading-profile'].create.$post(args, options))
}

export async function postApiReadingProfilePromote(
  args: InferRequestType<(typeof client.api)['reading-profile']['promote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['reading-profile'].promote.$post(args, options))
}

export async function postApiReadingProfileUpdateParent(
  args: InferRequestType<(typeof client.api)['reading-profile']['update-parent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['reading-profile']['update-parent'].$post(args, options))
}

export async function postApiReadingProfile(
  args: InferRequestType<(typeof client.api)['reading-profile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['reading-profile'].$post(args, options))
}

export async function deleteApiReadingProfile(
  args: InferRequestType<(typeof client.api)['reading-profile']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['reading-profile'].$delete(args, options))
}

export async function postApiReadingProfileSeriesSeriesId(
  args: InferRequestType<(typeof client.api)['reading-profile']['series'][':seriesId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['reading-profile'].series[':seriesId'].$post(args, options))
}

export async function deleteApiReadingProfileSeriesSeriesId(
  args: InferRequestType<(typeof client.api)['reading-profile']['series'][':seriesId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['reading-profile'].series[':seriesId'].$delete(args, options),
  )
}

export async function postApiReadingProfileLibraryLibraryId(
  args: InferRequestType<(typeof client.api)['reading-profile']['library'][':libraryId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['reading-profile'].library[':libraryId'].$post(args, options),
  )
}

export async function deleteApiReadingProfileLibraryLibraryId(
  args: InferRequestType<
    (typeof client.api)['reading-profile']['library'][':libraryId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['reading-profile'].library[':libraryId'].$delete(args, options),
  )
}

export async function postApiReadingProfileBulk(
  args: InferRequestType<(typeof client.api)['reading-profile']['bulk']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['reading-profile'].bulk.$post(args, options))
}

export async function postApiReadingProfileSetDevices(
  args: InferRequestType<(typeof client.api)['reading-profile']['set-devices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['reading-profile']['set-devices'].$post(args, options))
}

export async function postApiReviewSeries(
  args: InferRequestType<typeof client.api.Review.series.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Review.series.$post(args, options))
}

export async function deleteApiReviewSeries(
  args: InferRequestType<typeof client.api.Review.series.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Review.series.$delete(args, options))
}

export async function postApiReviewChapter(
  args: InferRequestType<typeof client.api.Review.chapter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Review.chapter.$post(args, options))
}

export async function deleteApiReviewChapter(
  args: InferRequestType<typeof client.api.Review.chapter.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Review.chapter.$delete(args, options))
}

export async function getApiReviewAll(
  args: InferRequestType<typeof client.api.Review.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Review.all.$get(args, options))
}

export async function getApiReviewMySeries(
  args: InferRequestType<(typeof client.api.Review)['my-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Review['my-series'].$get(args, options))
}

export async function getApiScrobblingScrobbleSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Scrobbling['scrobble-settings'].$get(undefined, options))
}

export async function postApiScrobblingUpdateScrobbleSettings(
  args: InferRequestType<(typeof client.api.Scrobbling)['update-scrobble-settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Scrobbling['update-scrobble-settings'].$post(args, options))
}

export async function postApiScrobblingUpdateUserScrobbleProvider(
  args: InferRequestType<(typeof client.api.Scrobbling)['update-user-scrobble-provider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Scrobbling['update-user-scrobble-provider'].$post(args, options),
  )
}

export async function postApiScrobblingGenerateScrobbleEvents(
  args: InferRequestType<(typeof client.api.Scrobbling)['generate-scrobble-events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Scrobbling['generate-scrobble-events'].$post(args, options))
}

export async function postApiScrobblingGenerateScrobbleEventsAll(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.Scrobbling['generate-scrobble-events-all'].$post(undefined, options),
  )
}

export async function getApiScrobblingTokenExpired(
  args: InferRequestType<(typeof client.api.Scrobbling)['token-expired']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Scrobbling['token-expired'].$get(args, options))
}

export async function getApiScrobblingExpiredTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Scrobbling['expired-tokens'].$get(undefined, options))
}

export async function getApiScrobblingScrobbleErrors(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Scrobbling['scrobble-errors'].$get(undefined, options))
}

export async function postApiScrobblingClearErrors(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Scrobbling['clear-errors'].$post(undefined, options))
}

export async function postApiScrobblingScrobbleEvents(
  args: InferRequestType<(typeof client.api.Scrobbling)['scrobble-events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Scrobbling['scrobble-events'].$post(args, options))
}

export async function getApiScrobblingHolds(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Scrobbling.holds.$get(undefined, options))
}

export async function getApiScrobblingHasHold(
  args: InferRequestType<(typeof client.api.Scrobbling)['has-hold']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Scrobbling['has-hold'].$get(args, options))
}

export async function getApiScrobblingLibraryAllowsScrobbling(
  args: InferRequestType<(typeof client.api.Scrobbling)['library-allows-scrobbling']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Scrobbling['library-allows-scrobbling'].$get(args, options))
}

export async function postApiScrobblingAddHold(
  args: InferRequestType<(typeof client.api.Scrobbling)['add-hold']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Scrobbling['add-hold'].$post(args, options))
}

export async function deleteApiScrobblingRemoveHold(
  args: InferRequestType<(typeof client.api.Scrobbling)['remove-hold']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Scrobbling['remove-hold'].$delete(args, options))
}

export async function postApiScrobblingBulkRemoveEvents(
  args: InferRequestType<(typeof client.api.Scrobbling)['bulk-remove-events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Scrobbling['bulk-remove-events'].$post(args, options))
}

export async function deleteApiScrobblingRemoveErrorId(
  args: InferRequestType<(typeof client.api.Scrobbling)['remove-error'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Scrobbling['remove-error'][':id'].$delete(args, options))
}

export async function postApiScrobblingRetryScrobble(
  args: InferRequestType<(typeof client.api.Scrobbling)['retry-scrobble']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Scrobbling['retry-scrobble'].$post(args, options))
}

export async function getApiScrobblingNextScrobbleTime(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Scrobbling['next-scrobble-time'].$get(undefined, options))
}

export async function getApiSearchSeriesForMangafile(
  args: InferRequestType<(typeof client.api.Search)['series-for-mangafile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Search['series-for-mangafile'].$get(args, options))
}

export async function getApiSearchSeriesForChapter(
  args: InferRequestType<(typeof client.api.Search)['series-for-chapter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Search['series-for-chapter'].$get(args, options))
}

export async function getApiSearchSearch(
  args: InferRequestType<typeof client.api.Search.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Search.search.$get(args, options))
}

export async function getApiSearchChaptersBySeries(
  args: InferRequestType<(typeof client.api.Search)['chapters-by-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Search['chapters-by-series'].$get(args, options))
}

export async function postApiSeriesV2(
  args: InferRequestType<typeof client.api.Series.v2.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series.v2.$post(args, options))
}

export async function getApiSeriesSeriesId(
  args: InferRequestType<(typeof client.api.Series)[':seriesId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series[':seriesId'].$get(args, options))
}

export async function deleteApiSeriesSeriesId(
  args: InferRequestType<(typeof client.api.Series)[':seriesId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series[':seriesId'].$delete(args, options))
}

export async function postApiSeriesDeleteMultiple(
  args: InferRequestType<(typeof client.api.Series)['delete-multiple']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['delete-multiple'].$post(args, options))
}

export async function getApiSeriesVolumes(
  args: InferRequestType<typeof client.api.Series.volumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series.volumes.$get(args, options))
}

export async function getApiSeriesVolume(
  args: InferRequestType<typeof client.api.Series.volume.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series.volume.$get(args, options))
}

export async function getApiSeriesChapter(
  args: InferRequestType<typeof client.api.Series.chapter.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series.chapter.$get(args, options))
}

export async function postApiSeriesUpdate(
  args: InferRequestType<typeof client.api.Series.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series.update.$post(args, options))
}

export async function postApiSeriesRecentlyAddedV2(
  args: InferRequestType<(typeof client.api.Series)['recently-added-v2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['recently-added-v2'].$post(args, options))
}

export async function postApiSeriesRecentlyUpdatedSeries(
  args: InferRequestType<(typeof client.api.Series)['recently-updated-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['recently-updated-series'].$post(args, options))
}

export async function postApiSeriesAllV2(
  args: InferRequestType<(typeof client.api.Series)['all-v2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['all-v2'].$post(args, options))
}

export async function postApiSeriesOnDeck(
  args: InferRequestType<(typeof client.api.Series)['on-deck']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['on-deck'].$post(args, options))
}

export async function postApiSeriesRemoveFromOnDeck(
  args: InferRequestType<(typeof client.api.Series)['remove-from-on-deck']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['remove-from-on-deck'].$post(args, options))
}

export async function getApiSeriesCurrentlyReading(
  args: InferRequestType<(typeof client.api.Series)['currently-reading']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['currently-reading'].$get(args, options))
}

export async function postApiSeriesRefreshMetadata(
  args: InferRequestType<(typeof client.api.Series)['refresh-metadata']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['refresh-metadata'].$post(args, options))
}

export async function postApiSeriesScan(
  args: InferRequestType<typeof client.api.Series.scan.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series.scan.$post(args, options))
}

export async function postApiSeriesAnalyze(
  args: InferRequestType<typeof client.api.Series.analyze.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series.analyze.$post(args, options))
}

export async function getApiSeriesMetadata(
  args: InferRequestType<typeof client.api.Series.metadata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series.metadata.$get(args, options))
}

export async function postApiSeriesMetadata(
  args: InferRequestType<typeof client.api.Series.metadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series.metadata.$post(args, options))
}

export async function getApiSeriesSeriesByCollection(
  args: InferRequestType<(typeof client.api.Series)['series-by-collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['series-by-collection'].$get(args, options))
}

export async function postApiSeriesSeriesByIds(
  args: InferRequestType<(typeof client.api.Series)['series-by-ids']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['series-by-ids'].$post(args, options))
}

export async function getApiSeriesAgeRating(
  args: InferRequestType<(typeof client.api.Series)['age-rating']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['age-rating'].$get(args, options))
}

export async function getApiSeriesSeriesDetail(
  args: InferRequestType<(typeof client.api.Series)['series-detail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['series-detail'].$get(args, options))
}

export async function getApiSeriesRelated(
  args: InferRequestType<typeof client.api.Series.related.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series.related.$get(args, options))
}

export async function getApiSeriesAllRelated(
  args: InferRequestType<(typeof client.api.Series)['all-related']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['all-related'].$get(args, options))
}

export async function postApiSeriesUpdateRelated(
  args: InferRequestType<(typeof client.api.Series)['update-related']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['update-related'].$post(args, options))
}

export async function getApiSeriesExternalSeriesDetail(
  args: InferRequestType<(typeof client.api.Series)['external-series-detail']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['external-series-detail'].$get(args, options))
}

export async function getApiSeriesNextExpected(
  args: InferRequestType<(typeof client.api.Series)['next-expected']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['next-expected'].$get(args, options))
}

export async function postApiSeriesMatch(
  args: InferRequestType<typeof client.api.Series.match.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series.match.$post(args, options))
}

export async function postApiSeriesUpdateMatch(
  args: InferRequestType<(typeof client.api.Series)['update-match']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['update-match'].$post(args, options))
}

export async function postApiSeriesDontMatch(
  args: InferRequestType<(typeof client.api.Series)['dont-match']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['dont-match'].$post(args, options))
}

export async function getApiSeriesMatchInfo(
  args: InferRequestType<(typeof client.api.Series)['match-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Series['match-info'].$get(args, options))
}

export async function getApiSeriesSeriesWithAnnotations(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Series['series-with-annotations'].$get(undefined, options))
}

export async function postApiServerClearCache(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['clear-cache'].$post(undefined, options))
}

export async function postApiServerCleanupWantToRead(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['cleanup-want-to-read'].$post(undefined, options))
}

export async function postApiServerCleanup(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server.cleanup.$post(undefined, options))
}

export async function postApiServerBackupDb(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['backup-db'].$post(undefined, options))
}

export async function postApiServerAnalyzeFiles(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['analyze-files'].$post(undefined, options))
}

export async function getApiServerServerInfoSlim(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['server-info-slim'].$get(undefined, options))
}

export async function postApiServerConvertMedia(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['convert-media'].$post(undefined, options))
}

export async function getApiServerLogs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server.logs.$get(undefined, options))
}

export async function postApiServerDebugExport(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['debug-export'].$post(undefined, options))
}

export async function getApiServerDebugExportExportId(
  args: InferRequestType<(typeof client.api.Server)['debug-export'][':exportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Server['debug-export'][':exportId'].$get(args, options))
}

export async function getApiServerCheckForUpdates(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['check-for-updates'].$get(undefined, options))
}

export async function getApiServerCheckUpdate(
  args: InferRequestType<(typeof client.api.Server)['check-update']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Server['check-update'].$get(args, options))
}

export async function getApiServerCheckOutOfDate(
  args: InferRequestType<(typeof client.api.Server)['check-out-of-date']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Server['check-out-of-date'].$get(args, options))
}

export async function getApiServerChangelog(
  args: InferRequestType<typeof client.api.Server.changelog.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Server.changelog.$get(args, options))
}

export async function getApiServerJobs(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server.jobs.$get(undefined, options))
}

export async function getApiServerActivity(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server.activity.$get(undefined, options))
}

export async function getApiServerMediaErrors(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['media-errors'].$get(undefined, options))
}

export async function postApiServerMediaErrorsDismiss(
  args: InferRequestType<(typeof client.api.Server)['media-errors']['dismiss']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Server['media-errors'].dismiss.$post(args, options))
}

export async function postApiServerMediaErrorsUndismiss(
  args: InferRequestType<(typeof client.api.Server)['media-errors']['undismiss']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Server['media-errors'].undismiss.$post(args, options))
}

export async function getApiServerMediaErrorsForSeries(
  args: InferRequestType<(typeof client.api.Server)['media-errors-for-series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Server['media-errors-for-series'].$get(args, options))
}

export async function postApiServerClearMediaAlerts(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['clear-media-alerts'].$post(undefined, options))
}

export async function postApiServerBustKavitaplusCache(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['bust-kavitaplus-cache'].$post(undefined, options))
}

export async function postApiServerSyncThemes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Server['sync-themes'].$post(undefined, options))
}

export async function getApiServerIsTaskRunning(
  args: InferRequestType<(typeof client.api.Server)['is-task-running']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Server['is-task-running'].$get(args, options))
}

export async function getApiSettingsBaseUrl(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['base-url'].$get(undefined, options))
}

export async function getApiSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings.$get(undefined, options))
}

export async function postApiSettings(
  args: InferRequestType<typeof client.api.Settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Settings.$post(args, options))
}

export async function postApiSettingsReset(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings.reset.$post(undefined, options))
}

export async function postApiSettingsResetIpAddresses(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['reset-ip-addresses'].$post(undefined, options))
}

export async function postApiSettingsResetBaseUrl(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['reset-base-url'].$post(undefined, options))
}

export async function getApiSettingsIsEmailSetup(
  args: InferRequestType<(typeof client.api.Settings)['is-email-setup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Settings['is-email-setup'].$get(args, options))
}

export async function getApiSettingsTaskFrequencies(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['task-frequencies'].$get(undefined, options))
}

export async function getApiSettingsLibraryTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['library-types'].$get(undefined, options))
}

export async function getApiSettingsLogLevels(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['log-levels'].$get(undefined, options))
}

export async function getApiSettingsOpdsEnabled(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['opds-enabled'].$get(undefined, options))
}

export async function getApiSettingsKoboEnabled(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['kobo-enabled'].$get(undefined, options))
}

export async function getApiSettingsKepubifySupported(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['kepubify-supported'].$get(undefined, options))
}

export async function postApiSettingsKepubify(
  args: InferRequestType<typeof client.api.Settings.kepubify.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Settings.kepubify.$post(args, options))
}

export async function getApiSettingsIsValidCron(
  args: InferRequestType<(typeof client.api.Settings)['is-valid-cron']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Settings['is-valid-cron'].$get(args, options))
}

export async function postApiSettingsTestEmailUrl(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['test-email-url'].$post(undefined, options))
}

export async function getApiSettingsMetadataSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['metadata-settings'].$get(undefined, options))
}

export async function postApiSettingsMetadataSettings(
  args: InferRequestType<(typeof client.api.Settings)['metadata-settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Settings['metadata-settings'].$post(args, options))
}

export async function postApiSettingsRunMetadataMappings(
  args: InferRequestType<(typeof client.api.Settings)['run-metadata-mappings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Settings['run-metadata-mappings'].$post(args, options))
}

export async function postApiSettingsImportFieldMappings(
  args: InferRequestType<(typeof client.api.Settings)['import-field-mappings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Settings['import-field-mappings'].$post(args, options))
}

export async function getApiSettingsOidc(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings.oidc.$get(undefined, options))
}

export async function postApiSettingsResetExternalIds(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Settings['reset-external-ids'].$post(undefined, options))
}

export async function postApiSettingsIsValidAuthority(
  args: InferRequestType<(typeof client.api.Settings)['is-valid-authority']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Settings['is-valid-authority'].$post(args, options))
}

export async function getApiStatsServerStats(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats.server.stats.$get(undefined, options))
}

export async function getApiStatsServerCountPublicationStatus(options?: ClientRequestOptions) {
  return await parseResponse(
    client.api.Stats.server.count['publication-status'].$get(undefined, options),
  )
}

export async function getApiStatsServerCountMangaFormat(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats.server.count['manga-format'].$get(undefined, options))
}

export async function getApiStatsPopularDecades(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats['popular-decades'].$get(undefined, options))
}

export async function getApiStatsPopularLibraries(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats['popular-libraries'].$get(undefined, options))
}

export async function getApiStatsPopularSeries(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats['popular-series'].$get(undefined, options))
}

export async function getApiStatsPopularReadingList(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats['popular-reading-list'].$get(undefined, options))
}

export async function getApiStatsPopularGenres(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats['popular-genres'].$get(undefined, options))
}

export async function getApiStatsPopularTags(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats['popular-tags'].$get(undefined, options))
}

export async function getApiStatsPopularPeople(
  args: InferRequestType<(typeof client.api.Stats)['popular-people']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['popular-people'].$get(args, options))
}

export async function getApiStatsMostActiveUsers(
  args: InferRequestType<(typeof client.api.Stats)['most-active-users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['most-active-users'].$get(args, options))
}

export async function getApiStatsServerFileBreakdown(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats.server['file-breakdown'].$get(undefined, options))
}

export async function getApiStatsServerFileExtension(
  args: InferRequestType<(typeof client.api.Stats.server)['file-extension']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats.server['file-extension'].$get(args, options))
}

export async function getApiStatsReadingCounts(
  args: InferRequestType<(typeof client.api.Stats)['reading-counts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['reading-counts'].$get(args, options))
}

export async function getApiStatsDayBreakdown(
  args: InferRequestType<(typeof client.api.Stats)['day-breakdown']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['day-breakdown'].$get(args, options))
}

export async function getApiStatsPagesPerYear(
  args: InferRequestType<(typeof client.api.Stats)['pages-per-year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['pages-per-year'].$get(args, options))
}

export async function getApiStatsWordsPerYear(
  args: InferRequestType<(typeof client.api.Stats)['words-per-year']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['words-per-year'].$get(args, options))
}

export async function getApiStatsFilesAddedOverTime(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats['files-added-over-time'].$get(undefined, options))
}

export async function getApiStatsDeviceClientType(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats.device['client-type'].$get(undefined, options))
}

export async function getApiStatsDeviceDeviceType(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stats.device['device-type'].$get(undefined, options))
}

export async function getApiStatsReadingActivity(
  args: InferRequestType<(typeof client.api.Stats)['reading-activity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['reading-activity'].$get(args, options))
}

export async function getApiStatsReadingPace(
  args: InferRequestType<(typeof client.api.Stats)['reading-pace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['reading-pace'].$get(args, options))
}

export async function getApiStatsGenreBreakdown(
  args: InferRequestType<(typeof client.api.Stats)['genre-breakdown']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['genre-breakdown'].$get(args, options))
}

export async function getApiStatsTagBreakdown(
  args: InferRequestType<(typeof client.api.Stats)['tag-breakdown']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['tag-breakdown'].$get(args, options))
}

export async function getApiStatsPageSpread(
  args: InferRequestType<(typeof client.api.Stats)['page-spread']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['page-spread'].$get(args, options))
}

export async function getApiStatsWordSpread(
  args: InferRequestType<(typeof client.api.Stats)['word-spread']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['word-spread'].$get(args, options))
}

export async function getApiStatsFavoriteAuthors(
  args: InferRequestType<(typeof client.api.Stats)['favorite-authors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['favorite-authors'].$get(args, options))
}

export async function getApiStatsAvgTimeByHour(
  args: InferRequestType<(typeof client.api.Stats)['avg-time-by-hour']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['avg-time-by-hour'].$get(args, options))
}

export async function getApiStatsReadsByMonth(
  args: InferRequestType<(typeof client.api.Stats)['reads-by-month']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['reads-by-month'].$get(args, options))
}

export async function getApiStatsTotalReads(
  args: InferRequestType<(typeof client.api.Stats)['total-reads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['total-reads'].$get(args, options))
}

export async function getApiStatsUserStats(
  args: InferRequestType<(typeof client.api.Stats)['user-stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['user-stats'].$get(args, options))
}

export async function getApiStatsUserRead(
  args: InferRequestType<(typeof client.api.Stats)['user-read']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['user-read'].$get(args, options))
}

export async function getApiStatsReadingHistory(
  args: InferRequestType<(typeof client.api.Stats)['reading-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stats['reading-history'].$get(args, options))
}

export async function getApiStatsReadingHistorySeriesSeriesId(
  args: InferRequestType<
    (typeof client.api.Stats)['reading-history']['series'][':seriesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Stats['reading-history'].series[':seriesId'].$get(args, options),
  )
}

export async function getApiStreamDashboard(
  args: InferRequestType<typeof client.api.Stream.dashboard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream.dashboard.$get(args, options))
}

export async function getApiStreamSidenav(
  args: InferRequestType<typeof client.api.Stream.sidenav.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream.sidenav.$get(args, options))
}

export async function getApiStreamExternalSources(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Stream['external-sources'].$get(undefined, options))
}

export async function postApiStreamCreateExternalSource(
  args: InferRequestType<(typeof client.api.Stream)['create-external-source']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream['create-external-source'].$post(args, options))
}

export async function postApiStreamUpdateExternalSource(
  args: InferRequestType<(typeof client.api.Stream)['update-external-source']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream['update-external-source'].$post(args, options))
}

export async function postApiStreamExternalSourceExists(
  args: InferRequestType<(typeof client.api.Stream)['external-source-exists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream['external-source-exists'].$post(args, options))
}

export async function deleteApiStreamDeleteExternalSource(
  args: InferRequestType<(typeof client.api.Stream)['delete-external-source']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream['delete-external-source'].$delete(args, options))
}

export async function postApiStreamAddDashboardStream(
  args: InferRequestType<(typeof client.api.Stream)['add-dashboard-stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream['add-dashboard-stream'].$post(args, options))
}

export async function postApiStreamUpdateDashboardStream(
  args: InferRequestType<(typeof client.api.Stream)['update-dashboard-stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream['update-dashboard-stream'].$post(args, options))
}

export async function postApiStreamUpdateDashboardPosition(
  args: InferRequestType<(typeof client.api.Stream)['update-dashboard-position']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream['update-dashboard-position'].$post(args, options))
}

export async function postApiStreamAddSidenavStream(
  args: InferRequestType<(typeof client.api.Stream)['add-sidenav-stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream['add-sidenav-stream'].$post(args, options))
}

export async function postApiStreamAddSidenavStreamFromExternalSource(
  args: InferRequestType<
    (typeof client.api.Stream)['add-sidenav-stream-from-external-source']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Stream['add-sidenav-stream-from-external-source'].$post(args, options),
  )
}

export async function postApiStreamUpdateSidenavStream(
  args: InferRequestType<(typeof client.api.Stream)['update-sidenav-stream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream['update-sidenav-stream'].$post(args, options))
}

export async function postApiStreamUpdateSidenavPosition(
  args: InferRequestType<(typeof client.api.Stream)['update-sidenav-position']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Stream['update-sidenav-position'].$post(args, options))
}

export async function postApiStreamBulkSidenavStreamVisibility(
  args: InferRequestType<(typeof client.api.Stream)['bulk-sidenav-stream-visibility']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Stream['bulk-sidenav-stream-visibility'].$post(args, options),
  )
}

export async function deleteApiStreamSmartFilterSideNavStream(
  args: InferRequestType<(typeof client.api.Stream)['smart-filter-side-nav-stream']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Stream['smart-filter-side-nav-stream'].$delete(args, options),
  )
}

export async function deleteApiStreamSmartFilterDashboardStream(
  args: InferRequestType<(typeof client.api.Stream)['smart-filter-dashboard-stream']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Stream['smart-filter-dashboard-stream'].$delete(args, options),
  )
}

export async function getApiTachiyomiLatestChapter(
  args: InferRequestType<(typeof client.api.Tachiyomi)['latest-chapter']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Tachiyomi['latest-chapter'].$get(args, options))
}

export async function postApiTachiyomiMarkChapterUntilAsRead(
  args: InferRequestType<(typeof client.api.Tachiyomi)['mark-chapter-until-as-read']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Tachiyomi['mark-chapter-until-as-read'].$post(args, options),
  )
}

export async function getApiTheme(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Theme.$get(undefined, options))
}

export async function deleteApiTheme(
  args: InferRequestType<typeof client.api.Theme.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Theme.$delete(args, options))
}

export async function postApiThemeUpdateDefault(
  args: InferRequestType<(typeof client.api.Theme)['update-default']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Theme['update-default'].$post(args, options))
}

export async function getApiThemeDownloadContent(
  args: InferRequestType<(typeof client.api.Theme)['download-content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Theme['download-content'].$get(args, options))
}

export async function getApiThemeBrowse(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Theme.browse.$get(undefined, options))
}

export async function postApiThemeDownloadTheme(
  args: InferRequestType<(typeof client.api.Theme)['download-theme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Theme['download-theme'].$post(args, options))
}

export async function postApiThemeUploadTheme(
  args: InferRequestType<(typeof client.api.Theme)['upload-theme']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Theme['upload-theme'].$post(args, options))
}

export async function postApiUploadUploadByUrl(
  args: InferRequestType<(typeof client.api.Upload)['upload-by-url']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload['upload-by-url'].$post(args, options))
}

export async function postApiUploadUploadChapterCover(
  args: InferRequestType<(typeof client.api.Upload)['upload-chapter-cover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload['upload-chapter-cover'].$post(args, options))
}

export async function postApiUploadUploadVolumeCover(
  args: InferRequestType<(typeof client.api.Upload)['upload-volume-cover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload['upload-volume-cover'].$post(args, options))
}

export async function postApiUploadUploadSeriesCover(
  args: InferRequestType<(typeof client.api.Upload)['upload-series-cover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload['upload-series-cover'].$post(args, options))
}

export async function postApiUploadUploadByFile(
  args: InferRequestType<(typeof client.api.Upload)['upload-by-file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload['upload-by-file'].$post(args, options))
}

export async function postApiUploadSeries(
  args: InferRequestType<typeof client.api.Upload.series.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload.series.$post(args, options))
}

export async function postApiUploadCollection(
  args: InferRequestType<typeof client.api.Upload.collection.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload.collection.$post(args, options))
}

export async function postApiUploadReadingList(
  args: InferRequestType<(typeof client.api.Upload)['reading-list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload['reading-list'].$post(args, options))
}

export async function postApiUploadChapter(
  args: InferRequestType<typeof client.api.Upload.chapter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload.chapter.$post(args, options))
}

export async function postApiUploadVolume(
  args: InferRequestType<typeof client.api.Upload.volume.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload.volume.$post(args, options))
}

export async function postApiUploadLibrary(
  args: InferRequestType<typeof client.api.Upload.library.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload.library.$post(args, options))
}

export async function postApiUploadPerson(
  args: InferRequestType<typeof client.api.Upload.person.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload.person.$post(args, options))
}

export async function postApiUploadUser(
  args: InferRequestType<typeof client.api.Upload.user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Upload.user.$post(args, options))
}

export async function deleteApiUsersDeleteUser(
  args: InferRequestType<(typeof client.api.Users)['delete-user']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Users['delete-user'].$delete(args, options))
}

export async function getApiUsers(
  args: InferRequestType<typeof client.api.Users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Users.$get(args, options))
}

export async function getApiUsersProfileInfo(
  args: InferRequestType<(typeof client.api.Users)['profile-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Users['profile-info'].$get(args, options))
}

export async function getApiUsersHasProfileShared(
  args: InferRequestType<(typeof client.api.Users)['has-profile-shared']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Users['has-profile-shared'].$get(args, options))
}

export async function getApiUsersHasReadingProgress(
  args: InferRequestType<(typeof client.api.Users)['has-reading-progress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Users['has-reading-progress'].$get(args, options))
}

export async function getApiUsersHasLibraryAccess(
  args: InferRequestType<(typeof client.api.Users)['has-library-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Users['has-library-access'].$get(args, options))
}

export async function postApiUsersUpdatePreferences(
  args: InferRequestType<(typeof client.api.Users)['update-preferences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Users['update-preferences'].$post(args, options))
}

export async function getApiUsersGetPreferences(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Users['get-preferences'].$get(undefined, options))
}

export async function getApiUsersKoboSyncPoints(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Users['kobo-sync-points'].$get(undefined, options))
}

export async function deleteApiUsersKoboSyncPoint(
  args: InferRequestType<(typeof client.api.Users)['kobo-sync-point']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Users['kobo-sync-point'].$delete(args, options))
}

export async function postApiUsersKoboSyncPointUndoRemoveBooks(
  args: InferRequestType<
    (typeof client.api.Users)['kobo-sync-point']['undo-remove-books']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.Users['kobo-sync-point']['undo-remove-books'].$post(args, options),
  )
}

export async function getApiUsersNames(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Users.names.$get(undefined, options))
}

export async function getApiUsersTokens(options?: ClientRequestOptions) {
  return await parseResponse(client.api.Users.tokens.$get(undefined, options))
}

export async function getApiVolume(
  args: InferRequestType<typeof client.api.Volume.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Volume.$get(args, options))
}

export async function deleteApiVolume(
  args: InferRequestType<typeof client.api.Volume.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Volume.$delete(args, options))
}

export async function postApiVolumeUpdate(
  args: InferRequestType<typeof client.api.Volume.update.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Volume.update.$post(args, options))
}

export async function postApiVolumeMultiple(
  args: InferRequestType<typeof client.api.Volume.multiple.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Volume.multiple.$post(args, options))
}

export async function postApiWantToReadV2(
  args: InferRequestType<(typeof client.api)['want-to-read']['v2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['want-to-read'].v2.$post(args, options))
}

export async function getApiWantToRead(
  args: InferRequestType<(typeof client.api)['want-to-read']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['want-to-read'].$get(args, options))
}

export async function postApiWantToReadAddSeries(
  args: InferRequestType<(typeof client.api)['want-to-read']['add-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['want-to-read']['add-series'].$post(args, options))
}

export async function postApiWantToReadRemoveSeries(
  args: InferRequestType<(typeof client.api)['want-to-read']['remove-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['want-to-read']['remove-series'].$post(args, options))
}
