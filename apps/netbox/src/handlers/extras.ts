import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiExtrasBookmarksIdIndexRoute,
  deleteApiExtrasBookmarksIndexRoute,
  deleteApiExtrasConfigContextProfilesIdIndexRoute,
  deleteApiExtrasConfigContextProfilesIndexRoute,
  deleteApiExtrasConfigContextsIdIndexRoute,
  deleteApiExtrasConfigContextsIndexRoute,
  deleteApiExtrasConfigTemplatesIdIndexRoute,
  deleteApiExtrasConfigTemplatesIndexRoute,
  deleteApiExtrasCustomFieldChoiceSetsIdIndexRoute,
  deleteApiExtrasCustomFieldChoiceSetsIndexRoute,
  deleteApiExtrasCustomFieldsIdIndexRoute,
  deleteApiExtrasCustomFieldsIndexRoute,
  deleteApiExtrasCustomLinksIdIndexRoute,
  deleteApiExtrasCustomLinksIndexRoute,
  deleteApiExtrasDashboardIndexRoute,
  deleteApiExtrasEventRulesIdIndexRoute,
  deleteApiExtrasEventRulesIndexRoute,
  deleteApiExtrasExportTemplatesIdIndexRoute,
  deleteApiExtrasExportTemplatesIndexRoute,
  deleteApiExtrasImageAttachmentsIdIndexRoute,
  deleteApiExtrasImageAttachmentsIndexRoute,
  deleteApiExtrasJournalEntriesIdIndexRoute,
  deleteApiExtrasJournalEntriesIndexRoute,
  deleteApiExtrasNotificationGroupsIdIndexRoute,
  deleteApiExtrasNotificationGroupsIndexRoute,
  deleteApiExtrasNotificationsIdIndexRoute,
  deleteApiExtrasNotificationsIndexRoute,
  deleteApiExtrasSavedFiltersIdIndexRoute,
  deleteApiExtrasSavedFiltersIndexRoute,
  deleteApiExtrasSubscriptionsIdIndexRoute,
  deleteApiExtrasSubscriptionsIndexRoute,
  deleteApiExtrasTableConfigsIdIndexRoute,
  deleteApiExtrasTableConfigsIndexRoute,
  deleteApiExtrasTagsIdIndexRoute,
  deleteApiExtrasTagsIndexRoute,
  deleteApiExtrasWebhooksIdIndexRoute,
  deleteApiExtrasWebhooksIndexRoute,
  getApiExtrasBookmarksIdIndexRoute,
  getApiExtrasBookmarksIndexRoute,
  getApiExtrasConfigContextProfilesIdIndexRoute,
  getApiExtrasConfigContextProfilesIndexRoute,
  getApiExtrasConfigContextsIdIndexRoute,
  getApiExtrasConfigContextsIndexRoute,
  getApiExtrasConfigTemplatesIdIndexRoute,
  getApiExtrasConfigTemplatesIndexRoute,
  getApiExtrasCustomFieldChoiceSetsIdChoicesIndexRoute,
  getApiExtrasCustomFieldChoiceSetsIdIndexRoute,
  getApiExtrasCustomFieldChoiceSetsIndexRoute,
  getApiExtrasCustomFieldsIdIndexRoute,
  getApiExtrasCustomFieldsIndexRoute,
  getApiExtrasCustomLinksIdIndexRoute,
  getApiExtrasCustomLinksIndexRoute,
  getApiExtrasDashboardIndexRoute,
  getApiExtrasEventRulesIdIndexRoute,
  getApiExtrasEventRulesIndexRoute,
  getApiExtrasExportTemplatesIdIndexRoute,
  getApiExtrasExportTemplatesIndexRoute,
  getApiExtrasImageAttachmentsIdIndexRoute,
  getApiExtrasImageAttachmentsIndexRoute,
  getApiExtrasJournalEntriesIdIndexRoute,
  getApiExtrasJournalEntriesIndexRoute,
  getApiExtrasNotificationGroupsIdIndexRoute,
  getApiExtrasNotificationGroupsIndexRoute,
  getApiExtrasNotificationsIdIndexRoute,
  getApiExtrasNotificationsIndexRoute,
  getApiExtrasSavedFiltersIdIndexRoute,
  getApiExtrasSavedFiltersIndexRoute,
  getApiExtrasScriptsIdIndexRoute,
  getApiExtrasScriptsIndexRoute,
  getApiExtrasSubscriptionsIdIndexRoute,
  getApiExtrasSubscriptionsIndexRoute,
  getApiExtrasTableConfigsIdIndexRoute,
  getApiExtrasTableConfigsIndexRoute,
  getApiExtrasTaggedObjectsIdIndexRoute,
  getApiExtrasTaggedObjectsIndexRoute,
  getApiExtrasTagsIdIndexRoute,
  getApiExtrasTagsIndexRoute,
  getApiExtrasWebhooksIdIndexRoute,
  getApiExtrasWebhooksIndexRoute,
  patchApiExtrasBookmarksIdIndexRoute,
  patchApiExtrasBookmarksIndexRoute,
  patchApiExtrasConfigContextProfilesIdIndexRoute,
  patchApiExtrasConfigContextProfilesIndexRoute,
  patchApiExtrasConfigContextsIdIndexRoute,
  patchApiExtrasConfigContextsIndexRoute,
  patchApiExtrasConfigTemplatesIdIndexRoute,
  patchApiExtrasConfigTemplatesIndexRoute,
  patchApiExtrasCustomFieldChoiceSetsIdIndexRoute,
  patchApiExtrasCustomFieldChoiceSetsIndexRoute,
  patchApiExtrasCustomFieldsIdIndexRoute,
  patchApiExtrasCustomFieldsIndexRoute,
  patchApiExtrasCustomLinksIdIndexRoute,
  patchApiExtrasCustomLinksIndexRoute,
  patchApiExtrasDashboardIndexRoute,
  patchApiExtrasEventRulesIdIndexRoute,
  patchApiExtrasEventRulesIndexRoute,
  patchApiExtrasExportTemplatesIdIndexRoute,
  patchApiExtrasExportTemplatesIndexRoute,
  patchApiExtrasImageAttachmentsIdIndexRoute,
  patchApiExtrasImageAttachmentsIndexRoute,
  patchApiExtrasJournalEntriesIdIndexRoute,
  patchApiExtrasJournalEntriesIndexRoute,
  patchApiExtrasNotificationGroupsIdIndexRoute,
  patchApiExtrasNotificationGroupsIndexRoute,
  patchApiExtrasNotificationsIdIndexRoute,
  patchApiExtrasNotificationsIndexRoute,
  patchApiExtrasSavedFiltersIdIndexRoute,
  patchApiExtrasSavedFiltersIndexRoute,
  patchApiExtrasScriptsUploadIdIndexRoute,
  patchApiExtrasSubscriptionsIdIndexRoute,
  patchApiExtrasSubscriptionsIndexRoute,
  patchApiExtrasTableConfigsIdIndexRoute,
  patchApiExtrasTableConfigsIndexRoute,
  patchApiExtrasTagsIdIndexRoute,
  patchApiExtrasTagsIndexRoute,
  patchApiExtrasWebhooksIdIndexRoute,
  patchApiExtrasWebhooksIndexRoute,
  postApiExtrasBookmarksIndexRoute,
  postApiExtrasConfigContextProfilesIdSyncIndexRoute,
  postApiExtrasConfigContextProfilesIndexRoute,
  postApiExtrasConfigContextsIdSyncIndexRoute,
  postApiExtrasConfigContextsIndexRoute,
  postApiExtrasConfigTemplatesIdRenderIndexRoute,
  postApiExtrasConfigTemplatesIdSyncIndexRoute,
  postApiExtrasConfigTemplatesIndexRoute,
  postApiExtrasCustomFieldChoiceSetsIndexRoute,
  postApiExtrasCustomFieldsIndexRoute,
  postApiExtrasCustomLinksIndexRoute,
  postApiExtrasEventRulesIndexRoute,
  postApiExtrasExportTemplatesIdSyncIndexRoute,
  postApiExtrasExportTemplatesIndexRoute,
  postApiExtrasImageAttachmentsIndexRoute,
  postApiExtrasJournalEntriesIndexRoute,
  postApiExtrasNotificationGroupsIndexRoute,
  postApiExtrasNotificationsIndexRoute,
  postApiExtrasSavedFiltersIndexRoute,
  postApiExtrasScriptsIdIndexRoute,
  postApiExtrasScriptsUploadIndexRoute,
  postApiExtrasSubscriptionsIndexRoute,
  postApiExtrasTableConfigsIndexRoute,
  postApiExtrasTagsIndexRoute,
  postApiExtrasWebhooksIndexRoute,
  putApiExtrasBookmarksIdIndexRoute,
  putApiExtrasBookmarksIndexRoute,
  putApiExtrasConfigContextProfilesIdIndexRoute,
  putApiExtrasConfigContextProfilesIndexRoute,
  putApiExtrasConfigContextsIdIndexRoute,
  putApiExtrasConfigContextsIndexRoute,
  putApiExtrasConfigTemplatesIdIndexRoute,
  putApiExtrasConfigTemplatesIndexRoute,
  putApiExtrasCustomFieldChoiceSetsIdIndexRoute,
  putApiExtrasCustomFieldChoiceSetsIndexRoute,
  putApiExtrasCustomFieldsIdIndexRoute,
  putApiExtrasCustomFieldsIndexRoute,
  putApiExtrasCustomLinksIdIndexRoute,
  putApiExtrasCustomLinksIndexRoute,
  putApiExtrasDashboardIndexRoute,
  putApiExtrasEventRulesIdIndexRoute,
  putApiExtrasEventRulesIndexRoute,
  putApiExtrasExportTemplatesIdIndexRoute,
  putApiExtrasExportTemplatesIndexRoute,
  putApiExtrasImageAttachmentsIdIndexRoute,
  putApiExtrasImageAttachmentsIndexRoute,
  putApiExtrasJournalEntriesIdIndexRoute,
  putApiExtrasJournalEntriesIndexRoute,
  putApiExtrasNotificationGroupsIdIndexRoute,
  putApiExtrasNotificationGroupsIndexRoute,
  putApiExtrasNotificationsIdIndexRoute,
  putApiExtrasNotificationsIndexRoute,
  putApiExtrasSavedFiltersIdIndexRoute,
  putApiExtrasSavedFiltersIndexRoute,
  putApiExtrasScriptsUploadIdIndexRoute,
  putApiExtrasSubscriptionsIdIndexRoute,
  putApiExtrasSubscriptionsIndexRoute,
  putApiExtrasTableConfigsIdIndexRoute,
  putApiExtrasTableConfigsIndexRoute,
  putApiExtrasTagsIdIndexRoute,
  putApiExtrasTagsIndexRoute,
  putApiExtrasWebhooksIdIndexRoute,
  putApiExtrasWebhooksIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const extrasHandler = app
  .openapi(getApiExtrasBookmarksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasBookmarksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasBookmarksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasBookmarksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasBookmarksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasBookmarksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasBookmarksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasBookmarksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasBookmarksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasConfigContextProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasConfigContextProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasConfigContextProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasConfigContextProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasConfigContextProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasConfigContextProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasConfigContextProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasConfigContextProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasConfigContextProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasConfigContextProfilesIdSyncIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasConfigContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasConfigContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasConfigContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasConfigContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasConfigContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasConfigContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasConfigContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasConfigContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasConfigContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasConfigContextsIdSyncIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasConfigTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasConfigTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasConfigTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasConfigTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasConfigTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasConfigTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasConfigTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasConfigTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasConfigTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasConfigTemplatesIdRenderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasConfigTemplatesIdSyncIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasCustomFieldChoiceSetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasCustomFieldChoiceSetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasCustomFieldChoiceSetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasCustomFieldChoiceSetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasCustomFieldChoiceSetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasCustomFieldChoiceSetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasCustomFieldChoiceSetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasCustomFieldChoiceSetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasCustomFieldChoiceSetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasCustomFieldChoiceSetsIdChoicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasCustomFieldsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasCustomFieldsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasCustomFieldsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasCustomFieldsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasCustomFieldsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasCustomFieldsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasCustomFieldsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasCustomFieldsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasCustomFieldsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasCustomLinksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasCustomLinksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasCustomLinksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasCustomLinksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasCustomLinksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasCustomLinksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasCustomLinksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasCustomLinksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasCustomLinksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasDashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasDashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasDashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasDashboardIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasEventRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasEventRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasEventRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasEventRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasEventRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasEventRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasEventRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasEventRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasEventRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasExportTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasExportTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasExportTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasExportTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasExportTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasExportTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasExportTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasExportTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasExportTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasExportTemplatesIdSyncIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasImageAttachmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasImageAttachmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasImageAttachmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasImageAttachmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasImageAttachmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasImageAttachmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasImageAttachmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasImageAttachmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasImageAttachmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasJournalEntriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasJournalEntriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasJournalEntriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasJournalEntriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasJournalEntriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasJournalEntriesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasJournalEntriesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasJournalEntriesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasJournalEntriesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasNotificationGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasNotificationGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasNotificationGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasNotificationGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasNotificationGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasNotificationGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasNotificationGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasNotificationGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasNotificationGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasNotificationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasNotificationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasNotificationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasNotificationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasNotificationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasNotificationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasNotificationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasNotificationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasNotificationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasSavedFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasSavedFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasSavedFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasSavedFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasSavedFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasSavedFiltersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasSavedFiltersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasSavedFiltersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasSavedFiltersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasScriptsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasScriptsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasScriptsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasScriptsUploadIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasScriptsUploadIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasScriptsUploadIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasSubscriptionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasSubscriptionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasSubscriptionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasSubscriptionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasSubscriptionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasSubscriptionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasSubscriptionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasSubscriptionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasSubscriptionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasTableConfigsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasTableConfigsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasTableConfigsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasTableConfigsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasTableConfigsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasTableConfigsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasTableConfigsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasTableConfigsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasTableConfigsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasTaggedObjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasTaggedObjectsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasTagsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasTagsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasTagsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasTagsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasTagsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasTagsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasTagsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasTagsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasTagsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExtrasWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasWebhooksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExtrasWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiExtrasWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExtrasWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExtrasWebhooksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
