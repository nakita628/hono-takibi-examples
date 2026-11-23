import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGmailV1UsersUserIdDraftsIdRoute,
  deleteGmailV1UsersUserIdLabelsIdRoute,
  deleteGmailV1UsersUserIdMessagesIdRoute,
  deleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressRoute,
  deleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailRoute,
  deleteGmailV1UsersUserIdSettingsFiltersIdRoute,
  deleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailRoute,
  deleteGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute,
  deleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdRoute,
  deleteGmailV1UsersUserIdThreadsIdRoute,
  getGmailV1UsersUserIdDraftsIdRoute,
  getGmailV1UsersUserIdDraftsRoute,
  getGmailV1UsersUserIdHistoryRoute,
  getGmailV1UsersUserIdLabelsIdRoute,
  getGmailV1UsersUserIdLabelsRoute,
  getGmailV1UsersUserIdMessagesIdRoute,
  getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdRoute,
  getGmailV1UsersUserIdMessagesRoute,
  getGmailV1UsersUserIdProfileRoute,
  getGmailV1UsersUserIdSettingsAutoForwardingRoute,
  getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressRoute,
  getGmailV1UsersUserIdSettingsCseIdentitiesRoute,
  getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdRoute,
  getGmailV1UsersUserIdSettingsCseKeypairsRoute,
  getGmailV1UsersUserIdSettingsDelegatesDelegateEmailRoute,
  getGmailV1UsersUserIdSettingsDelegatesRoute,
  getGmailV1UsersUserIdSettingsFiltersIdRoute,
  getGmailV1UsersUserIdSettingsFiltersRoute,
  getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailRoute,
  getGmailV1UsersUserIdSettingsForwardingAddressesRoute,
  getGmailV1UsersUserIdSettingsImapRoute,
  getGmailV1UsersUserIdSettingsLanguageRoute,
  getGmailV1UsersUserIdSettingsPopRoute,
  getGmailV1UsersUserIdSettingsSendAsRoute,
  getGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute,
  getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdRoute,
  getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoRoute,
  getGmailV1UsersUserIdSettingsVacationRoute,
  getGmailV1UsersUserIdThreadsIdRoute,
  getGmailV1UsersUserIdThreadsRoute,
  patchGmailV1UsersUserIdLabelsIdRoute,
  patchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressRoute,
  patchGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute,
  postGmailV1UsersUserIdDraftsRoute,
  postGmailV1UsersUserIdDraftsSendRoute,
  postGmailV1UsersUserIdLabelsRoute,
  postGmailV1UsersUserIdMessagesBatchDeleteRoute,
  postGmailV1UsersUserIdMessagesBatchModifyRoute,
  postGmailV1UsersUserIdMessagesIdModifyRoute,
  postGmailV1UsersUserIdMessagesIdTrashRoute,
  postGmailV1UsersUserIdMessagesIdUntrashRoute,
  postGmailV1UsersUserIdMessagesImportRoute,
  postGmailV1UsersUserIdMessagesRoute,
  postGmailV1UsersUserIdMessagesSendRoute,
  postGmailV1UsersUserIdSettingsCseIdentitiesRoute,
  postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableRoute,
  postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableRoute,
  postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateRoute,
  postGmailV1UsersUserIdSettingsCseKeypairsRoute,
  postGmailV1UsersUserIdSettingsDelegatesRoute,
  postGmailV1UsersUserIdSettingsFiltersRoute,
  postGmailV1UsersUserIdSettingsForwardingAddressesRoute,
  postGmailV1UsersUserIdSettingsSendAsRoute,
  postGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultRoute,
  postGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoRoute,
  postGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyRoute,
  postGmailV1UsersUserIdStopRoute,
  postGmailV1UsersUserIdThreadsIdModifyRoute,
  postGmailV1UsersUserIdThreadsIdTrashRoute,
  postGmailV1UsersUserIdThreadsIdUntrashRoute,
  postGmailV1UsersUserIdWatchRoute,
  putGmailV1UsersUserIdDraftsIdRoute,
  putGmailV1UsersUserIdLabelsIdRoute,
  putGmailV1UsersUserIdSettingsAutoForwardingRoute,
  putGmailV1UsersUserIdSettingsImapRoute,
  putGmailV1UsersUserIdSettingsLanguageRoute,
  putGmailV1UsersUserIdSettingsPopRoute,
  putGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute,
  putGmailV1UsersUserIdSettingsVacationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gmailHandler = app
  .openapi(getGmailV1UsersUserIdDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdDraftsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGmailV1UsersUserIdDraftsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdDraftsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGmailV1UsersUserIdDraftsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGmailV1UsersUserIdLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGmailV1UsersUserIdLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGmailV1UsersUserIdLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdMessagesBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdMessagesBatchModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdMessagesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdMessagesSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGmailV1UsersUserIdMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdMessagesIdModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdMessagesIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdMessagesIdUntrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdMessagesMessageIdAttachmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsAutoForwardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGmailV1UsersUserIdSettingsAutoForwardingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsCseIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsCseIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsCseIdentitiesCseEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGmailV1UsersUserIdSettingsCseIdentitiesEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsCseKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsCseKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsCseKeypairsKeyPairIdObliterateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsDelegatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsDelegatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGmailV1UsersUserIdSettingsDelegatesDelegateEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsDelegatesDelegateEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGmailV1UsersUserIdSettingsFiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsFiltersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsForwardingAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsForwardingAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsForwardingAddressesForwardingEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsImapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGmailV1UsersUserIdSettingsImapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGmailV1UsersUserIdSettingsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsPopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGmailV1UsersUserIdSettingsPopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsSendAsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsSendAsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGmailV1UsersUserIdSettingsSendAsSendAsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsSendAsSendAsEmailSmimeInfoIdSetDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdSettingsSendAsSendAsEmailVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdSettingsVacationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGmailV1UsersUserIdSettingsVacationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGmailV1UsersUserIdThreadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGmailV1UsersUserIdThreadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdThreadsIdModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdThreadsIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdThreadsIdUntrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGmailV1UsersUserIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
