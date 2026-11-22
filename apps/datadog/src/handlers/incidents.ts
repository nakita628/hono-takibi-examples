import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IncidentsConfigGlobalIncidentHandlesRoute,
  deleteApiV2IncidentsConfigImpactFieldsFieldIdRoute,
  deleteApiV2IncidentsConfigNotificationRulesIdRoute,
  deleteApiV2IncidentsConfigNotificationTemplatesIdRoute,
  deleteApiV2IncidentsConfigPostmortemTemplatesTemplateIdRoute,
  deleteApiV2IncidentsConfigRulesRuleIdRoute,
  deleteApiV2IncidentsConfigTypesIncidentTypeIdRoute,
  deleteApiV2IncidentsConfigUserDefinedFieldsFieldIdRoute,
  deleteApiV2IncidentsConfigUserDefinedRolesRoleIdRoute,
  deleteApiV2IncidentsIncidentIdAttachmentsAttachmentIdRoute,
  deleteApiV2IncidentsIncidentIdImpactsImpactIdRoute,
  deleteApiV2IncidentsIncidentIdRelationshipsIntegrationsIntegrationMetadataIdRoute,
  deleteApiV2IncidentsIncidentIdRelationshipsTodosTodoIdRoute,
  deleteApiV2IncidentsIncidentIdRespondersResponderIdRoute,
  deleteApiV2IncidentsIncidentIdRoute,
  deleteApiV2IncidentsIncidentIdTimestampOverridesIdRoute,
  getApiV2IncidentsConfigGlobalIncidentHandlesRoute,
  getApiV2IncidentsConfigGlobalSettingsRoute,
  getApiV2IncidentsConfigImpactFieldsRoute,
  getApiV2IncidentsConfigNotificationRulesIdRoute,
  getApiV2IncidentsConfigNotificationRulesRoute,
  getApiV2IncidentsConfigNotificationTemplatesIdRoute,
  getApiV2IncidentsConfigNotificationTemplatesRoute,
  getApiV2IncidentsConfigPostmortemTemplatesRoute,
  getApiV2IncidentsConfigPostmortemTemplatesTemplateIdRoute,
  getApiV2IncidentsConfigRulesRoute,
  getApiV2IncidentsConfigRulesRuleIdRoute,
  getApiV2IncidentsConfigTypesIncidentTypeIdOrgSettingsRoute,
  getApiV2IncidentsConfigTypesIncidentTypeIdRoute,
  getApiV2IncidentsConfigTypesOrgSettingsRoute,
  getApiV2IncidentsConfigTypesRoute,
  getApiV2IncidentsConfigUserDefinedFieldsFieldIdRoute,
  getApiV2IncidentsConfigUserDefinedFieldsRoute,
  getApiV2IncidentsConfigUserDefinedRolesRoleIdRoute,
  getApiV2IncidentsConfigUserDefinedRolesRoute,
  getApiV2IncidentsIncidentIdAttachmentsRoute,
  getApiV2IncidentsIncidentIdImpactsRoute,
  getApiV2IncidentsIncidentIdRelationshipsIntegrationsIntegrationMetadataIdRoute,
  getApiV2IncidentsIncidentIdRelationshipsIntegrationsRoute,
  getApiV2IncidentsIncidentIdRelationshipsTodosRoute,
  getApiV2IncidentsIncidentIdRelationshipsTodosTodoIdRoute,
  getApiV2IncidentsIncidentIdRespondersResponderIdRoute,
  getApiV2IncidentsIncidentIdRespondersRoute,
  getApiV2IncidentsIncidentIdRoute,
  getApiV2IncidentsIncidentIdTimestampOverridesRoute,
  getApiV2IncidentsRoute,
  getApiV2IncidentsSearchRoute,
  patchApiV2IncidentsConfigGlobalSettingsRoute,
  patchApiV2IncidentsConfigGoogleChatConfigurationsIdRoute,
  patchApiV2IncidentsConfigGoogleMeetConfigurationsIdRoute,
  patchApiV2IncidentsConfigNotificationTemplatesIdRoute,
  patchApiV2IncidentsConfigPostmortemTemplatesTemplateIdRoute,
  patchApiV2IncidentsConfigRulesRuleIdRoute,
  patchApiV2IncidentsConfigTypesIncidentTypeIdRoute,
  patchApiV2IncidentsConfigUserDefinedFieldsFieldIdRoute,
  patchApiV2IncidentsConfigUserDefinedRolesRoleIdRoute,
  patchApiV2IncidentsIncidentIdAttachmentsAttachmentIdRoute,
  patchApiV2IncidentsIncidentIdConfigurationsRoute,
  patchApiV2IncidentsIncidentIdImpactsImpactIdRoute,
  patchApiV2IncidentsIncidentIdRelationshipsIntegrationsIntegrationMetadataIdRoute,
  patchApiV2IncidentsIncidentIdRelationshipsTodosTodoIdRoute,
  patchApiV2IncidentsIncidentIdRoute,
  patchApiV2IncidentsIncidentIdTimestampOverridesIdRoute,
  postApiV2IncidentsConfigGlobalIncidentHandlesRoute,
  postApiV2IncidentsConfigGoogleChatConfigurationsRoute,
  postApiV2IncidentsConfigGoogleMeetConfigurationsRoute,
  postApiV2IncidentsConfigImpactFieldsRoute,
  postApiV2IncidentsConfigNotificationRulesRoute,
  postApiV2IncidentsConfigNotificationTemplatesRoute,
  postApiV2IncidentsConfigPostmortemTemplatesRoute,
  postApiV2IncidentsConfigRulesRoute,
  postApiV2IncidentsConfigTypesRoute,
  postApiV2IncidentsConfigUserDefinedFieldsRoute,
  postApiV2IncidentsConfigUserDefinedRolesRoute,
  postApiV2IncidentsImportRoute,
  postApiV2IncidentsIncidentIdAiPostmortemRoute,
  postApiV2IncidentsIncidentIdAttachmentsPostmortemsRoute,
  postApiV2IncidentsIncidentIdAttachmentsRoute,
  postApiV2IncidentsIncidentIdCasesPageRoute,
  postApiV2IncidentsIncidentIdConfigurationsRoute,
  postApiV2IncidentsIncidentIdImpactsRoute,
  postApiV2IncidentsIncidentIdPageRoute,
  postApiV2IncidentsIncidentIdPagesLinkRoute,
  postApiV2IncidentsIncidentIdRelationshipsIntegrationsRoute,
  postApiV2IncidentsIncidentIdRelationshipsTodosRoute,
  postApiV2IncidentsIncidentIdRespondersRoute,
  postApiV2IncidentsIncidentIdServicenowRecordsRoute,
  postApiV2IncidentsIncidentIdTimestampOverridesRoute,
  postApiV2IncidentsRoute,
  putApiV2IncidentsConfigGlobalIncidentHandlesRoute,
  putApiV2IncidentsConfigImpactFieldsFieldIdRoute,
  putApiV2IncidentsConfigNotificationRulesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const incidentsHandler = app
  .openapi(getApiV2IncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsConfigGlobalIncidentHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigGlobalIncidentHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsConfigGlobalIncidentHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2IncidentsConfigGlobalIncidentHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigGlobalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsConfigGlobalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsConfigGoogleChatConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsConfigGoogleChatConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsConfigGoogleMeetConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsConfigGoogleMeetConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigImpactFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsConfigImpactFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsConfigImpactFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2IncidentsConfigImpactFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsConfigNotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsConfigNotificationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigNotificationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2IncidentsConfigNotificationRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigNotificationTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsConfigNotificationTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsConfigNotificationTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigNotificationTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsConfigNotificationTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigPostmortemTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsConfigPostmortemTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsConfigPostmortemTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigPostmortemTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsConfigPostmortemTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsConfigRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsConfigRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsConfigRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsConfigTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigTypesOrgSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsConfigTypesIncidentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigTypesIncidentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsConfigTypesIncidentTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigTypesIncidentTypeIdOrgSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigUserDefinedFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsConfigUserDefinedFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsConfigUserDefinedFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigUserDefinedFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsConfigUserDefinedFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigUserDefinedRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsConfigUserDefinedRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsConfigUserDefinedRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsConfigUserDefinedRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsConfigUserDefinedRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsIncidentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsIncidentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsIncidentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdAiPostmortemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsIncidentIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdAttachmentsPostmortemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsIncidentIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsIncidentIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdCasesPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsIncidentIdConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsIncidentIdImpactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdImpactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsIncidentIdImpactsImpactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsIncidentIdImpactsImpactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdPagesLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsIncidentIdRelationshipsIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdRelationshipsIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV2IncidentsIncidentIdRelationshipsIntegrationsIntegrationMetadataIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2IncidentsIncidentIdRelationshipsIntegrationsIntegrationMetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchApiV2IncidentsIncidentIdRelationshipsIntegrationsIntegrationMetadataIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2IncidentsIncidentIdRelationshipsTodosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdRelationshipsTodosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsIncidentIdRelationshipsTodosTodoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsIncidentIdRelationshipsTodosTodoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsIncidentIdRelationshipsTodosTodoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsIncidentIdRespondersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdRespondersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsIncidentIdRespondersResponderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsIncidentIdRespondersResponderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdServicenowRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IncidentsIncidentIdTimestampOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IncidentsIncidentIdTimestampOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IncidentsIncidentIdTimestampOverridesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IncidentsIncidentIdTimestampOverridesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
