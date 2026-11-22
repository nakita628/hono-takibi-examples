import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.AcceptEnvironmentAccountConnection'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAwsProton20200720CancelComponentDeployment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CancelComponentDeployment'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CancelEnvironmentDeployment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CancelEnvironmentDeployment'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CancelServiceInstanceDeployment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CancelServiceInstanceDeployment'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CancelServicePipelineDeployment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CancelServicePipelineDeployment'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CreateComponent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateComponent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateComponent'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CreateEnvironment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateEnvironment'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CreateEnvironmentAccountConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateEnvironmentAccountConnection'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAwsProton20200720CreateEnvironmentTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CreateEnvironmentTemplateVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateEnvironmentTemplateVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CreateRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateRepository'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CreateService(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.CreateService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateService'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CreateServiceInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateServiceInstance'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CreateServiceSyncConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateServiceSyncConfig'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CreateServiceTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateServiceTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CreateServiceTemplateVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateServiceTemplateVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720CreateTemplateSyncConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.CreateTemplateSyncConfig'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720DeleteComponent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteComponent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.DeleteComponent'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720DeleteEnvironment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.DeleteEnvironment'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentAccountConnection'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAwsProton20200720DeleteEnvironmentTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720DeleteEnvironmentTemplateVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.DeleteEnvironmentTemplateVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720DeleteRepository(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteRepository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.DeleteRepository'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720DeleteService(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.DeleteService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.DeleteService'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720DeleteServiceSyncConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.DeleteServiceSyncConfig'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720DeleteServiceTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720DeleteServiceTemplateVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.DeleteServiceTemplateVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720DeleteTemplateSyncConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.DeleteTemplateSyncConfig'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetAccountSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetAccountSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetAccountSettings'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetComponent(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetComponent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetComponent'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetEnvironment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetEnvironment'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetEnvironmentAccountConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetEnvironmentAccountConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetEnvironmentTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetEnvironmentTemplateVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetEnvironmentTemplateVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetRepository(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetRepository']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetRepository'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetRepositorySyncStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetRepositorySyncStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetResourcesSummary(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetResourcesSummary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetResourcesSummary'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetService(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.GetService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetService'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetServiceInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetServiceInstance'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetServiceInstanceSyncStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetServiceInstanceSyncStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetServiceSyncBlockerSummary(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetServiceSyncBlockerSummary'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetServiceSyncConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetServiceSyncConfig'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetServiceTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetServiceTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetServiceTemplateVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetServiceTemplateVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetTemplateSyncConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetTemplateSyncConfig'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720GetTemplateSyncStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.GetTemplateSyncStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListComponentOutputs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentOutputs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListComponentOutputs'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListComponentProvisionedResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListComponentProvisionedResources'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAwsProton20200720ListComponents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListComponents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListComponents'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListEnvironmentAccountConnections(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListEnvironmentAccountConnections'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAwsProton20200720ListEnvironmentOutputs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListEnvironmentOutputs'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListEnvironmentProvisionedResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListEnvironmentProvisionedResources'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAwsProton20200720ListEnvironmentTemplateVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplateVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListEnvironmentTemplates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListEnvironmentTemplates'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListEnvironments(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListEnvironments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListEnvironments'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListRepositories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListRepositories'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListRepositorySyncDefinitions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListRepositorySyncDefinitions'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListServiceInstanceOutputs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListServiceInstanceOutputs'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListServiceInstanceProvisionedResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListServiceInstanceProvisionedResources'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAwsProton20200720ListServiceInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListServiceInstances'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListServicePipelineOutputs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListServicePipelineOutputs'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListServicePipelineProvisionedResources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListServicePipelineProvisionedResources'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAwsProton20200720ListServiceTemplateVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListServiceTemplateVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListServiceTemplates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListServiceTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListServiceTemplates'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListServices(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.ListServices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListServices'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChange(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.NotifyResourceDeploymentStatusChange'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAwsProton20200720RejectEnvironmentAccountConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.RejectEnvironmentAccountConnection'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAwsProton20200720TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateAccountSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateAccountSettings'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateComponent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateComponent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateComponent'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateEnvironment(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateEnvironment'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentAccountConnection'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateEnvironmentTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateEnvironmentTemplateVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateEnvironmentTemplateVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateService(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AwsProton20200720.UpdateService']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateService'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateServiceInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateServiceInstance'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateServicePipeline(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateServicePipeline'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateServiceSyncBlocker(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncBlocker'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateServiceSyncConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateServiceSyncConfig'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateServiceTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateServiceTemplateVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateServiceTemplateVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAwsProton20200720UpdateTemplateSyncConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AwsProton20200720.UpdateTemplateSyncConfig'].$post(args, options),
  )
}
