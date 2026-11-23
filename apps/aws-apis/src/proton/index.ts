import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionHandler,
  xAmzTargetAwsProton20200720CancelComponentDeploymentHandler,
  xAmzTargetAwsProton20200720CancelEnvironmentDeploymentHandler,
  xAmzTargetAwsProton20200720CancelServiceInstanceDeploymentHandler,
  xAmzTargetAwsProton20200720CancelServicePipelineDeploymentHandler,
  xAmzTargetAwsProton20200720CreateComponentHandler,
  xAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionHandler,
  xAmzTargetAwsProton20200720CreateEnvironmentHandler,
  xAmzTargetAwsProton20200720CreateEnvironmentTemplateHandler,
  xAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionHandler,
  xAmzTargetAwsProton20200720CreateRepositoryHandler,
  xAmzTargetAwsProton20200720CreateServiceHandler,
  xAmzTargetAwsProton20200720CreateServiceInstanceHandler,
  xAmzTargetAwsProton20200720CreateServiceSyncConfigHandler,
  xAmzTargetAwsProton20200720CreateServiceTemplateHandler,
  xAmzTargetAwsProton20200720CreateServiceTemplateVersionHandler,
  xAmzTargetAwsProton20200720CreateTemplateSyncConfigHandler,
  xAmzTargetAwsProton20200720DeleteComponentHandler,
  xAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionHandler,
  xAmzTargetAwsProton20200720DeleteEnvironmentHandler,
  xAmzTargetAwsProton20200720DeleteEnvironmentTemplateHandler,
  xAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionHandler,
  xAmzTargetAwsProton20200720DeleteRepositoryHandler,
  xAmzTargetAwsProton20200720DeleteServiceHandler,
  xAmzTargetAwsProton20200720DeleteServiceSyncConfigHandler,
  xAmzTargetAwsProton20200720DeleteServiceTemplateHandler,
  xAmzTargetAwsProton20200720DeleteServiceTemplateVersionHandler,
  xAmzTargetAwsProton20200720DeleteTemplateSyncConfigHandler,
  xAmzTargetAwsProton20200720GetAccountSettingsHandler,
  xAmzTargetAwsProton20200720GetComponentHandler,
  xAmzTargetAwsProton20200720GetEnvironmentAccountConnectionHandler,
  xAmzTargetAwsProton20200720GetEnvironmentHandler,
  xAmzTargetAwsProton20200720GetEnvironmentTemplateHandler,
  xAmzTargetAwsProton20200720GetEnvironmentTemplateVersionHandler,
  xAmzTargetAwsProton20200720GetRepositoryHandler,
  xAmzTargetAwsProton20200720GetRepositorySyncStatusHandler,
  xAmzTargetAwsProton20200720GetResourcesSummaryHandler,
  xAmzTargetAwsProton20200720GetServiceHandler,
  xAmzTargetAwsProton20200720GetServiceInstanceHandler,
  xAmzTargetAwsProton20200720GetServiceInstanceSyncStatusHandler,
  xAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryHandler,
  xAmzTargetAwsProton20200720GetServiceSyncConfigHandler,
  xAmzTargetAwsProton20200720GetServiceTemplateHandler,
  xAmzTargetAwsProton20200720GetServiceTemplateVersionHandler,
  xAmzTargetAwsProton20200720GetTemplateSyncConfigHandler,
  xAmzTargetAwsProton20200720GetTemplateSyncStatusHandler,
  xAmzTargetAwsProton20200720ListComponentOutputsHandler,
  xAmzTargetAwsProton20200720ListComponentProvisionedResourcesHandler,
  xAmzTargetAwsProton20200720ListComponentsHandler,
  xAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsHandler,
  xAmzTargetAwsProton20200720ListEnvironmentOutputsHandler,
  xAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesHandler,
  xAmzTargetAwsProton20200720ListEnvironmentsHandler,
  xAmzTargetAwsProton20200720ListEnvironmentTemplatesHandler,
  xAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsHandler,
  xAmzTargetAwsProton20200720ListRepositoriesHandler,
  xAmzTargetAwsProton20200720ListRepositorySyncDefinitionsHandler,
  xAmzTargetAwsProton20200720ListServiceInstanceOutputsHandler,
  xAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesHandler,
  xAmzTargetAwsProton20200720ListServiceInstancesHandler,
  xAmzTargetAwsProton20200720ListServicePipelineOutputsHandler,
  xAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesHandler,
  xAmzTargetAwsProton20200720ListServicesHandler,
  xAmzTargetAwsProton20200720ListServiceTemplatesHandler,
  xAmzTargetAwsProton20200720ListServiceTemplateVersionsHandler,
  xAmzTargetAwsProton20200720ListTagsForResourceHandler,
  xAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeHandler,
  xAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionHandler,
  xAmzTargetAwsProton20200720TagResourceHandler,
  xAmzTargetAwsProton20200720UntagResourceHandler,
  xAmzTargetAwsProton20200720UpdateAccountSettingsHandler,
  xAmzTargetAwsProton20200720UpdateComponentHandler,
  xAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionHandler,
  xAmzTargetAwsProton20200720UpdateEnvironmentHandler,
  xAmzTargetAwsProton20200720UpdateEnvironmentTemplateHandler,
  xAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionHandler,
  xAmzTargetAwsProton20200720UpdateServiceHandler,
  xAmzTargetAwsProton20200720UpdateServiceInstanceHandler,
  xAmzTargetAwsProton20200720UpdateServicePipelineHandler,
  xAmzTargetAwsProton20200720UpdateServiceSyncBlockerHandler,
  xAmzTargetAwsProton20200720UpdateServiceSyncConfigHandler,
  xAmzTargetAwsProton20200720UpdateServiceTemplateHandler,
  xAmzTargetAwsProton20200720UpdateServiceTemplateVersionHandler,
  xAmzTargetAwsProton20200720UpdateTemplateSyncConfigHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionHandler)
  .route('/', xAmzTargetAwsProton20200720CancelComponentDeploymentHandler)
  .route('/', xAmzTargetAwsProton20200720CancelEnvironmentDeploymentHandler)
  .route('/', xAmzTargetAwsProton20200720CancelServiceInstanceDeploymentHandler)
  .route('/', xAmzTargetAwsProton20200720CancelServicePipelineDeploymentHandler)
  .route('/', xAmzTargetAwsProton20200720CreateComponentHandler)
  .route('/', xAmzTargetAwsProton20200720CreateEnvironmentHandler)
  .route('/', xAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionHandler)
  .route('/', xAmzTargetAwsProton20200720CreateEnvironmentTemplateHandler)
  .route('/', xAmzTargetAwsProton20200720CreateEnvironmentTemplateVersionHandler)
  .route('/', xAmzTargetAwsProton20200720CreateRepositoryHandler)
  .route('/', xAmzTargetAwsProton20200720CreateServiceHandler)
  .route('/', xAmzTargetAwsProton20200720CreateServiceInstanceHandler)
  .route('/', xAmzTargetAwsProton20200720CreateServiceSyncConfigHandler)
  .route('/', xAmzTargetAwsProton20200720CreateServiceTemplateHandler)
  .route('/', xAmzTargetAwsProton20200720CreateServiceTemplateVersionHandler)
  .route('/', xAmzTargetAwsProton20200720CreateTemplateSyncConfigHandler)
  .route('/', xAmzTargetAwsProton20200720DeleteComponentHandler)
  .route('/', xAmzTargetAwsProton20200720DeleteEnvironmentHandler)
  .route('/', xAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionHandler)
  .route('/', xAmzTargetAwsProton20200720DeleteEnvironmentTemplateHandler)
  .route('/', xAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersionHandler)
  .route('/', xAmzTargetAwsProton20200720DeleteRepositoryHandler)
  .route('/', xAmzTargetAwsProton20200720DeleteServiceHandler)
  .route('/', xAmzTargetAwsProton20200720DeleteServiceSyncConfigHandler)
  .route('/', xAmzTargetAwsProton20200720DeleteServiceTemplateHandler)
  .route('/', xAmzTargetAwsProton20200720DeleteServiceTemplateVersionHandler)
  .route('/', xAmzTargetAwsProton20200720DeleteTemplateSyncConfigHandler)
  .route('/', xAmzTargetAwsProton20200720GetAccountSettingsHandler)
  .route('/', xAmzTargetAwsProton20200720GetComponentHandler)
  .route('/', xAmzTargetAwsProton20200720GetEnvironmentHandler)
  .route('/', xAmzTargetAwsProton20200720GetEnvironmentAccountConnectionHandler)
  .route('/', xAmzTargetAwsProton20200720GetEnvironmentTemplateHandler)
  .route('/', xAmzTargetAwsProton20200720GetEnvironmentTemplateVersionHandler)
  .route('/', xAmzTargetAwsProton20200720GetRepositoryHandler)
  .route('/', xAmzTargetAwsProton20200720GetRepositorySyncStatusHandler)
  .route('/', xAmzTargetAwsProton20200720GetResourcesSummaryHandler)
  .route('/', xAmzTargetAwsProton20200720GetServiceHandler)
  .route('/', xAmzTargetAwsProton20200720GetServiceInstanceHandler)
  .route('/', xAmzTargetAwsProton20200720GetServiceInstanceSyncStatusHandler)
  .route('/', xAmzTargetAwsProton20200720GetServiceSyncBlockerSummaryHandler)
  .route('/', xAmzTargetAwsProton20200720GetServiceSyncConfigHandler)
  .route('/', xAmzTargetAwsProton20200720GetServiceTemplateHandler)
  .route('/', xAmzTargetAwsProton20200720GetServiceTemplateVersionHandler)
  .route('/', xAmzTargetAwsProton20200720GetTemplateSyncConfigHandler)
  .route('/', xAmzTargetAwsProton20200720GetTemplateSyncStatusHandler)
  .route('/', xAmzTargetAwsProton20200720ListComponentOutputsHandler)
  .route('/', xAmzTargetAwsProton20200720ListComponentProvisionedResourcesHandler)
  .route('/', xAmzTargetAwsProton20200720ListComponentsHandler)
  .route('/', xAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsHandler)
  .route('/', xAmzTargetAwsProton20200720ListEnvironmentOutputsHandler)
  .route('/', xAmzTargetAwsProton20200720ListEnvironmentProvisionedResourcesHandler)
  .route('/', xAmzTargetAwsProton20200720ListEnvironmentTemplateVersionsHandler)
  .route('/', xAmzTargetAwsProton20200720ListEnvironmentTemplatesHandler)
  .route('/', xAmzTargetAwsProton20200720ListEnvironmentsHandler)
  .route('/', xAmzTargetAwsProton20200720ListRepositoriesHandler)
  .route('/', xAmzTargetAwsProton20200720ListRepositorySyncDefinitionsHandler)
  .route('/', xAmzTargetAwsProton20200720ListServiceInstanceOutputsHandler)
  .route('/', xAmzTargetAwsProton20200720ListServiceInstanceProvisionedResourcesHandler)
  .route('/', xAmzTargetAwsProton20200720ListServiceInstancesHandler)
  .route('/', xAmzTargetAwsProton20200720ListServicePipelineOutputsHandler)
  .route('/', xAmzTargetAwsProton20200720ListServicePipelineProvisionedResourcesHandler)
  .route('/', xAmzTargetAwsProton20200720ListServiceTemplateVersionsHandler)
  .route('/', xAmzTargetAwsProton20200720ListServiceTemplatesHandler)
  .route('/', xAmzTargetAwsProton20200720ListServicesHandler)
  .route('/', xAmzTargetAwsProton20200720ListTagsForResourceHandler)
  .route('/', xAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeHandler)
  .route('/', xAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionHandler)
  .route('/', xAmzTargetAwsProton20200720TagResourceHandler)
  .route('/', xAmzTargetAwsProton20200720UntagResourceHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateAccountSettingsHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateComponentHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateEnvironmentHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateEnvironmentTemplateHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersionHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateServiceHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateServiceInstanceHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateServicePipelineHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateServiceSyncBlockerHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateServiceSyncConfigHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateServiceTemplateHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateServiceTemplateVersionHandler)
  .route('/', xAmzTargetAwsProton20200720UpdateTemplateSyncConfigHandler)

export default app
