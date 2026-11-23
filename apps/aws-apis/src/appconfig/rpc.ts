import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApplications(
  args: InferRequestType<typeof client.applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications.$get(args, options))
}

export async function postApplications(
  args: InferRequestType<typeof client.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications.$post(args, options))
}

export async function getApplicationsApplicationIdConfigurationprofiles(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].configurationprofiles.$get(args, options),
  )
}

export async function postApplicationsApplicationIdConfigurationprofiles(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].configurationprofiles.$post(args, options),
  )
}

export async function getDeploymentstrategies(
  args: InferRequestType<typeof client.deploymentstrategies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploymentstrategies.$get(args, options))
}

export async function postDeploymentstrategies(
  args: InferRequestType<typeof client.deploymentstrategies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deploymentstrategies.$post(args, options))
}

export async function getApplicationsApplicationIdEnvironments(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':ApplicationId'].environments.$get(args, options))
}

export async function postApplicationsApplicationIdEnvironments(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].environments.$post(args, options),
  )
}

export async function getExtensions(
  args: InferRequestType<typeof client.extensions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.$get(args, options))
}

export async function postExtensions(
  args: InferRequestType<typeof client.extensions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions.$post(args, options))
}

export async function getExtensionassociations(
  args: InferRequestType<typeof client.extensionassociations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensionassociations.$get(args, options))
}

export async function postExtensionassociations(
  args: InferRequestType<typeof client.extensionassociations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensionassociations.$post(args, options))
}

export async function postApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentType(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions#Content-Type']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].configurationprofiles[':ConfigurationProfileId'][
      'hostedconfigurationversions#Content-Type'
    ].$post(args, options),
  )
}

export async function getApplicationsApplicationId(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':ApplicationId'].$get(args, options))
}

export async function deleteApplicationsApplicationId(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':ApplicationId'].$delete(args, options))
}

export async function patchApplicationsApplicationId(
  args: InferRequestType<(typeof client.applications)[':ApplicationId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':ApplicationId'].$patch(args, options))
}

export async function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileId(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].configurationprofiles[':ConfigurationProfileId'].$get(
      args,
      options,
    ),
  )
}

export async function deleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileId(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].configurationprofiles[':ConfigurationProfileId'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApplicationsApplicationIdConfigurationprofilesConfigurationProfileId(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].configurationprofiles[':ConfigurationProfileId'].$patch(
      args,
      options,
    ),
  )
}

export async function deleteDeployementstrategiesDeploymentStrategyId(
  args: InferRequestType<(typeof client.deployementstrategies)[':DeploymentStrategyId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deployementstrategies[':DeploymentStrategyId'].$delete(args, options),
  )
}

export async function getApplicationsApplicationIdEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].environments[':EnvironmentId'].$get(args, options),
  )
}

export async function deleteApplicationsApplicationIdEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].environments[':EnvironmentId'].$delete(args, options),
  )
}

export async function patchApplicationsApplicationIdEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].environments[':EnvironmentId'].$patch(args, options),
  )
}

export async function getExtensionsExtensionIdentifier(
  args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions[':ExtensionIdentifier'].$get(args, options))
}

export async function deleteExtensionsExtensionIdentifier(
  args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions[':ExtensionIdentifier'].$delete(args, options))
}

export async function patchExtensionsExtensionIdentifier(
  args: InferRequestType<(typeof client.extensions)[':ExtensionIdentifier']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions[':ExtensionIdentifier'].$patch(args, options))
}

export async function getExtensionassociationsExtensionAssociationId(
  args: InferRequestType<(typeof client.extensionassociations)[':ExtensionAssociationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.extensionassociations[':ExtensionAssociationId'].$get(args, options),
  )
}

export async function deleteExtensionassociationsExtensionAssociationId(
  args: InferRequestType<
    (typeof client.extensionassociations)[':ExtensionAssociationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.extensionassociations[':ExtensionAssociationId'].$delete(args, options),
  )
}

export async function patchExtensionassociationsExtensionAssociationId(
  args: InferRequestType<
    (typeof client.extensionassociations)[':ExtensionAssociationId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.extensionassociations[':ExtensionAssociationId'].$patch(args, options),
  )
}

export async function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumber(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].configurationprofiles[
      ':ConfigurationProfileId'
    ].hostedconfigurationversions[':VersionNumber'].$get(args, options),
  )
}

export async function deleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumber(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions'][':VersionNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].configurationprofiles[
      ':ConfigurationProfileId'
    ].hostedconfigurationversions[':VersionNumber'].$delete(args, options),
  )
}

export async function getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientId(
  args: InferRequestType<
    (typeof client.applications)[':Application']['environments'][':Environment']['configurations'][':Configuration#client_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':Application'].environments[':Environment'].configurations[
      ':Configuration#client_id'
    ].$get(args, options),
  )
}

export async function getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumber(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments[
      ':DeploymentNumber'
    ].$get(args, options),
  )
}

export async function deleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumber(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments'][':DeploymentNumber']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments[
      ':DeploymentNumber'
    ].$delete(args, options),
  )
}

export async function getDeploymentstrategiesDeploymentStrategyId(
  args: InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentstrategies[':DeploymentStrategyId'].$get(args, options),
  )
}

export async function patchDeploymentstrategiesDeploymentStrategyId(
  args: InferRequestType<(typeof client.deploymentstrategies)[':DeploymentStrategyId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentstrategies[':DeploymentStrategyId'].$patch(args, options),
  )
}

export async function getApplicationsApplicationIdEnvironmentsEnvironmentIdDeployments(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments.$get(
      args,
      options,
    ),
  )
}

export async function postApplicationsApplicationIdEnvironmentsEnvironmentIdDeployments(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['environments'][':EnvironmentId']['deployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].environments[':EnvironmentId'].deployments.$post(
      args,
      options,
    ),
  )
}

export async function getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversions(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['hostedconfigurationversions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].configurationprofiles[
      ':ConfigurationProfileId'
    ].hostedconfigurationversions.$get(args, options),
  )
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
}

export async function postApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersion(
  args: InferRequestType<
    (typeof client.applications)[':ApplicationId']['configurationprofiles'][':ConfigurationProfileId']['validators#configuration_version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':ApplicationId'].configurationprofiles[':ConfigurationProfileId'][
      'validators#configuration_version'
    ].$post(args, options),
  )
}
