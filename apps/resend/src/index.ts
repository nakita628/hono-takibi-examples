import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysApiKeyIdRoute,
  deleteAudiencesIdRoute,
  deleteAutomationsAutomationIdRoute,
  deleteBroadcastsIdRoute,
  deleteContactPropertiesIdRoute,
  deleteContactsContactIdSegmentsSegmentIdRoute,
  deleteContactsIdRoute,
  deleteDomainsDomainIdRoute,
  deleteEventsIdentifierRoute,
  deleteInboxesInboxIdDraftsDraftIdRoute,
  deleteInboxesInboxIdLabelsLabelIdRoute,
  deleteInboxesInboxIdRoute,
  deleteInboxesInboxIdThreadsThreadIdLabelsLabelIdRoute,
  deleteInboxesInboxIdThreadsThreadIdRoute,
  deleteOauthGrantsOauthGrantIdRoute,
  deleteSegmentsIdRoute,
  deleteSuppressionsSuppressionRoute,
  deleteTemplatesIdRoute,
  deleteTopicsIdRoute,
  deleteWebhooksWebhookIdRoute,
  getApiKeysRoute,
  getAudiencesIdRoute,
  getAudiencesRoute,
  getAutomationsAutomationIdRoute,
  getAutomationsAutomationIdRunsRoute,
  getAutomationsAutomationIdRunsRunIdRoute,
  getAutomationsRoute,
  getBroadcastsIdClickedLinksRoute,
  getBroadcastsIdRecipientsRoute,
  getBroadcastsIdRoute,
  getBroadcastsRoute,
  getContactPropertiesIdRoute,
  getContactPropertiesRoute,
  getContactsContactIdSegmentsRoute,
  getContactsContactIdTopicsRoute,
  getContactsIdRoute,
  getContactsImportsIdRoute,
  getContactsImportsRoute,
  getContactsRoute,
  getDomainsDomainIdClaimRoute,
  getDomainsDomainIdRoute,
  getDomainsRoute,
  getEmailsEmailIdAttachmentsAttachmentIdRoute,
  getEmailsEmailIdAttachmentsRoute,
  getEmailsEmailIdRoute,
  getEmailsMetricsRoute,
  getEmailsReceivingEmailIdAttachmentsAttachmentIdRoute,
  getEmailsReceivingEmailIdAttachmentsRoute,
  getEmailsReceivingEmailIdRoute,
  getEmailsReceivingRoute,
  getEmailsRoute,
  getEventsIdentifierRoute,
  getEventsRoute,
  getInboxesInboxIdAgentRoute,
  getInboxesInboxIdDraftsDraftIdRoute,
  getInboxesInboxIdDraftsRoute,
  getInboxesInboxIdLabelsRoute,
  getInboxesInboxIdRoute,
  getInboxesInboxIdThreadsRoute,
  getInboxesInboxIdThreadsSearchRoute,
  getInboxesInboxIdThreadsThreadIdEmailsEmailIdRoute,
  getInboxesInboxIdThreadsThreadIdEmailsRoute,
  getInboxesInboxIdThreadsThreadIdRoute,
  getInboxesRoute,
  getLogsLogIdRoute,
  getLogsRoute,
  getOauthGrantsRoute,
  getSegmentsIdContactsRoute,
  getSegmentsIdRoute,
  getSegmentsRoute,
  getSuppressionsRoute,
  getSuppressionsSuppressionRoute,
  getTemplatesIdRoute,
  getTemplatesRoute,
  getTopicsIdRoute,
  getTopicsRoute,
  getUsageRoute,
  getWebhooksRoute,
  getWebhooksWebhookIdEventsEventIdAttemptsRoute,
  getWebhooksWebhookIdEventsEventIdRoute,
  getWebhooksWebhookIdEventsRoute,
  getWebhooksWebhookIdRoute,
  patchApiKeysApiKeyIdRoute,
  patchAutomationsAutomationIdRoute,
  patchBroadcastsIdRoute,
  patchContactPropertiesIdRoute,
  patchContactsContactIdTopicsRoute,
  patchContactsIdRoute,
  patchDomainsDomainIdRoute,
  patchEmailsEmailIdRoute,
  patchEventsIdentifierRoute,
  patchInboxesInboxIdAgentRoute,
  patchInboxesInboxIdDraftsDraftIdRoute,
  patchInboxesInboxIdLabelsLabelIdRoute,
  patchInboxesInboxIdRoute,
  patchInboxesInboxIdThreadsThreadIdRoute,
  patchSegmentsIdRoute,
  patchTemplatesIdRoute,
  patchTopicsIdRoute,
  patchWebhooksWebhookIdRoute,
  postApiKeysRoute,
  postAudiencesRoute,
  postAutomationsAutomationIdDuplicateRoute,
  postAutomationsAutomationIdRunsRunIdCancelRoute,
  postAutomationsAutomationIdStopRoute,
  postAutomationsRoute,
  postBroadcastsIdCancelRoute,
  postBroadcastsIdDuplicateRoute,
  postBroadcastsIdSendRoute,
  postBroadcastsRoute,
  postContactPropertiesRoute,
  postContactsContactIdSegmentsSegmentIdRoute,
  postContactsImportsRoute,
  postContactsRoute,
  postDomainsClaimRoute,
  postDomainsDomainIdClaimVerifyRoute,
  postDomainsDomainIdForgeRoute,
  postDomainsDomainIdVerifyRoute,
  postDomainsRoute,
  postEmailsBatchRoute,
  postEmailsEmailIdCancelRoute,
  postEmailsEmailIdShareRoute,
  postEmailsRoute,
  postEventsRoute,
  postEventsSendRoute,
  postInboxesInboxIdDraftsDraftIdSendRoute,
  postInboxesInboxIdDraftsRoute,
  postInboxesInboxIdLabelsRoute,
  postInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardRoute,
  postInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyRoute,
  postInboxesInboxIdThreadsThreadIdLabelsRoute,
  postInboxesRoute,
  postSegmentsRoute,
  postSuppressionsBatchAddRoute,
  postSuppressionsBatchRemoveRoute,
  postSuppressionsRoute,
  postTemplatesIdDuplicateRoute,
  postTemplatesIdPublishRoute,
  postTemplatesRoute,
  postTopicsRoute,
  postWebhooksRoute,
  postWebhooksWebhookIdEventsEventIdReplayRoute,
  postWebhooksWebhookIdSigningSecretRotateRoute,
  putInboxesInboxIdThreadsThreadIdLabelsRoute,
} from './routes'
import {
  deleteApiKeysApiKeyIdRouteHandler,
  deleteAudiencesIdRouteHandler,
  deleteAutomationsAutomationIdRouteHandler,
  deleteBroadcastsIdRouteHandler,
  deleteContactPropertiesIdRouteHandler,
  deleteContactsContactIdSegmentsSegmentIdRouteHandler,
  deleteContactsIdRouteHandler,
  deleteDomainsDomainIdRouteHandler,
  deleteEventsIdentifierRouteHandler,
  deleteInboxesInboxIdDraftsDraftIdRouteHandler,
  deleteInboxesInboxIdLabelsLabelIdRouteHandler,
  deleteInboxesInboxIdRouteHandler,
  deleteInboxesInboxIdThreadsThreadIdLabelsLabelIdRouteHandler,
  deleteInboxesInboxIdThreadsThreadIdRouteHandler,
  deleteOauthGrantsOauthGrantIdRouteHandler,
  deleteSegmentsIdRouteHandler,
  deleteSuppressionsSuppressionRouteHandler,
  deleteTemplatesIdRouteHandler,
  deleteTopicsIdRouteHandler,
  deleteWebhooksWebhookIdRouteHandler,
  getApiKeysRouteHandler,
  getAudiencesIdRouteHandler,
  getAudiencesRouteHandler,
  getAutomationsAutomationIdRouteHandler,
  getAutomationsAutomationIdRunsRouteHandler,
  getAutomationsAutomationIdRunsRunIdRouteHandler,
  getAutomationsRouteHandler,
  getBroadcastsIdClickedLinksRouteHandler,
  getBroadcastsIdRecipientsRouteHandler,
  getBroadcastsIdRouteHandler,
  getBroadcastsRouteHandler,
  getContactPropertiesIdRouteHandler,
  getContactPropertiesRouteHandler,
  getContactsContactIdSegmentsRouteHandler,
  getContactsContactIdTopicsRouteHandler,
  getContactsIdRouteHandler,
  getContactsImportsIdRouteHandler,
  getContactsImportsRouteHandler,
  getContactsRouteHandler,
  getDomainsDomainIdClaimRouteHandler,
  getDomainsDomainIdRouteHandler,
  getDomainsRouteHandler,
  getEmailsEmailIdAttachmentsAttachmentIdRouteHandler,
  getEmailsEmailIdAttachmentsRouteHandler,
  getEmailsEmailIdRouteHandler,
  getEmailsMetricsRouteHandler,
  getEmailsReceivingEmailIdAttachmentsAttachmentIdRouteHandler,
  getEmailsReceivingEmailIdAttachmentsRouteHandler,
  getEmailsReceivingEmailIdRouteHandler,
  getEmailsReceivingRouteHandler,
  getEmailsRouteHandler,
  getEventsIdentifierRouteHandler,
  getEventsRouteHandler,
  getInboxesInboxIdAgentRouteHandler,
  getInboxesInboxIdDraftsDraftIdRouteHandler,
  getInboxesInboxIdDraftsRouteHandler,
  getInboxesInboxIdLabelsRouteHandler,
  getInboxesInboxIdRouteHandler,
  getInboxesInboxIdThreadsRouteHandler,
  getInboxesInboxIdThreadsSearchRouteHandler,
  getInboxesInboxIdThreadsThreadIdEmailsEmailIdRouteHandler,
  getInboxesInboxIdThreadsThreadIdEmailsRouteHandler,
  getInboxesInboxIdThreadsThreadIdRouteHandler,
  getInboxesRouteHandler,
  getLogsLogIdRouteHandler,
  getLogsRouteHandler,
  getOauthGrantsRouteHandler,
  getSegmentsIdContactsRouteHandler,
  getSegmentsIdRouteHandler,
  getSegmentsRouteHandler,
  getSuppressionsRouteHandler,
  getSuppressionsSuppressionRouteHandler,
  getTemplatesIdRouteHandler,
  getTemplatesRouteHandler,
  getTopicsIdRouteHandler,
  getTopicsRouteHandler,
  getUsageRouteHandler,
  getWebhooksRouteHandler,
  getWebhooksWebhookIdEventsEventIdAttemptsRouteHandler,
  getWebhooksWebhookIdEventsEventIdRouteHandler,
  getWebhooksWebhookIdEventsRouteHandler,
  getWebhooksWebhookIdRouteHandler,
  patchApiKeysApiKeyIdRouteHandler,
  patchAutomationsAutomationIdRouteHandler,
  patchBroadcastsIdRouteHandler,
  patchContactPropertiesIdRouteHandler,
  patchContactsContactIdTopicsRouteHandler,
  patchContactsIdRouteHandler,
  patchDomainsDomainIdRouteHandler,
  patchEmailsEmailIdRouteHandler,
  patchEventsIdentifierRouteHandler,
  patchInboxesInboxIdAgentRouteHandler,
  patchInboxesInboxIdDraftsDraftIdRouteHandler,
  patchInboxesInboxIdLabelsLabelIdRouteHandler,
  patchInboxesInboxIdRouteHandler,
  patchInboxesInboxIdThreadsThreadIdRouteHandler,
  patchSegmentsIdRouteHandler,
  patchTemplatesIdRouteHandler,
  patchTopicsIdRouteHandler,
  patchWebhooksWebhookIdRouteHandler,
  postApiKeysRouteHandler,
  postAudiencesRouteHandler,
  postAutomationsAutomationIdDuplicateRouteHandler,
  postAutomationsAutomationIdRunsRunIdCancelRouteHandler,
  postAutomationsAutomationIdStopRouteHandler,
  postAutomationsRouteHandler,
  postBroadcastsIdCancelRouteHandler,
  postBroadcastsIdDuplicateRouteHandler,
  postBroadcastsIdSendRouteHandler,
  postBroadcastsRouteHandler,
  postContactPropertiesRouteHandler,
  postContactsContactIdSegmentsSegmentIdRouteHandler,
  postContactsImportsRouteHandler,
  postContactsRouteHandler,
  postDomainsClaimRouteHandler,
  postDomainsDomainIdClaimVerifyRouteHandler,
  postDomainsDomainIdForgeRouteHandler,
  postDomainsDomainIdVerifyRouteHandler,
  postDomainsRouteHandler,
  postEmailsBatchRouteHandler,
  postEmailsEmailIdCancelRouteHandler,
  postEmailsEmailIdShareRouteHandler,
  postEmailsRouteHandler,
  postEventsRouteHandler,
  postEventsSendRouteHandler,
  postInboxesInboxIdDraftsDraftIdSendRouteHandler,
  postInboxesInboxIdDraftsRouteHandler,
  postInboxesInboxIdLabelsRouteHandler,
  postInboxesInboxIdThreadsThreadIdEmailsEmailIdForwardRouteHandler,
  postInboxesInboxIdThreadsThreadIdEmailsEmailIdReplyRouteHandler,
  postInboxesInboxIdThreadsThreadIdLabelsRouteHandler,
  postInboxesRouteHandler,
  postSegmentsRouteHandler,
  postSuppressionsBatchAddRouteHandler,
  postSuppressionsBatchRemoveRouteHandler,
  postSuppressionsRouteHandler,
  postTemplatesIdDuplicateRouteHandler,
  postTemplatesIdPublishRouteHandler,
  postTemplatesRouteHandler,
  postTopicsRouteHandler,
  postWebhooksRouteHandler,
  postWebhooksWebhookIdEventsEventIdReplayRouteHandler,
  postWebhooksWebhookIdSigningSecretRotateRouteHandler,
  putInboxesInboxIdThreadsThreadIdLabelsRouteHandler,
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
