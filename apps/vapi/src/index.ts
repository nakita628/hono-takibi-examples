import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssistantIdRoute,
  deleteCallIdRoute,
  deleteCampaignIdRoute,
  deleteChatIdRoute,
  deleteEvalIdRoute,
  deleteEvalRunIdRoute,
  deleteEvalSimulationIdRoute,
  deleteEvalSimulationPersonalityIdRoute,
  deleteEvalSimulationScenarioIdRoute,
  deleteEvalSimulationSuiteIdRoute,
  deleteFileIdRoute,
  deleteObservabilityScorecardIdRoute,
  deletePhoneNumberIdRoute,
  deleteProviderProviderResourceNameIdRoute,
  deleteReportingBoardIdRoute,
  deleteReportingInsightIdRoute,
  deleteSessionIdRoute,
  deleteSquadIdRoute,
  deleteStructuredOutputIdRoute,
  deleteToolIdRoute,
  deleteV2CampaignIdRoute,
  deleteV2KnowledgeBaseIdFileFileIdRoute,
  deleteV2KnowledgeBaseIdRoute,
  getAssistantIdRoute,
  getAssistantRoute,
  getCallIdAssistantRecordingRoute,
  getCallIdCallLogsRoute,
  getCallIdCustomerRecordingRoute,
  getCallIdMonoRecordingRoute,
  getCallIdPcapRoute,
  getCallIdRoute,
  getCallIdStereoRecordingRoute,
  getCallIdVideoRecordingRoute,
  getCallRoute,
  getCampaignIdRoute,
  getCampaignRoute,
  getChatIdRoute,
  getChatRoute,
  getEvalIdRoute,
  getEvalRoute,
  getEvalRunIdRoute,
  getEvalRunRoute,
  getEvalSimulationConcurrencyRoute,
  getEvalSimulationIdRoute,
  getEvalSimulationPersonalityIdRoute,
  getEvalSimulationPersonalityRoute,
  getEvalSimulationRoute,
  getEvalSimulationRunIdItemItemIdRoute,
  getEvalSimulationRunIdItemRoute,
  getEvalSimulationRunIdRoute,
  getEvalSimulationRunRoute,
  getEvalSimulationScenarioIdRoute,
  getEvalSimulationScenarioRoute,
  getEvalSimulationSuiteIdRoute,
  getEvalSimulationSuiteRoute,
  getFileIdRoute,
  getFileRoute,
  getObservabilityScorecardIdRoute,
  getObservabilityScorecardRoute,
  getPhoneNumberIdRoute,
  getPhoneNumberRoute,
  getProviderProviderResourceNameIdRoute,
  getProviderProviderResourceNameRoute,
  getReportingBoardDefaultMetricsOverviewRoute,
  getReportingBoardIdRoute,
  getReportingBoardRoute,
  getReportingInsightIdRoute,
  getReportingInsightRoute,
  getSessionIdRoute,
  getSessionRoute,
  getSquadIdRoute,
  getSquadRoute,
  getStructuredOutputIdRoute,
  getStructuredOutputRoute,
  getToolIdRoute,
  getToolRoute,
  getTrafficAllocationsIdRoute,
  getTrafficAllocationsLatestRoute,
  getTrafficAllocationsMetricsRoute,
  getTrafficAllocationsRoute,
  getV2CampaignIdContactsRoute,
  getV2CampaignIdRoute,
  getV2CampaignRoute,
  getV2KnowledgeBaseIdFileRoute,
  getV2KnowledgeBaseIdRoute,
  getV2KnowledgeBaseRoute,
  getV2PhoneNumberRoute,
  patchAssistantIdRoute,
  patchCallIdRoute,
  patchCampaignIdRoute,
  patchEvalIdRoute,
  patchEvalSimulationIdRoute,
  patchEvalSimulationOnboardingSuiteSuiteIdRoute,
  patchEvalSimulationPersonalityIdRoute,
  patchEvalSimulationRunIdItemItemIdRoute,
  patchEvalSimulationRunIdRoute,
  patchEvalSimulationScenarioIdRoute,
  patchEvalSimulationSuiteIdRoute,
  patchFileIdRoute,
  patchObservabilityScorecardIdRoute,
  patchPhoneNumberIdRoute,
  patchProviderProviderResourceNameIdRoute,
  patchReportingBoardIdRoute,
  patchReportingInsightIdRoute,
  patchSessionIdRoute,
  patchSquadIdRoute,
  patchStructuredOutputIdRoute,
  patchToolIdRoute,
  patchV2CampaignIdRoute,
  patchV2KnowledgeBaseIdRoute,
  postAnalyticsRoute,
  postAssistantRoute,
  postCallRoute,
  postCampaignRoute,
  postChatResponsesRoute,
  postChatRoute,
  postEvalRoute,
  postEvalRunRoute,
  postEvalSimulationOnboardingRequirementsRoute,
  postEvalSimulationOnboardingSuiteRoute,
  postEvalSimulationPersonalityRoute,
  postEvalSimulationRoute,
  postEvalSimulationRunIdItemItemIdGenerateRoute,
  postEvalSimulationRunRoute,
  postEvalSimulationScenarioRoute,
  postEvalSimulationSuiteIdDuplicateRoute,
  postEvalSimulationSuiteRoute,
  postFileRoute,
  postObservabilityScorecardRoute,
  postPhoneNumberRoute,
  postProviderProviderResourceNameRoute,
  postReportingBoardRoute,
  postReportingInsightIdRunRoute,
  postReportingInsightPreviewRoute,
  postReportingInsightRoute,
  postSessionRoute,
  postSquadRoute,
  postStructuredOutputRoute,
  postStructuredOutputRunRoute,
  postToolRoute,
  postTrafficAllocationsRoute,
  postV2CampaignRoute,
  postV2KnowledgeBaseIdFileFileIdRetryRoute,
  postV2KnowledgeBaseIdFileRoute,
  postV2KnowledgeBaseRoute,
} from './routes'
import {
  deleteAssistantIdRouteHandler,
  deleteCallIdRouteHandler,
  deleteCampaignIdRouteHandler,
  deleteChatIdRouteHandler,
  deleteEvalIdRouteHandler,
  deleteEvalRunIdRouteHandler,
  deleteEvalSimulationIdRouteHandler,
  deleteEvalSimulationPersonalityIdRouteHandler,
  deleteEvalSimulationScenarioIdRouteHandler,
  deleteEvalSimulationSuiteIdRouteHandler,
  deleteFileIdRouteHandler,
  deleteObservabilityScorecardIdRouteHandler,
  deletePhoneNumberIdRouteHandler,
  deleteProviderProviderResourceNameIdRouteHandler,
  deleteReportingBoardIdRouteHandler,
  deleteReportingInsightIdRouteHandler,
  deleteSessionIdRouteHandler,
  deleteSquadIdRouteHandler,
  deleteStructuredOutputIdRouteHandler,
  deleteToolIdRouteHandler,
  deleteV2CampaignIdRouteHandler,
  deleteV2KnowledgeBaseIdFileFileIdRouteHandler,
  deleteV2KnowledgeBaseIdRouteHandler,
  getAssistantIdRouteHandler,
  getAssistantRouteHandler,
  getCallIdAssistantRecordingRouteHandler,
  getCallIdCallLogsRouteHandler,
  getCallIdCustomerRecordingRouteHandler,
  getCallIdMonoRecordingRouteHandler,
  getCallIdPcapRouteHandler,
  getCallIdRouteHandler,
  getCallIdStereoRecordingRouteHandler,
  getCallIdVideoRecordingRouteHandler,
  getCallRouteHandler,
  getCampaignIdRouteHandler,
  getCampaignRouteHandler,
  getChatIdRouteHandler,
  getChatRouteHandler,
  getEvalIdRouteHandler,
  getEvalRouteHandler,
  getEvalRunIdRouteHandler,
  getEvalRunRouteHandler,
  getEvalSimulationConcurrencyRouteHandler,
  getEvalSimulationIdRouteHandler,
  getEvalSimulationPersonalityIdRouteHandler,
  getEvalSimulationPersonalityRouteHandler,
  getEvalSimulationRouteHandler,
  getEvalSimulationRunIdItemItemIdRouteHandler,
  getEvalSimulationRunIdItemRouteHandler,
  getEvalSimulationRunIdRouteHandler,
  getEvalSimulationRunRouteHandler,
  getEvalSimulationScenarioIdRouteHandler,
  getEvalSimulationScenarioRouteHandler,
  getEvalSimulationSuiteIdRouteHandler,
  getEvalSimulationSuiteRouteHandler,
  getFileIdRouteHandler,
  getFileRouteHandler,
  getObservabilityScorecardIdRouteHandler,
  getObservabilityScorecardRouteHandler,
  getPhoneNumberIdRouteHandler,
  getPhoneNumberRouteHandler,
  getProviderProviderResourceNameIdRouteHandler,
  getProviderProviderResourceNameRouteHandler,
  getReportingBoardDefaultMetricsOverviewRouteHandler,
  getReportingBoardIdRouteHandler,
  getReportingBoardRouteHandler,
  getReportingInsightIdRouteHandler,
  getReportingInsightRouteHandler,
  getSessionIdRouteHandler,
  getSessionRouteHandler,
  getSquadIdRouteHandler,
  getSquadRouteHandler,
  getStructuredOutputIdRouteHandler,
  getStructuredOutputRouteHandler,
  getToolIdRouteHandler,
  getToolRouteHandler,
  getTrafficAllocationsIdRouteHandler,
  getTrafficAllocationsLatestRouteHandler,
  getTrafficAllocationsMetricsRouteHandler,
  getTrafficAllocationsRouteHandler,
  getV2CampaignIdContactsRouteHandler,
  getV2CampaignIdRouteHandler,
  getV2CampaignRouteHandler,
  getV2KnowledgeBaseIdFileRouteHandler,
  getV2KnowledgeBaseIdRouteHandler,
  getV2KnowledgeBaseRouteHandler,
  getV2PhoneNumberRouteHandler,
  patchAssistantIdRouteHandler,
  patchCallIdRouteHandler,
  patchCampaignIdRouteHandler,
  patchEvalIdRouteHandler,
  patchEvalSimulationIdRouteHandler,
  patchEvalSimulationOnboardingSuiteSuiteIdRouteHandler,
  patchEvalSimulationPersonalityIdRouteHandler,
  patchEvalSimulationRunIdItemItemIdRouteHandler,
  patchEvalSimulationRunIdRouteHandler,
  patchEvalSimulationScenarioIdRouteHandler,
  patchEvalSimulationSuiteIdRouteHandler,
  patchFileIdRouteHandler,
  patchObservabilityScorecardIdRouteHandler,
  patchPhoneNumberIdRouteHandler,
  patchProviderProviderResourceNameIdRouteHandler,
  patchReportingBoardIdRouteHandler,
  patchReportingInsightIdRouteHandler,
  patchSessionIdRouteHandler,
  patchSquadIdRouteHandler,
  patchStructuredOutputIdRouteHandler,
  patchToolIdRouteHandler,
  patchV2CampaignIdRouteHandler,
  patchV2KnowledgeBaseIdRouteHandler,
  postAnalyticsRouteHandler,
  postAssistantRouteHandler,
  postCallRouteHandler,
  postCampaignRouteHandler,
  postChatResponsesRouteHandler,
  postChatRouteHandler,
  postEvalRouteHandler,
  postEvalRunRouteHandler,
  postEvalSimulationOnboardingRequirementsRouteHandler,
  postEvalSimulationOnboardingSuiteRouteHandler,
  postEvalSimulationPersonalityRouteHandler,
  postEvalSimulationRouteHandler,
  postEvalSimulationRunIdItemItemIdGenerateRouteHandler,
  postEvalSimulationRunRouteHandler,
  postEvalSimulationScenarioRouteHandler,
  postEvalSimulationSuiteIdDuplicateRouteHandler,
  postEvalSimulationSuiteRouteHandler,
  postFileRouteHandler,
  postObservabilityScorecardRouteHandler,
  postPhoneNumberRouteHandler,
  postProviderProviderResourceNameRouteHandler,
  postReportingBoardRouteHandler,
  postReportingInsightIdRunRouteHandler,
  postReportingInsightPreviewRouteHandler,
  postReportingInsightRouteHandler,
  postSessionRouteHandler,
  postSquadRouteHandler,
  postStructuredOutputRouteHandler,
  postStructuredOutputRunRouteHandler,
  postToolRouteHandler,
  postTrafficAllocationsRouteHandler,
  postV2CampaignRouteHandler,
  postV2KnowledgeBaseIdFileFileIdRetryRouteHandler,
  postV2KnowledgeBaseIdFileRouteHandler,
  postV2KnowledgeBaseRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAssistantRoute, postAssistantRouteHandler)
  .openapi(getAssistantRoute, getAssistantRouteHandler)
  .openapi(getAssistantIdRoute, getAssistantIdRouteHandler)
  .openapi(patchAssistantIdRoute, patchAssistantIdRouteHandler)
  .openapi(deleteAssistantIdRoute, deleteAssistantIdRouteHandler)
  .openapi(postSquadRoute, postSquadRouteHandler)
  .openapi(getSquadRoute, getSquadRouteHandler)
  .openapi(getSquadIdRoute, getSquadIdRouteHandler)
  .openapi(patchSquadIdRoute, patchSquadIdRouteHandler)
  .openapi(deleteSquadIdRoute, deleteSquadIdRouteHandler)
  .openapi(postCallRoute, postCallRouteHandler)
  .openapi(getCallRoute, getCallRouteHandler)
  .openapi(getCallIdRoute, getCallIdRouteHandler)
  .openapi(patchCallIdRoute, patchCallIdRouteHandler)
  .openapi(deleteCallIdRoute, deleteCallIdRouteHandler)
  .openapi(getCallIdMonoRecordingRoute, getCallIdMonoRecordingRouteHandler)
  .openapi(getCallIdStereoRecordingRoute, getCallIdStereoRecordingRouteHandler)
  .openapi(getCallIdVideoRecordingRoute, getCallIdVideoRecordingRouteHandler)
  .openapi(getCallIdCustomerRecordingRoute, getCallIdCustomerRecordingRouteHandler)
  .openapi(getCallIdAssistantRecordingRoute, getCallIdAssistantRecordingRouteHandler)
  .openapi(getCallIdPcapRoute, getCallIdPcapRouteHandler)
  .openapi(getCallIdCallLogsRoute, getCallIdCallLogsRouteHandler)
  .openapi(getChatRoute, getChatRouteHandler)
  .openapi(postChatRoute, postChatRouteHandler)
  .openapi(getChatIdRoute, getChatIdRouteHandler)
  .openapi(deleteChatIdRoute, deleteChatIdRouteHandler)
  .openapi(postChatResponsesRoute, postChatResponsesRouteHandler)
  .openapi(postCampaignRoute, postCampaignRouteHandler)
  .openapi(getCampaignRoute, getCampaignRouteHandler)
  .openapi(postV2CampaignRoute, postV2CampaignRouteHandler)
  .openapi(getV2CampaignRoute, getV2CampaignRouteHandler)
  .openapi(getV2CampaignIdRoute, getV2CampaignIdRouteHandler)
  .openapi(patchV2CampaignIdRoute, patchV2CampaignIdRouteHandler)
  .openapi(deleteV2CampaignIdRoute, deleteV2CampaignIdRouteHandler)
  .openapi(getCampaignIdRoute, getCampaignIdRouteHandler)
  .openapi(patchCampaignIdRoute, patchCampaignIdRouteHandler)
  .openapi(deleteCampaignIdRoute, deleteCampaignIdRouteHandler)
  .openapi(getV2CampaignIdContactsRoute, getV2CampaignIdContactsRouteHandler)
  .openapi(postSessionRoute, postSessionRouteHandler)
  .openapi(getSessionRoute, getSessionRouteHandler)
  .openapi(getSessionIdRoute, getSessionIdRouteHandler)
  .openapi(patchSessionIdRoute, patchSessionIdRouteHandler)
  .openapi(deleteSessionIdRoute, deleteSessionIdRouteHandler)
  .openapi(postTrafficAllocationsRoute, postTrafficAllocationsRouteHandler)
  .openapi(getTrafficAllocationsRoute, getTrafficAllocationsRouteHandler)
  .openapi(getTrafficAllocationsLatestRoute, getTrafficAllocationsLatestRouteHandler)
  .openapi(getTrafficAllocationsMetricsRoute, getTrafficAllocationsMetricsRouteHandler)
  .openapi(getTrafficAllocationsIdRoute, getTrafficAllocationsIdRouteHandler)
  .openapi(postPhoneNumberRoute, postPhoneNumberRouteHandler)
  .openapi(getPhoneNumberRoute, getPhoneNumberRouteHandler)
  .openapi(getV2PhoneNumberRoute, getV2PhoneNumberRouteHandler)
  .openapi(getPhoneNumberIdRoute, getPhoneNumberIdRouteHandler)
  .openapi(patchPhoneNumberIdRoute, patchPhoneNumberIdRouteHandler)
  .openapi(deletePhoneNumberIdRoute, deletePhoneNumberIdRouteHandler)
  .openapi(postToolRoute, postToolRouteHandler)
  .openapi(getToolRoute, getToolRouteHandler)
  .openapi(getToolIdRoute, getToolIdRouteHandler)
  .openapi(patchToolIdRoute, patchToolIdRouteHandler)
  .openapi(deleteToolIdRoute, deleteToolIdRouteHandler)
  .openapi(postFileRoute, postFileRouteHandler)
  .openapi(getFileRoute, getFileRouteHandler)
  .openapi(getFileIdRoute, getFileIdRouteHandler)
  .openapi(patchFileIdRoute, patchFileIdRouteHandler)
  .openapi(deleteFileIdRoute, deleteFileIdRouteHandler)
  .openapi(postV2KnowledgeBaseRoute, postV2KnowledgeBaseRouteHandler)
  .openapi(getV2KnowledgeBaseRoute, getV2KnowledgeBaseRouteHandler)
  .openapi(getV2KnowledgeBaseIdFileRoute, getV2KnowledgeBaseIdFileRouteHandler)
  .openapi(postV2KnowledgeBaseIdFileRoute, postV2KnowledgeBaseIdFileRouteHandler)
  .openapi(deleteV2KnowledgeBaseIdFileFileIdRoute, deleteV2KnowledgeBaseIdFileFileIdRouteHandler)
  .openapi(
    postV2KnowledgeBaseIdFileFileIdRetryRoute,
    postV2KnowledgeBaseIdFileFileIdRetryRouteHandler,
  )
  .openapi(patchV2KnowledgeBaseIdRoute, patchV2KnowledgeBaseIdRouteHandler)
  .openapi(getV2KnowledgeBaseIdRoute, getV2KnowledgeBaseIdRouteHandler)
  .openapi(deleteV2KnowledgeBaseIdRoute, deleteV2KnowledgeBaseIdRouteHandler)
  .openapi(getStructuredOutputRoute, getStructuredOutputRouteHandler)
  .openapi(postStructuredOutputRoute, postStructuredOutputRouteHandler)
  .openapi(getStructuredOutputIdRoute, getStructuredOutputIdRouteHandler)
  .openapi(patchStructuredOutputIdRoute, patchStructuredOutputIdRouteHandler)
  .openapi(deleteStructuredOutputIdRoute, deleteStructuredOutputIdRouteHandler)
  .openapi(postStructuredOutputRunRoute, postStructuredOutputRunRouteHandler)
  .openapi(postEvalSimulationPersonalityRoute, postEvalSimulationPersonalityRouteHandler)
  .openapi(getEvalSimulationPersonalityRoute, getEvalSimulationPersonalityRouteHandler)
  .openapi(getEvalSimulationPersonalityIdRoute, getEvalSimulationPersonalityIdRouteHandler)
  .openapi(patchEvalSimulationPersonalityIdRoute, patchEvalSimulationPersonalityIdRouteHandler)
  .openapi(deleteEvalSimulationPersonalityIdRoute, deleteEvalSimulationPersonalityIdRouteHandler)
  .openapi(postEvalSimulationScenarioRoute, postEvalSimulationScenarioRouteHandler)
  .openapi(getEvalSimulationScenarioRoute, getEvalSimulationScenarioRouteHandler)
  .openapi(getEvalSimulationScenarioIdRoute, getEvalSimulationScenarioIdRouteHandler)
  .openapi(patchEvalSimulationScenarioIdRoute, patchEvalSimulationScenarioIdRouteHandler)
  .openapi(deleteEvalSimulationScenarioIdRoute, deleteEvalSimulationScenarioIdRouteHandler)
  .openapi(postEvalSimulationRunRoute, postEvalSimulationRunRouteHandler)
  .openapi(getEvalSimulationRunRoute, getEvalSimulationRunRouteHandler)
  .openapi(getEvalSimulationRunIdRoute, getEvalSimulationRunIdRouteHandler)
  .openapi(patchEvalSimulationRunIdRoute, patchEvalSimulationRunIdRouteHandler)
  .openapi(getEvalSimulationRunIdItemRoute, getEvalSimulationRunIdItemRouteHandler)
  .openapi(getEvalSimulationRunIdItemItemIdRoute, getEvalSimulationRunIdItemItemIdRouteHandler)
  .openapi(patchEvalSimulationRunIdItemItemIdRoute, patchEvalSimulationRunIdItemItemIdRouteHandler)
  .openapi(
    postEvalSimulationRunIdItemItemIdGenerateRoute,
    postEvalSimulationRunIdItemItemIdGenerateRouteHandler,
  )
  .openapi(postEvalSimulationSuiteRoute, postEvalSimulationSuiteRouteHandler)
  .openapi(getEvalSimulationSuiteRoute, getEvalSimulationSuiteRouteHandler)
  .openapi(postEvalSimulationSuiteIdDuplicateRoute, postEvalSimulationSuiteIdDuplicateRouteHandler)
  .openapi(getEvalSimulationSuiteIdRoute, getEvalSimulationSuiteIdRouteHandler)
  .openapi(patchEvalSimulationSuiteIdRoute, patchEvalSimulationSuiteIdRouteHandler)
  .openapi(deleteEvalSimulationSuiteIdRoute, deleteEvalSimulationSuiteIdRouteHandler)
  .openapi(
    postEvalSimulationOnboardingRequirementsRoute,
    postEvalSimulationOnboardingRequirementsRouteHandler,
  )
  .openapi(postEvalSimulationOnboardingSuiteRoute, postEvalSimulationOnboardingSuiteRouteHandler)
  .openapi(
    patchEvalSimulationOnboardingSuiteSuiteIdRoute,
    patchEvalSimulationOnboardingSuiteSuiteIdRouteHandler,
  )
  .openapi(postEvalSimulationRoute, postEvalSimulationRouteHandler)
  .openapi(getEvalSimulationRoute, getEvalSimulationRouteHandler)
  .openapi(getEvalSimulationConcurrencyRoute, getEvalSimulationConcurrencyRouteHandler)
  .openapi(getEvalSimulationIdRoute, getEvalSimulationIdRouteHandler)
  .openapi(patchEvalSimulationIdRoute, patchEvalSimulationIdRouteHandler)
  .openapi(deleteEvalSimulationIdRoute, deleteEvalSimulationIdRouteHandler)
  .openapi(postReportingInsightRoute, postReportingInsightRouteHandler)
  .openapi(getReportingInsightRoute, getReportingInsightRouteHandler)
  .openapi(patchReportingInsightIdRoute, patchReportingInsightIdRouteHandler)
  .openapi(getReportingInsightIdRoute, getReportingInsightIdRouteHandler)
  .openapi(deleteReportingInsightIdRoute, deleteReportingInsightIdRouteHandler)
  .openapi(postReportingInsightIdRunRoute, postReportingInsightIdRunRouteHandler)
  .openapi(postReportingInsightPreviewRoute, postReportingInsightPreviewRouteHandler)
  .openapi(postReportingBoardRoute, postReportingBoardRouteHandler)
  .openapi(getReportingBoardRoute, getReportingBoardRouteHandler)
  .openapi(
    getReportingBoardDefaultMetricsOverviewRoute,
    getReportingBoardDefaultMetricsOverviewRouteHandler,
  )
  .openapi(patchReportingBoardIdRoute, patchReportingBoardIdRouteHandler)
  .openapi(getReportingBoardIdRoute, getReportingBoardIdRouteHandler)
  .openapi(deleteReportingBoardIdRoute, deleteReportingBoardIdRouteHandler)
  .openapi(postEvalRoute, postEvalRouteHandler)
  .openapi(getEvalRoute, getEvalRouteHandler)
  .openapi(patchEvalIdRoute, patchEvalIdRouteHandler)
  .openapi(deleteEvalIdRoute, deleteEvalIdRouteHandler)
  .openapi(getEvalIdRoute, getEvalIdRouteHandler)
  .openapi(deleteEvalRunIdRoute, deleteEvalRunIdRouteHandler)
  .openapi(getEvalRunIdRoute, getEvalRunIdRouteHandler)
  .openapi(postEvalRunRoute, postEvalRunRouteHandler)
  .openapi(getEvalRunRoute, getEvalRunRouteHandler)
  .openapi(getObservabilityScorecardIdRoute, getObservabilityScorecardIdRouteHandler)
  .openapi(patchObservabilityScorecardIdRoute, patchObservabilityScorecardIdRouteHandler)
  .openapi(deleteObservabilityScorecardIdRoute, deleteObservabilityScorecardIdRouteHandler)
  .openapi(getObservabilityScorecardRoute, getObservabilityScorecardRouteHandler)
  .openapi(postObservabilityScorecardRoute, postObservabilityScorecardRouteHandler)
  .openapi(postProviderProviderResourceNameRoute, postProviderProviderResourceNameRouteHandler)
  .openapi(getProviderProviderResourceNameRoute, getProviderProviderResourceNameRouteHandler)
  .openapi(getProviderProviderResourceNameIdRoute, getProviderProviderResourceNameIdRouteHandler)
  .openapi(
    deleteProviderProviderResourceNameIdRoute,
    deleteProviderProviderResourceNameIdRouteHandler,
  )
  .openapi(
    patchProviderProviderResourceNameIdRoute,
    patchProviderProviderResourceNameIdRouteHandler,
  )
  .openapi(postAnalyticsRoute, postAnalyticsRouteHandler)

export default app
