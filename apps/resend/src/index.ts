import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postEmailsRoute,
  getEmailsRoute,
  getEmailsEmailIdRoute,
  patchEmailsEmailIdRoute,
  postEmailsEmailIdCancelRoute,
  postEmailsEmailIdShareRoute,
  postEmailsBatchRoute,
  getEmailsEmailIdAttachmentsRoute,
  getEmailsEmailIdAttachmentsAttachmentIdRoute,
  getEmailsReceivingRoute,
  getEmailsReceivingEmailIdRoute,
  getEmailsReceivingEmailIdAttachmentsRoute,
  getEmailsReceivingEmailIdAttachmentsAttachmentIdRoute,
  getEmailsMetricsRoute,
  postDomainsRoute,
  getDomainsRoute,
  getDomainsDomainIdRoute,
  patchDomainsDomainIdRoute,
  deleteDomainsDomainIdRoute,
  postDomainsDomainIdVerifyRoute,
  postDomainsDomainIdForgeRoute,
  postDomainsClaimRoute,
  getDomainsDomainIdClaimRoute,
  postDomainsDomainIdClaimVerifyRoute,
  postApiKeysRoute,
  getApiKeysRoute,
  patchApiKeysApiKeyIdRoute,
  deleteApiKeysApiKeyIdRoute,
  getOauthGrantsRoute,
  deleteOauthGrantsOauthGrantIdRoute,
  postTemplatesRoute,
  getTemplatesRoute,
  getTemplatesIdRoute,
  patchTemplatesIdRoute,
  deleteTemplatesIdRoute,
  postTemplatesIdPublishRoute,
  postTemplatesIdDuplicateRoute,
  postAudiencesRoute,
  getAudiencesRoute,
  deleteAudiencesIdRoute,
  getAudiencesIdRoute,
  postContactsRoute,
  getContactsRoute,
  postContactsImportsRoute,
  getContactsImportsRoute,
  getContactsImportsIdRoute,
  getContactsIdRoute,
  patchContactsIdRoute,
  deleteContactsIdRoute,
  postBroadcastsRoute,
  getBroadcastsRoute,
  deleteBroadcastsIdRoute,
  getBroadcastsIdRoute,
  patchBroadcastsIdRoute,
  postBroadcastsIdSendRoute,
  postBroadcastsIdCancelRoute,
  postBroadcastsIdDuplicateRoute,
  getBroadcastsIdRecipientsRoute,
  getBroadcastsIdClickedLinksRoute,
  postWebhooksRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdRoute,
  patchWebhooksWebhookIdRoute,
  deleteWebhooksWebhookIdRoute,
  postWebhooksWebhookIdSigningSecretRotateRoute,
  getWebhooksWebhookIdEventsRoute,
  getWebhooksWebhookIdEventsEventIdRoute,
  postWebhooksWebhookIdEventsEventIdReplayRoute,
  getWebhooksWebhookIdEventsEventIdAttemptsRoute,
  postSegmentsRoute,
  getSegmentsRoute,
  getSegmentsIdRoute,
  patchSegmentsIdRoute,
  deleteSegmentsIdRoute,
  getSegmentsIdContactsRoute,
  postTopicsRoute,
  getTopicsRoute,
  getTopicsIdRoute,
  patchTopicsIdRoute,
  deleteTopicsIdRoute,
  postContactPropertiesRoute,
  getContactPropertiesRoute,
  getContactPropertiesIdRoute,
  patchContactPropertiesIdRoute,
  deleteContactPropertiesIdRoute,
  getContactsContactIdSegmentsRoute,
  postContactsContactIdSegmentsSegmentIdRoute,
  deleteContactsContactIdSegmentsSegmentIdRoute,
  getContactsContactIdTopicsRoute,
  patchContactsContactIdTopicsRoute,
  getLogsRoute,
  getLogsLogIdRoute,
  postAutomationsRoute,
  getAutomationsRoute,
  getAutomationsAutomationIdRoute,
  patchAutomationsAutomationIdRoute,
  deleteAutomationsAutomationIdRoute,
  postAutomationsAutomationIdDuplicateRoute,
  postAutomationsAutomationIdStopRoute,
  getAutomationsAutomationIdRunsRoute,
  getAutomationsAutomationIdRunsRunIdRoute,
  postAutomationsAutomationIdRunsRunIdCancelRoute,
  postEventsRoute,
  getEventsRoute,
  postEventsSendRoute,
  getEventsIdentifierRoute,
  patchEventsIdentifierRoute,
  deleteEventsIdentifierRoute,
  postSuppressionsRoute,
  getSuppressionsRoute,
  postSuppressionsBatchAddRoute,
  postSuppressionsBatchRemoveRoute,
  getSuppressionsSuppressionRoute,
  deleteSuppressionsSuppressionRoute,
  getUsageRoute,
  postInboxesRoute,
  getInboxesRoute,
  getInboxesInboxIdRoute,
  patchInboxesInboxIdRoute,
  deleteInboxesInboxIdRoute,
  getInboxesInboxIdAgentRoute,
  patchInboxesInboxIdAgentRoute,
  getInboxesInboxIdLabelsRoute,
  postInboxesInboxIdLabelsRoute,
  patchInboxesInboxIdLabelsLabelIdRoute,
  deleteInboxesInboxIdLabelsLabelIdRoute,
  getInboxesInboxIdThreadsRoute,
  getInboxesInboxIdThreadsSearchRoute,
  getInboxesInboxIdThreadsThreadIdRoute,
  patchInboxesInboxIdThreadsThreadIdRoute,
  deleteInboxesInboxIdThreadsThreadIdRoute,
  postInboxesInboxIdThreadsThreadIdLabelsRoute,
  putInboxesInboxIdThreadsThreadIdLabelsRoute,
  deleteInboxesInboxIdThreadsThreadIdLabelsLabelIdRoute,
  getInboxesInboxIdThreadsThreadIdEmailsRoute,
  getInboxesInboxIdThreadsThreadIdEmailsEmailIdRoute,
  postInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyRoute,
  postInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardRoute,
  getInboxesInboxIdDraftsRoute,
  postInboxesInboxIdDraftsRoute,
  getInboxesInboxIdDraftsDraftIdRoute,
  patchInboxesInboxIdDraftsDraftIdRoute,
  deleteInboxesInboxIdDraftsDraftIdRoute,
  postInboxesInboxIdDraftsDraftIdSendRoute,
} from './routes'
import {
  postEmailsRouteHandler,
  getEmailsRouteHandler,
  getEmailsEmailIdRouteHandler,
  patchEmailsEmailIdRouteHandler,
  postEmailsEmailIdCancelRouteHandler,
  postEmailsEmailIdShareRouteHandler,
  postEmailsBatchRouteHandler,
  getEmailsEmailIdAttachmentsRouteHandler,
  getEmailsEmailIdAttachmentsAttachmentIdRouteHandler,
  getEmailsReceivingRouteHandler,
  getEmailsReceivingEmailIdRouteHandler,
  getEmailsReceivingEmailIdAttachmentsRouteHandler,
  getEmailsReceivingEmailIdAttachmentsAttachmentIdRouteHandler,
  getEmailsMetricsRouteHandler,
  postDomainsRouteHandler,
  getDomainsRouteHandler,
  getDomainsDomainIdRouteHandler,
  patchDomainsDomainIdRouteHandler,
  deleteDomainsDomainIdRouteHandler,
  postDomainsDomainIdVerifyRouteHandler,
  postDomainsDomainIdForgeRouteHandler,
  postDomainsClaimRouteHandler,
  getDomainsDomainIdClaimRouteHandler,
  postDomainsDomainIdClaimVerifyRouteHandler,
  postApiKeysRouteHandler,
  getApiKeysRouteHandler,
  patchApiKeysApiKeyIdRouteHandler,
  deleteApiKeysApiKeyIdRouteHandler,
  getOauthGrantsRouteHandler,
  deleteOauthGrantsOauthGrantIdRouteHandler,
  postTemplatesRouteHandler,
  getTemplatesRouteHandler,
  getTemplatesIdRouteHandler,
  patchTemplatesIdRouteHandler,
  deleteTemplatesIdRouteHandler,
  postTemplatesIdPublishRouteHandler,
  postTemplatesIdDuplicateRouteHandler,
  postAudiencesRouteHandler,
  getAudiencesRouteHandler,
  deleteAudiencesIdRouteHandler,
  getAudiencesIdRouteHandler,
  postContactsRouteHandler,
  getContactsRouteHandler,
  postContactsImportsRouteHandler,
  getContactsImportsRouteHandler,
  getContactsImportsIdRouteHandler,
  getContactsIdRouteHandler,
  patchContactsIdRouteHandler,
  deleteContactsIdRouteHandler,
  postBroadcastsRouteHandler,
  getBroadcastsRouteHandler,
  deleteBroadcastsIdRouteHandler,
  getBroadcastsIdRouteHandler,
  patchBroadcastsIdRouteHandler,
  postBroadcastsIdSendRouteHandler,
  postBroadcastsIdCancelRouteHandler,
  postBroadcastsIdDuplicateRouteHandler,
  getBroadcastsIdRecipientsRouteHandler,
  getBroadcastsIdClickedLinksRouteHandler,
  postWebhooksRouteHandler,
  getWebhooksRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  patchWebhooksWebhookIdRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  postWebhooksWebhookIdSigningSecretRotateRouteHandler,
  getWebhooksWebhookIdEventsRouteHandler,
  getWebhooksWebhookIdEventsEventIdRouteHandler,
  postWebhooksWebhookIdEventsEventIdReplayRouteHandler,
  getWebhooksWebhookIdEventsEventIdAttemptsRouteHandler,
  postSegmentsRouteHandler,
  getSegmentsRouteHandler,
  getSegmentsIdRouteHandler,
  patchSegmentsIdRouteHandler,
  deleteSegmentsIdRouteHandler,
  getSegmentsIdContactsRouteHandler,
  postTopicsRouteHandler,
  getTopicsRouteHandler,
  getTopicsIdRouteHandler,
  patchTopicsIdRouteHandler,
  deleteTopicsIdRouteHandler,
  postContactPropertiesRouteHandler,
  getContactPropertiesRouteHandler,
  getContactPropertiesIdRouteHandler,
  patchContactPropertiesIdRouteHandler,
  deleteContactPropertiesIdRouteHandler,
  getContactsContactIdSegmentsRouteHandler,
  postContactsContactIdSegmentsSegmentIdRouteHandler,
  deleteContactsContactIdSegmentsSegmentIdRouteHandler,
  getContactsContactIdTopicsRouteHandler,
  patchContactsContactIdTopicsRouteHandler,
  getLogsRouteHandler,
  getLogsLogIdRouteHandler,
  postAutomationsRouteHandler,
  getAutomationsRouteHandler,
  getAutomationsAutomationIdRouteHandler,
  patchAutomationsAutomationIdRouteHandler,
  deleteAutomationsAutomationIdRouteHandler,
  postAutomationsAutomationIdDuplicateRouteHandler,
  postAutomationsAutomationIdStopRouteHandler,
  getAutomationsAutomationIdRunsRouteHandler,
  getAutomationsAutomationIdRunsRunIdRouteHandler,
  postAutomationsAutomationIdRunsRunIdCancelRouteHandler,
  postEventsRouteHandler,
  getEventsRouteHandler,
  postEventsSendRouteHandler,
  getEventsIdentifierRouteHandler,
  patchEventsIdentifierRouteHandler,
  deleteEventsIdentifierRouteHandler,
  postSuppressionsRouteHandler,
  getSuppressionsRouteHandler,
  postSuppressionsBatchAddRouteHandler,
  postSuppressionsBatchRemoveRouteHandler,
  getSuppressionsSuppressionRouteHandler,
  deleteSuppressionsSuppressionRouteHandler,
  getUsageRouteHandler,
  postInboxesRouteHandler,
  getInboxesRouteHandler,
  getInboxesInboxIdRouteHandler,
  patchInboxesInboxIdRouteHandler,
  deleteInboxesInboxIdRouteHandler,
  getInboxesInboxIdAgentRouteHandler,
  patchInboxesInboxIdAgentRouteHandler,
  getInboxesInboxIdLabelsRouteHandler,
  postInboxesInboxIdLabelsRouteHandler,
  patchInboxesInboxIdLabelsLabelIdRouteHandler,
  deleteInboxesInboxIdLabelsLabelIdRouteHandler,
  getInboxesInboxIdThreadsRouteHandler,
  getInboxesInboxIdThreadsSearchRouteHandler,
  getInboxesInboxIdThreadsThreadIdRouteHandler,
  patchInboxesInboxIdThreadsThreadIdRouteHandler,
  deleteInboxesInboxIdThreadsThreadIdRouteHandler,
  postInboxesInboxIdThreadsThreadIdLabelsRouteHandler,
  putInboxesInboxIdThreadsThreadIdLabelsRouteHandler,
  deleteInboxesInboxIdThreadsThreadIdLabelsLabelIdRouteHandler,
  getInboxesInboxIdThreadsThreadIdEmailsRouteHandler,
  getInboxesInboxIdThreadsThreadIdEmailsEmailIdRouteHandler,
  postInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyRouteHandler,
  postInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardRouteHandler,
  getInboxesInboxIdDraftsRouteHandler,
  postInboxesInboxIdDraftsRouteHandler,
  getInboxesInboxIdDraftsDraftIdRouteHandler,
  patchInboxesInboxIdDraftsDraftIdRouteHandler,
  deleteInboxesInboxIdDraftsDraftIdRouteHandler,
  postInboxesInboxIdDraftsDraftIdSendRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postEmailsRoute, postEmailsRouteHandler)
  .openapi(getEmailsRoute, getEmailsRouteHandler)
  .openapi(getEmailsEmailIdRoute, getEmailsEmailIdRouteHandler)
  .openapi(patchEmailsEmailIdRoute, patchEmailsEmailIdRouteHandler)
  .openapi(postEmailsEmailIdCancelRoute, postEmailsEmailIdCancelRouteHandler)
  .openapi(postEmailsEmailIdShareRoute, postEmailsEmailIdShareRouteHandler)
  .openapi(postEmailsBatchRoute, postEmailsBatchRouteHandler)
  .openapi(getEmailsEmailIdAttachmentsRoute, getEmailsEmailIdAttachmentsRouteHandler)
  .openapi(
    getEmailsEmailIdAttachmentsAttachmentIdRoute,
    getEmailsEmailIdAttachmentsAttachmentIdRouteHandler,
  )
  .openapi(getEmailsReceivingRoute, getEmailsReceivingRouteHandler)
  .openapi(getEmailsReceivingEmailIdRoute, getEmailsReceivingEmailIdRouteHandler)
  .openapi(
    getEmailsReceivingEmailIdAttachmentsRoute,
    getEmailsReceivingEmailIdAttachmentsRouteHandler,
  )
  .openapi(
    getEmailsReceivingEmailIdAttachmentsAttachmentIdRoute,
    getEmailsReceivingEmailIdAttachmentsAttachmentIdRouteHandler,
  )
  .openapi(getEmailsMetricsRoute, getEmailsMetricsRouteHandler)
  .openapi(postDomainsRoute, postDomainsRouteHandler)
  .openapi(getDomainsRoute, getDomainsRouteHandler)
  .openapi(getDomainsDomainIdRoute, getDomainsDomainIdRouteHandler)
  .openapi(patchDomainsDomainIdRoute, patchDomainsDomainIdRouteHandler)
  .openapi(deleteDomainsDomainIdRoute, deleteDomainsDomainIdRouteHandler)
  .openapi(postDomainsDomainIdVerifyRoute, postDomainsDomainIdVerifyRouteHandler)
  .openapi(postDomainsDomainIdForgeRoute, postDomainsDomainIdForgeRouteHandler)
  .openapi(postDomainsClaimRoute, postDomainsClaimRouteHandler)
  .openapi(getDomainsDomainIdClaimRoute, getDomainsDomainIdClaimRouteHandler)
  .openapi(postDomainsDomainIdClaimVerifyRoute, postDomainsDomainIdClaimVerifyRouteHandler)
  .openapi(postApiKeysRoute, postApiKeysRouteHandler)
  .openapi(getApiKeysRoute, getApiKeysRouteHandler)
  .openapi(patchApiKeysApiKeyIdRoute, patchApiKeysApiKeyIdRouteHandler)
  .openapi(deleteApiKeysApiKeyIdRoute, deleteApiKeysApiKeyIdRouteHandler)
  .openapi(getOauthGrantsRoute, getOauthGrantsRouteHandler)
  .openapi(deleteOauthGrantsOauthGrantIdRoute, deleteOauthGrantsOauthGrantIdRouteHandler)
  .openapi(postTemplatesRoute, postTemplatesRouteHandler)
  .openapi(getTemplatesRoute, getTemplatesRouteHandler)
  .openapi(getTemplatesIdRoute, getTemplatesIdRouteHandler)
  .openapi(patchTemplatesIdRoute, patchTemplatesIdRouteHandler)
  .openapi(deleteTemplatesIdRoute, deleteTemplatesIdRouteHandler)
  .openapi(postTemplatesIdPublishRoute, postTemplatesIdPublishRouteHandler)
  .openapi(postTemplatesIdDuplicateRoute, postTemplatesIdDuplicateRouteHandler)
  .openapi(postAudiencesRoute, postAudiencesRouteHandler)
  .openapi(getAudiencesRoute, getAudiencesRouteHandler)
  .openapi(deleteAudiencesIdRoute, deleteAudiencesIdRouteHandler)
  .openapi(getAudiencesIdRoute, getAudiencesIdRouteHandler)
  .openapi(postContactsRoute, postContactsRouteHandler)
  .openapi(getContactsRoute, getContactsRouteHandler)
  .openapi(postContactsImportsRoute, postContactsImportsRouteHandler)
  .openapi(getContactsImportsRoute, getContactsImportsRouteHandler)
  .openapi(getContactsImportsIdRoute, getContactsImportsIdRouteHandler)
  .openapi(getContactsIdRoute, getContactsIdRouteHandler)
  .openapi(patchContactsIdRoute, patchContactsIdRouteHandler)
  .openapi(deleteContactsIdRoute, deleteContactsIdRouteHandler)
  .openapi(postBroadcastsRoute, postBroadcastsRouteHandler)
  .openapi(getBroadcastsRoute, getBroadcastsRouteHandler)
  .openapi(deleteBroadcastsIdRoute, deleteBroadcastsIdRouteHandler)
  .openapi(getBroadcastsIdRoute, getBroadcastsIdRouteHandler)
  .openapi(patchBroadcastsIdRoute, patchBroadcastsIdRouteHandler)
  .openapi(postBroadcastsIdSendRoute, postBroadcastsIdSendRouteHandler)
  .openapi(postBroadcastsIdCancelRoute, postBroadcastsIdCancelRouteHandler)
  .openapi(postBroadcastsIdDuplicateRoute, postBroadcastsIdDuplicateRouteHandler)
  .openapi(getBroadcastsIdRecipientsRoute, getBroadcastsIdRecipientsRouteHandler)
  .openapi(getBroadcastsIdClickedLinksRoute, getBroadcastsIdClickedLinksRouteHandler)
  .openapi(postWebhooksRoute, postWebhooksRouteHandler)
  .openapi(getWebhooksRoute, getWebhooksRouteHandler)
  .openapi(getWebhooksWebhookIdRoute, getWebhooksWebhookIdRouteHandler)
  .openapi(patchWebhooksWebhookIdRoute, patchWebhooksWebhookIdRouteHandler)
  .openapi(deleteWebhooksWebhookIdRoute, deleteWebhooksWebhookIdRouteHandler)
  .openapi(
    postWebhooksWebhookIdSigningSecretRotateRoute,
    postWebhooksWebhookIdSigningSecretRotateRouteHandler,
  )
  .openapi(getWebhooksWebhookIdEventsRoute, getWebhooksWebhookIdEventsRouteHandler)
  .openapi(getWebhooksWebhookIdEventsEventIdRoute, getWebhooksWebhookIdEventsEventIdRouteHandler)
  .openapi(
    postWebhooksWebhookIdEventsEventIdReplayRoute,
    postWebhooksWebhookIdEventsEventIdReplayRouteHandler,
  )
  .openapi(
    getWebhooksWebhookIdEventsEventIdAttemptsRoute,
    getWebhooksWebhookIdEventsEventIdAttemptsRouteHandler,
  )
  .openapi(postSegmentsRoute, postSegmentsRouteHandler)
  .openapi(getSegmentsRoute, getSegmentsRouteHandler)
  .openapi(getSegmentsIdRoute, getSegmentsIdRouteHandler)
  .openapi(patchSegmentsIdRoute, patchSegmentsIdRouteHandler)
  .openapi(deleteSegmentsIdRoute, deleteSegmentsIdRouteHandler)
  .openapi(getSegmentsIdContactsRoute, getSegmentsIdContactsRouteHandler)
  .openapi(postTopicsRoute, postTopicsRouteHandler)
  .openapi(getTopicsRoute, getTopicsRouteHandler)
  .openapi(getTopicsIdRoute, getTopicsIdRouteHandler)
  .openapi(patchTopicsIdRoute, patchTopicsIdRouteHandler)
  .openapi(deleteTopicsIdRoute, deleteTopicsIdRouteHandler)
  .openapi(postContactPropertiesRoute, postContactPropertiesRouteHandler)
  .openapi(getContactPropertiesRoute, getContactPropertiesRouteHandler)
  .openapi(getContactPropertiesIdRoute, getContactPropertiesIdRouteHandler)
  .openapi(patchContactPropertiesIdRoute, patchContactPropertiesIdRouteHandler)
  .openapi(deleteContactPropertiesIdRoute, deleteContactPropertiesIdRouteHandler)
  .openapi(getContactsContactIdSegmentsRoute, getContactsContactIdSegmentsRouteHandler)
  .openapi(
    postContactsContactIdSegmentsSegmentIdRoute,
    postContactsContactIdSegmentsSegmentIdRouteHandler,
  )
  .openapi(
    deleteContactsContactIdSegmentsSegmentIdRoute,
    deleteContactsContactIdSegmentsSegmentIdRouteHandler,
  )
  .openapi(getContactsContactIdTopicsRoute, getContactsContactIdTopicsRouteHandler)
  .openapi(patchContactsContactIdTopicsRoute, patchContactsContactIdTopicsRouteHandler)
  .openapi(getLogsRoute, getLogsRouteHandler)
  .openapi(getLogsLogIdRoute, getLogsLogIdRouteHandler)
  .openapi(postAutomationsRoute, postAutomationsRouteHandler)
  .openapi(getAutomationsRoute, getAutomationsRouteHandler)
  .openapi(getAutomationsAutomationIdRoute, getAutomationsAutomationIdRouteHandler)
  .openapi(patchAutomationsAutomationIdRoute, patchAutomationsAutomationIdRouteHandler)
  .openapi(deleteAutomationsAutomationIdRoute, deleteAutomationsAutomationIdRouteHandler)
  .openapi(
    postAutomationsAutomationIdDuplicateRoute,
    postAutomationsAutomationIdDuplicateRouteHandler,
  )
  .openapi(postAutomationsAutomationIdStopRoute, postAutomationsAutomationIdStopRouteHandler)
  .openapi(getAutomationsAutomationIdRunsRoute, getAutomationsAutomationIdRunsRouteHandler)
  .openapi(
    getAutomationsAutomationIdRunsRunIdRoute,
    getAutomationsAutomationIdRunsRunIdRouteHandler,
  )
  .openapi(
    postAutomationsAutomationIdRunsRunIdCancelRoute,
    postAutomationsAutomationIdRunsRunIdCancelRouteHandler,
  )
  .openapi(postEventsRoute, postEventsRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(postEventsSendRoute, postEventsSendRouteHandler)
  .openapi(getEventsIdentifierRoute, getEventsIdentifierRouteHandler)
  .openapi(patchEventsIdentifierRoute, patchEventsIdentifierRouteHandler)
  .openapi(deleteEventsIdentifierRoute, deleteEventsIdentifierRouteHandler)
  .openapi(postSuppressionsRoute, postSuppressionsRouteHandler)
  .openapi(getSuppressionsRoute, getSuppressionsRouteHandler)
  .openapi(postSuppressionsBatchAddRoute, postSuppressionsBatchAddRouteHandler)
  .openapi(postSuppressionsBatchRemoveRoute, postSuppressionsBatchRemoveRouteHandler)
  .openapi(getSuppressionsSuppressionRoute, getSuppressionsSuppressionRouteHandler)
  .openapi(deleteSuppressionsSuppressionRoute, deleteSuppressionsSuppressionRouteHandler)
  .openapi(getUsageRoute, getUsageRouteHandler)
  .openapi(postInboxesRoute, postInboxesRouteHandler)
  .openapi(getInboxesRoute, getInboxesRouteHandler)
  .openapi(getInboxesInboxIdRoute, getInboxesInboxIdRouteHandler)
  .openapi(patchInboxesInboxIdRoute, patchInboxesInboxIdRouteHandler)
  .openapi(deleteInboxesInboxIdRoute, deleteInboxesInboxIdRouteHandler)
  .openapi(getInboxesInboxIdAgentRoute, getInboxesInboxIdAgentRouteHandler)
  .openapi(patchInboxesInboxIdAgentRoute, patchInboxesInboxIdAgentRouteHandler)
  .openapi(getInboxesInboxIdLabelsRoute, getInboxesInboxIdLabelsRouteHandler)
  .openapi(postInboxesInboxIdLabelsRoute, postInboxesInboxIdLabelsRouteHandler)
  .openapi(patchInboxesInboxIdLabelsLabelIdRoute, patchInboxesInboxIdLabelsLabelIdRouteHandler)
  .openapi(deleteInboxesInboxIdLabelsLabelIdRoute, deleteInboxesInboxIdLabelsLabelIdRouteHandler)
  .openapi(getInboxesInboxIdThreadsRoute, getInboxesInboxIdThreadsRouteHandler)
  .openapi(getInboxesInboxIdThreadsSearchRoute, getInboxesInboxIdThreadsSearchRouteHandler)
  .openapi(getInboxesInboxIdThreadsThreadIdRoute, getInboxesInboxIdThreadsThreadIdRouteHandler)
  .openapi(patchInboxesInboxIdThreadsThreadIdRoute, patchInboxesInboxIdThreadsThreadIdRouteHandler)
  .openapi(
    deleteInboxesInboxIdThreadsThreadIdRoute,
    deleteInboxesInboxIdThreadsThreadIdRouteHandler,
  )
  .openapi(
    postInboxesInboxIdThreadsThreadIdLabelsRoute,
    postInboxesInboxIdThreadsThreadIdLabelsRouteHandler,
  )
  .openapi(
    putInboxesInboxIdThreadsThreadIdLabelsRoute,
    putInboxesInboxIdThreadsThreadIdLabelsRouteHandler,
  )
  .openapi(
    deleteInboxesInboxIdThreadsThreadIdLabelsLabelIdRoute,
    deleteInboxesInboxIdThreadsThreadIdLabelsLabelIdRouteHandler,
  )
  .openapi(
    getInboxesInboxIdThreadsThreadIdEmailsRoute,
    getInboxesInboxIdThreadsThreadIdEmailsRouteHandler,
  )
  .openapi(
    getInboxesInboxIdThreadsThreadIdEmailsEmailIdRoute,
    getInboxesInboxIdThreadsThreadIdEmailsEmailIdRouteHandler,
  )
  .openapi(
    postInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyRoute,
    postInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyRouteHandler,
  )
  .openapi(
    postInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardRoute,
    postInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardRouteHandler,
  )
  .openapi(getInboxesInboxIdDraftsRoute, getInboxesInboxIdDraftsRouteHandler)
  .openapi(postInboxesInboxIdDraftsRoute, postInboxesInboxIdDraftsRouteHandler)
  .openapi(getInboxesInboxIdDraftsDraftIdRoute, getInboxesInboxIdDraftsDraftIdRouteHandler)
  .openapi(patchInboxesInboxIdDraftsDraftIdRoute, patchInboxesInboxIdDraftsDraftIdRouteHandler)
  .openapi(deleteInboxesInboxIdDraftsDraftIdRoute, deleteInboxesInboxIdDraftsDraftIdRouteHandler)
  .openapi(
    postInboxesInboxIdDraftsDraftIdSendRoute,
    postInboxesInboxIdDraftsDraftIdSendRouteHandler,
  )

export default app
