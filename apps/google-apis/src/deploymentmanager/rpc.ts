import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypes(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes.$get(args, options),
  )
}

export async function postDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypes(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes.$post(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
      ':compositeType'
    ].$get(args, options),
  )
}

export async function putDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
      ':compositeType'
    ].$put(args, options),
  )
}

export async function deleteDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
      ':compositeType'
    ].$delete(args, options),
  )
}

export async function patchDeploymentmanagerV2betaProjectsProjectGlobalCompositeTypesCompositeType(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['compositeTypes'][':compositeType']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.compositeTypes[
      ':compositeType'
    ].$patch(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalDeployments(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments.$get(args, options),
  )
}

export async function postDeploymentmanagerV2betaProjectsProjectGlobalDeployments(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments.$post(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[':deployment'].$get(
      args,
      options,
    ),
  )
}

export async function putDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[':deployment'].$put(
      args,
      options,
    ),
  )
}

export async function deleteDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[':deployment'].$delete(
      args,
      options,
    ),
  )
}

export async function patchDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeployment(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[':deployment'].$patch(
      args,
      options,
    ),
  )
}

export async function postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentCancelPreview(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['cancelPreview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[
      ':deployment'
    ].cancelPreview.$post(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifests(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[
      ':deployment'
    ].manifests.$get(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentManifestsManifest(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['manifests'][':manifest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[
      ':deployment'
    ].manifests[':manifest'].$get(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResources(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[
      ':deployment'
    ].resources.$get(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentResourcesResource(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['resources'][':resource']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[
      ':deployment'
    ].resources[':resource'].$get(args, options),
  )
}

export async function postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsDeploymentStop(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':deployment']['stop']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[
      ':deployment'
    ].stop.$post(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceGetIamPolicy(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['getIamPolicy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[
      ':resource'
    ].getIamPolicy.$get(args, options),
  )
}

export async function postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceSetIamPolicy(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['setIamPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[
      ':resource'
    ].setIamPolicy.$post(args, options),
  )
}

export async function postDeploymentmanagerV2betaProjectsProjectGlobalDeploymentsResourceTestIamPermissions(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['deployments'][':resource']['testIamPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.deployments[
      ':resource'
    ].testIamPermissions.$post(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalOperations(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.operations.$get(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalOperationsOperation(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['operations'][':operation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.operations[':operation'].$get(
      args,
      options,
    ),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProviders(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.typeProviders.$get(args, options),
  )
}

export async function postDeploymentmanagerV2betaProjectsProjectGlobalTypeProviders(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.typeProviders.$post(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[':typeProvider'].$get(
      args,
      options,
    ),
  )
}

export async function putDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[':typeProvider'].$put(
      args,
      options,
    ),
  )
}

export async function deleteDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
      ':typeProvider'
    ].$delete(args, options),
  )
}

export async function patchDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProvider(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
      ':typeProvider'
    ].$patch(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypes(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
      ':typeProvider'
    ].types.$get(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalTypeProvidersTypeProviderTypesType(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['typeProviders'][':typeProvider']['types'][':type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.typeProviders[
      ':typeProvider'
    ].types[':type'].$get(args, options),
  )
}

export async function getDeploymentmanagerV2betaProjectsProjectGlobalTypes(
  args: InferRequestType<
    (typeof client.deploymentmanager.v2beta.projects)[':project']['global']['types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.deploymentmanager.v2beta.projects[':project'].global.types.$get(args, options),
  )
}
