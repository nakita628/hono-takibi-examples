import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionHandler,
  XAmzTargetAwsProton20200720CancelComponentDeploymentHandler,
  XAmzTargetAwsProton20200720CancelEnvironmentDeploymentHandler,
  XAmzTargetAwsProton20200720CancelServiceInstanceDeploymentHandler,
  XAmzTargetAwsProton20200720CancelServicePipelineDeploymentHandler,
  XAmzTargetAwsProton20200720CreateComponentHandler,
  XAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionHandler,
  XAmzTargetAwsProton20200720CreateEnvironmentHandler,
  XAmzTargetAwsProton20200720CreateEnvironmentTemplateHandler,
  XAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionHandler,
  XAmzTargetAwsProton20200720CreateRepositoryHandler,
  XAmzTargetAwsProton20200720CreateServiceHandler,
  XAmzTargetAwsProton20200720CreateServiceInstanceHandler,
  XAmzTargetAwsProton20200720CreateServiceSyncConfigHandler,
  XAmzTargetAwsProton20200720CreateServiceTemplateHandler,
  XAmzTargetAwsProton20200720CreateServiceTemplateVersionHandler,
  XAmzTargetAwsProton20200720CreateTemplateSyncConfigHandler,
  XAmzTargetAwsProton20200720DeleteComponentHandler,
  XAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionHandler,
  XAmzTargetAwsProton20200720DeleteEnvironmentHandler,
  XAmzTargetAwsProton20200720DeleteEnvironmentTemplateHandler,
  XAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionHandler,
  XAmzTargetAwsProton20200720DeleteRepositoryHandler,
  XAmzTargetAwsProton20200720DeleteServiceHandler,
  XAmzTargetAwsProton20200720DeleteServiceSyncConfigHandler,
  XAmzTargetAwsProton20200720DeleteServiceTemplateHandler,
  XAmzTargetAwsProton20200720DeleteServiceTemplateVersionHandler,
  XAmzTargetAwsProton20200720DeleteTemplateSyncConfigHandler,
  XAmzTargetAwsProton20200720GetAccountSettingsHandler,
  XAmzTargetAwsProton20200720GetComponentHandler,
  XAmzTargetAwsProton20200720GetEnvironmentAccountConnectionHandler,
  XAmzTargetAwsProton20200720GetEnvironmentHandler,
  XAmzTargetAwsProton20200720GetEnvironmentTemplateHandler,
  XAmzTargetAwsProton20200720GetEnvironmentTemplateVersionHandler,
  XAmzTargetAwsProton20200720GetRepositoryHandler,
  XAmzTargetAwsProton20200720GetRepositorySyncStatusHandler,
  XAmzTargetAwsProton20200720GetResourcesSummaryHandler,
  XAmzTargetAwsProton20200720GetServiceHandler,
  XAmzTargetAwsProton20200720GetServiceInstanceHandler,
  XAmzTargetAwsProton20200720GetServiceInstanceSyncStatusHandler,
  XAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryHandler,
  XAmzTargetAwsProton20200720GetServiceSyncConfigHandler,
  XAmzTargetAwsProton20200720GetServiceTemplateHandler,
  XAmzTargetAwsProton20200720GetServiceTemplateVersionHandler,
  XAmzTargetAwsProton20200720GetTemplateSyncConfigHandler,
  XAmzTargetAwsProton20200720GetTemplateSyncStatusHandler,
  XAmzTargetAwsProton20200720ListComponentOutputsHandler,
  XAmzTargetAwsProton20200720ListComponentProvisionedResourcesHandler,
  XAmzTargetAwsProton20200720ListComponentsHandler,
  XAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsHandler,
  XAmzTargetAwsProton20200720ListEnvironmentOutputsHandler,
  XAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesHandler,
  XAmzTargetAwsProton20200720ListEnvironmentsHandler,
  XAmzTargetAwsProton20200720ListEnvironmentTemplatesHandler,
  XAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsHandler,
  XAmzTargetAwsProton20200720ListRepositoriesHandler,
  XAmzTargetAwsProton20200720ListRepositorySyncDefinitionsHandler,
  XAmzTargetAwsProton20200720ListServiceInstanceOutputsHandler,
  XAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesHandler,
  XAmzTargetAwsProton20200720ListServiceInstancesHandler,
  XAmzTargetAwsProton20200720ListServicePipelineOutputsHandler,
  XAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesHandler,
  XAmzTargetAwsProton20200720ListServicesHandler,
  XAmzTargetAwsProton20200720ListServiceTemplatesHandler,
  XAmzTargetAwsProton20200720ListServiceTemplateVersionsHandler,
  XAmzTargetAwsProton20200720ListTagsForResourceHandler,
  XAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeHandler,
  XAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionHandler,
  XAmzTargetAwsProton20200720TagResourceHandler,
  XAmzTargetAwsProton20200720UntagResourceHandler,
  XAmzTargetAwsProton20200720UpdateAccountSettingsHandler,
  XAmzTargetAwsProton20200720UpdateComponentHandler,
  XAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionHandler,
  XAmzTargetAwsProton20200720UpdateEnvironmentHandler,
  XAmzTargetAwsProton20200720UpdateEnvironmentTemplateHandler,
  XAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionHandler,
  XAmzTargetAwsProton20200720UpdateServiceHandler,
  XAmzTargetAwsProton20200720UpdateServiceInstanceHandler,
  XAmzTargetAwsProton20200720UpdateServicePipelineHandler,
  XAmzTargetAwsProton20200720UpdateServiceSyncBlockerHandler,
  XAmzTargetAwsProton20200720UpdateServiceSyncConfigHandler,
  XAmzTargetAwsProton20200720UpdateServiceTemplateHandler,
  XAmzTargetAwsProton20200720UpdateServiceTemplateVersionHandler,
  XAmzTargetAwsProton20200720UpdateTemplateSyncConfigHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionHandler)
  .route('/', XAmzTargetAwsProton20200720CancelComponentDeploymentHandler)
  .route('/', XAmzTargetAwsProton20200720CancelEnvironmentDeploymentHandler)
  .route('/', XAmzTargetAwsProton20200720CancelServiceInstanceDeploymentHandler)
  .route('/', XAmzTargetAwsProton20200720CancelServicePipelineDeploymentHandler)
  .route('/', XAmzTargetAwsProton20200720CreateComponentHandler)
  .route('/', XAmzTargetAwsProton20200720CreateEnvironmentHandler)
  .route('/', XAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionHandler)
  .route('/', XAmzTargetAwsProton20200720CreateEnvironmentTemplateHandler)
  .route('/', XAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionHandler)
  .route('/', XAmzTargetAwsProton20200720CreateRepositoryHandler)
  .route('/', XAmzTargetAwsProton20200720CreateServiceHandler)
  .route('/', XAmzTargetAwsProton20200720CreateServiceInstanceHandler)
  .route('/', XAmzTargetAwsProton20200720CreateServiceSyncConfigHandler)
  .route('/', XAmzTargetAwsProton20200720CreateServiceTemplateHandler)
  .route('/', XAmzTargetAwsProton20200720CreateServiceTemplateVersionHandler)
  .route('/', XAmzTargetAwsProton20200720CreateTemplateSyncConfigHandler)
  .route('/', XAmzTargetAwsProton20200720DeleteComponentHandler)
  .route('/', XAmzTargetAwsProton20200720DeleteEnvironmentHandler)
  .route('/', XAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionHandler)
  .route('/', XAmzTargetAwsProton20200720DeleteEnvironmentTemplateHandler)
  .route('/', XAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionHandler)
  .route('/', XAmzTargetAwsProton20200720DeleteRepositoryHandler)
  .route('/', XAmzTargetAwsProton20200720DeleteServiceHandler)
  .route('/', XAmzTargetAwsProton20200720DeleteServiceSyncConfigHandler)
  .route('/', XAmzTargetAwsProton20200720DeleteServiceTemplateHandler)
  .route('/', XAmzTargetAwsProton20200720DeleteServiceTemplateVersionHandler)
  .route('/', XAmzTargetAwsProton20200720DeleteTemplateSyncConfigHandler)
  .route('/', XAmzTargetAwsProton20200720GetAccountSettingsHandler)
  .route('/', XAmzTargetAwsProton20200720GetComponentHandler)
  .route('/', XAmzTargetAwsProton20200720GetEnvironmentHandler)
  .route('/', XAmzTargetAwsProton20200720GetEnvironmentAccountConnectionHandler)
  .route('/', XAmzTargetAwsProton20200720GetEnvironmentTemplateHandler)
  .route('/', XAmzTargetAwsProton20200720GetEnvironmentTemplateVersionHandler)
  .route('/', XAmzTargetAwsProton20200720GetRepositoryHandler)
  .route('/', XAmzTargetAwsProton20200720GetRepositorySyncStatusHandler)
  .route('/', XAmzTargetAwsProton20200720GetResourcesSummaryHandler)
  .route('/', XAmzTargetAwsProton20200720GetServiceHandler)
  .route('/', XAmzTargetAwsProton20200720GetServiceInstanceHandler)
  .route('/', XAmzTargetAwsProton20200720GetServiceInstanceSyncStatusHandler)
  .route('/', XAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryHandler)
  .route('/', XAmzTargetAwsProton20200720GetServiceSyncConfigHandler)
  .route('/', XAmzTargetAwsProton20200720GetServiceTemplateHandler)
  .route('/', XAmzTargetAwsProton20200720GetServiceTemplateVersionHandler)
  .route('/', XAmzTargetAwsProton20200720GetTemplateSyncConfigHandler)
  .route('/', XAmzTargetAwsProton20200720GetTemplateSyncStatusHandler)
  .route('/', XAmzTargetAwsProton20200720ListComponentOutputsHandler)
  .route('/', XAmzTargetAwsProton20200720ListComponentProvisionedResourcesHandler)
  .route('/', XAmzTargetAwsProton20200720ListComponentsHandler)
  .route('/', XAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsHandler)
  .route('/', XAmzTargetAwsProton20200720ListEnvironmentOutputsHandler)
  .route('/', XAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesHandler)
  .route('/', XAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsHandler)
  .route('/', XAmzTargetAwsProton20200720ListEnvironmentTemplatesHandler)
  .route('/', XAmzTargetAwsProton20200720ListEnvironmentsHandler)
  .route('/', XAmzTargetAwsProton20200720ListRepositoriesHandler)
  .route('/', XAmzTargetAwsProton20200720ListRepositorySyncDefinitionsHandler)
  .route('/', XAmzTargetAwsProton20200720ListServiceInstanceOutputsHandler)
  .route('/', XAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesHandler)
  .route('/', XAmzTargetAwsProton20200720ListServiceInstancesHandler)
  .route('/', XAmzTargetAwsProton20200720ListServicePipelineOutputsHandler)
  .route('/', XAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesHandler)
  .route('/', XAmzTargetAwsProton20200720ListServiceTemplateVersionsHandler)
  .route('/', XAmzTargetAwsProton20200720ListServiceTemplatesHandler)
  .route('/', XAmzTargetAwsProton20200720ListServicesHandler)
  .route('/', XAmzTargetAwsProton20200720ListTagsForResourceHandler)
  .route('/', XAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeHandler)
  .route('/', XAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionHandler)
  .route('/', XAmzTargetAwsProton20200720TagResourceHandler)
  .route('/', XAmzTargetAwsProton20200720UntagResourceHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateAccountSettingsHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateComponentHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateEnvironmentHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateEnvironmentTemplateHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateServiceHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateServiceInstanceHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateServicePipelineHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateServiceSyncBlockerHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateServiceSyncConfigHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateServiceTemplateHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateServiceTemplateVersionHandler)
  .route('/', XAmzTargetAwsProton20200720UpdateTemplateSyncConfigHandler)

export default app
