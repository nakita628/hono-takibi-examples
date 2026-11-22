import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountBrandsHandler,
  accountConsumerDisclosuresHandler,
  accountCustomFieldsHandler,
  accountPasswordRulesHandler,
  accountPermissionProfilesHandler,
  accountSealProvidersHandler,
  accountsHandler,
  accountSignatureProvidersHandler,
  accountSignaturesHandler,
  accountTabSettingsHandler,
  accountWatermarksHandler,
  bccEmailArchiveHandler,
  billingPlansHandler,
  bulkSendHandler,
  chunkedUploadsHandler,
  cloudStorageHandler,
  cloudStorageProvidersHandler,
  commentsHandler,
  connectConfigurationsHandler,
  connectEventsHandler,
  contactsHandler,
  customTabsHandler,
  documentResponsiveHtmlPreviewHandler,
  eNoteConfigurationsHandler,
  envelopeAttachmentsHandler,
  envelopeConsumerDisclosuresHandler,
  envelopeCustomFieldsHandler,
  envelopeDocumentFieldsHandler,
  envelopeDocumentHtmlDefinitionsHandler,
  envelopeDocumentsHandler,
  envelopeDocumentTabsHandler,
  envelopeDocumentVisibilityHandler,
  envelopeEmailSettingsHandler,
  envelopeFormDataHandler,
  envelopeHtmlDefinitionsHandler,
  envelopeLocksHandler,
  envelopePublishHandler,
  envelopeRecipientsHandler,
  envelopeRecipientTabsHandler,
  envelopesHandler,
  envelopeTemplatesHandler,
  envelopeTransferRulesHandler,
  envelopeViewsHandler,
  envelopeWorkflowDefinitionHandler,
  favoriteTemplatesHandler,
  foldersHandler,
  groupBrandsHandler,
  groupsHandler,
  groupUsersHandler,
  identityVerificationsHandler,
  invoicesHandler,
  notaryHandler,
  notaryJournalsHandler,
  notaryJurisdictionHandler,
  paymentGatewayAccountsHandler,
  paymentsHandler,
  powerFormDataHandler,
  powerFormsHandler,
  requestLogsHandler,
  resourcesHandler,
  responsiveHtmlPreviewHandler,
  servicesHandler,
  signingGroupsHandler,
  signingGroupUsersHandler,
  tabsBlobHandler,
  templateBulkRecipientsHandler,
  templateCustomFieldsHandler,
  templateDocumentFieldsHandler,
  templateDocumentHtmlDefinitionsHandler,
  templateDocumentResponsiveHtmlPreviewHandler,
  templateDocumentsHandler,
  templateDocumentTabsHandler,
  templateDocumentVisibilityHandler,
  templateHtmlDefinitionsHandler,
  templateLocksHandler,
  templateRecipientsHandler,
  templateRecipientTabsHandler,
  templateResponsiveHtmlPreviewHandler,
  templatesHandler,
  templateViewsHandler,
  userCustomSettingsHandler,
  userProfilesHandler,
  usersHandler,
  userSignaturesHandler,
  workspaceItemsHandler,
  workspacesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', servicesHandler)
  .route('/', resourcesHandler)
  .route('/', accountsHandler)
  .route('/', invoicesHandler)
  .route('/', paymentsHandler)
  .route('/', billingPlansHandler)
  .route('/', accountBrandsHandler)
  .route('/', bulkSendHandler)
  .route('/', chunkedUploadsHandler)
  .route('/', connectConfigurationsHandler)
  .route('/', envelopePublishHandler)
  .route('/', connectEventsHandler)
  .route('/', accountConsumerDisclosuresHandler)
  .route('/', contactsHandler)
  .route('/', accountCustomFieldsHandler)
  .route('/', envelopesHandler)
  .route('/', envelopeTransferRulesHandler)
  .route('/', envelopeAttachmentsHandler)
  .route('/', commentsHandler)
  .route('/', envelopeCustomFieldsHandler)
  .route('/', envelopeDocumentsHandler)
  .route('/', envelopeDocumentFieldsHandler)
  .route('/', envelopeDocumentHtmlDefinitionsHandler)
  .route('/', envelopeDocumentTabsHandler)
  .route('/', documentResponsiveHtmlPreviewHandler)
  .route('/', envelopeTemplatesHandler)
  .route('/', envelopeEmailSettingsHandler)
  .route('/', envelopeFormDataHandler)
  .route('/', envelopeHtmlDefinitionsHandler)
  .route('/', envelopeLocksHandler)
  .route('/', envelopeRecipientsHandler)
  .route('/', envelopeDocumentVisibilityHandler)
  .route('/', envelopeConsumerDisclosuresHandler)
  .route('/', envelopeRecipientTabsHandler)
  .route('/', responsiveHtmlPreviewHandler)
  .route('/', tabsBlobHandler)
  .route('/', envelopeViewsHandler)
  .route('/', envelopeWorkflowDefinitionHandler)
  .route('/', favoriteTemplatesHandler)
  .route('/', foldersHandler)
  .route('/', groupsHandler)
  .route('/', groupBrandsHandler)
  .route('/', groupUsersHandler)
  .route('/', identityVerificationsHandler)
  .route('/', paymentGatewayAccountsHandler)
  .route('/', accountPermissionProfilesHandler)
  .route('/', powerFormsHandler)
  .route('/', powerFormDataHandler)
  .route('/', accountSealProvidersHandler)
  .route('/', bccEmailArchiveHandler)
  .route('/', eNoteConfigurationsHandler)
  .route('/', accountPasswordRulesHandler)
  .route('/', accountTabSettingsHandler)
  .route('/', accountSignatureProvidersHandler)
  .route('/', accountSignaturesHandler)
  .route('/', signingGroupsHandler)
  .route('/', signingGroupUsersHandler)
  .route('/', customTabsHandler)
  .route('/', templatesHandler)
  .route('/', templateCustomFieldsHandler)
  .route('/', templateDocumentsHandler)
  .route('/', templateDocumentFieldsHandler)
  .route('/', templateDocumentHtmlDefinitionsHandler)
  .route('/', templateDocumentTabsHandler)
  .route('/', templateDocumentResponsiveHtmlPreviewHandler)
  .route('/', templateHtmlDefinitionsHandler)
  .route('/', templateLocksHandler)
  .route('/', templateRecipientsHandler)
  .route('/', templateDocumentVisibilityHandler)
  .route('/', templateBulkRecipientsHandler)
  .route('/', templateRecipientTabsHandler)
  .route('/', templateResponsiveHtmlPreviewHandler)
  .route('/', templateViewsHandler)
  .route('/', usersHandler)
  .route('/', cloudStorageProvidersHandler)
  .route('/', cloudStorageHandler)
  .route('/', userCustomSettingsHandler)
  .route('/', userProfilesHandler)
  .route('/', userSignaturesHandler)
  .route('/', accountWatermarksHandler)
  .route('/', workspacesHandler)
  .route('/', workspaceItemsHandler)
  .route('/', notaryHandler)
  .route('/', notaryJournalsHandler)
  .route('/', notaryJurisdictionHandler)
  .route('/', requestLogsHandler)

export default app
