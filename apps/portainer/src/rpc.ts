import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAuth(
  args: InferRequestType<typeof client.auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.$post(args, options))
}

export async function postAuthLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.logout.$post(undefined, options))
}

export async function postAuthOauthValidate(
  args: InferRequestType<typeof client.auth.oauth.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.oauth.validate.$post(args, options))
}

export async function postBackup(
  args: InferRequestType<typeof client.backup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.backup.$post(args, options))
}

export async function getCustomTemplates(
  args: InferRequestType<typeof client.custom_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_templates.$get(args, options))
}

export async function getCustomTemplatesId(
  args: InferRequestType<(typeof client.custom_templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_templates[':id'].$get(args, options))
}

export async function putCustomTemplatesId(
  args: InferRequestType<(typeof client.custom_templates)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_templates[':id'].$put(args, options))
}

export async function deleteCustomTemplatesId(
  args: InferRequestType<(typeof client.custom_templates)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_templates[':id'].$delete(args, options))
}

export async function getCustomTemplatesIdFile(
  args: InferRequestType<(typeof client.custom_templates)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_templates[':id'].file.$get(args, options))
}

export async function putCustomTemplatesIdGitFetch(
  args: InferRequestType<(typeof client.custom_templates)[':id']['git_fetch']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_templates[':id'].git_fetch.$put(args, options))
}

export async function postCustomTemplatesCreateFile(
  args: InferRequestType<typeof client.custom_templates.create.file.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_templates.create.file.$post(args, options))
}

export async function postCustomTemplatesCreateRepository(
  args: InferRequestType<typeof client.custom_templates.create.repository.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_templates.create.repository.$post(args, options))
}

export async function postCustomTemplatesCreateString(
  args: InferRequestType<typeof client.custom_templates.create.string.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_templates.create.string.$post(args, options))
}

export async function getDockerEnvironmentIdContainersContainerIdGpus(
  args: InferRequestType<
    (typeof client.docker)[':environmentId']['containers'][':containerId']['gpus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.docker[':environmentId'].containers[':containerId'].gpus.$get(args, options),
  )
}

export async function getDockerEnvironmentIdDashboard(
  args: InferRequestType<(typeof client.docker)[':environmentId']['dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docker[':environmentId'].dashboard.$get(args, options))
}

export async function getDockerEnvironmentIdImages(
  args: InferRequestType<(typeof client.docker)[':environmentId']['images']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docker[':environmentId'].images.$get(args, options))
}

export async function getEdgeGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.edge_groups.$get(undefined, options))
}

export async function postEdgeGroups(
  args: InferRequestType<typeof client.edge_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_groups.$post(args, options))
}

export async function getEdgeGroupsId(
  args: InferRequestType<(typeof client.edge_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_groups[':id'].$get(args, options))
}

export async function putEdgeGroupsId(
  args: InferRequestType<(typeof client.edge_groups)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_groups[':id'].$put(args, options))
}

export async function deleteEdgeGroupsId(
  args: InferRequestType<(typeof client.edge_groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_groups[':id'].$delete(args, options))
}

export async function getEdgeJobs(options?: ClientRequestOptions) {
  return await parseResponse(client.edge_jobs.$get(undefined, options))
}

export async function getEdgeJobsId(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_jobs[':id'].$get(args, options))
}

export async function putEdgeJobsId(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_jobs[':id'].$put(args, options))
}

export async function deleteEdgeJobsId(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_jobs[':id'].$delete(args, options))
}

export async function getEdgeJobsIdFile(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_jobs[':id'].file.$get(args, options))
}

export async function getEdgeJobsIdTasks(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_jobs[':id'].tasks.$get(args, options))
}

export async function getEdgeJobsIdTasksTaskIDLogs(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_jobs[':id'].tasks[':taskID'].logs.$get(args, options))
}

export async function postEdgeJobsIdTasksTaskIDLogs(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_jobs[':id'].tasks[':taskID'].logs.$post(args, options))
}

export async function deleteEdgeJobsIdTasksTaskIDLogs(
  args: InferRequestType<(typeof client.edge_jobs)[':id']['tasks'][':taskID']['logs']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_jobs[':id'].tasks[':taskID'].logs.$delete(args, options))
}

export async function postEdgeJobsCreateFile(
  args: InferRequestType<typeof client.edge_jobs.create.file.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_jobs.create.file.$post(args, options))
}

export async function postEdgeJobsCreateString(
  args: InferRequestType<typeof client.edge_jobs.create.string.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_jobs.create.string.$post(args, options))
}

export async function getEdgeStacks(
  args: InferRequestType<typeof client.edge_stacks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_stacks.$get(args, options))
}

export async function getEdgeStacksId(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_stacks[':id'].$get(args, options))
}

export async function putEdgeStacksId(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_stacks[':id'].$put(args, options))
}

export async function deleteEdgeStacksId(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_stacks[':id'].$delete(args, options))
}

export async function getEdgeStacksIdFile(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_stacks[':id'].file.$get(args, options))
}

export async function putEdgeStacksIdStatus(
  args: InferRequestType<(typeof client.edge_stacks)[':id']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_stacks[':id'].status.$put(args, options))
}

export async function postEdgeStacksCreateFile(
  args: InferRequestType<typeof client.edge_stacks.create.file.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_stacks.create.file.$post(args, options))
}

export async function postEdgeStacksCreateRepository(
  args: InferRequestType<typeof client.edge_stacks.create.repository.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_stacks.create.repository.$post(args, options))
}

export async function postEdgeStacksCreateString(
  args: InferRequestType<typeof client.edge_stacks.create.string.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.edge_stacks.create.string.$post(args, options))
}

export async function getEndpointGroups(
  args: InferRequestType<typeof client.endpoint_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoint_groups.$get(args, options))
}

export async function postEndpointGroups(
  args: InferRequestType<typeof client.endpoint_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoint_groups.$post(args, options))
}

export async function getEndpointGroupsId(
  args: InferRequestType<(typeof client.endpoint_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoint_groups[':id'].$get(args, options))
}

export async function putEndpointGroupsId(
  args: InferRequestType<(typeof client.endpoint_groups)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoint_groups[':id'].$put(args, options))
}

export async function deleteEndpointGroupsId(
  args: InferRequestType<(typeof client.endpoint_groups)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoint_groups[':id'].$delete(args, options))
}

export async function putEndpointGroupsIdEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoint_groups[':id'].endpoints[':endpointId'].$put(args, options),
  )
}

export async function deleteEndpointGroupsIdEndpointsEndpointId(
  args: InferRequestType<
    (typeof client.endpoint_groups)[':id']['endpoints'][':endpointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoint_groups[':id'].endpoints[':endpointId'].$delete(args, options),
  )
}

export async function getEndpoints(
  args: InferRequestType<typeof client.endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.$get(args, options))
}

export async function postEndpoints(
  args: InferRequestType<typeof client.endpoints.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.$post(args, options))
}

export async function deleteEndpoints(
  args: InferRequestType<typeof client.endpoints.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.$delete(args, options))
}

export async function getEndpointsId(
  args: InferRequestType<(typeof client.endpoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].$get(args, options))
}

export async function putEndpointsId(
  args: InferRequestType<(typeof client.endpoints)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].$put(args, options))
}

export async function deleteEndpointsId(
  args: InferRequestType<(typeof client.endpoints)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].$delete(args, options))
}

export async function putEndpointsIdAssociation(
  args: InferRequestType<(typeof client.endpoints)[':id']['association']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].association.$put(args, options))
}

export async function postEndpointsIdDockerV2BrowsePut(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['docker']['v2']['browse']['put']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].docker.v2.browse.put.$post(args, options))
}

export async function getEndpointsIdDockerhubRegistryId(
  args: InferRequestType<(typeof client.endpoints)[':id']['dockerhub'][':registryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].dockerhub[':registryId'].$get(args, options))
}

export async function postEndpointsIdEdgeJobsJobIDLogs(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['edge']['jobs'][':jobID']['logs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].edge.jobs[':jobID'].logs.$post(args, options))
}

export async function getEndpointsIdEdgeStacksStackId(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['stacks'][':stackId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].edge.stacks[':stackId'].$get(args, options))
}

export async function getEndpointsIdEdgeStatus(
  args: InferRequestType<(typeof client.endpoints)[':id']['edge']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].edge.status.$get(args, options))
}

export async function putEndpointsIdForceupdateservice(
  args: InferRequestType<(typeof client.endpoints)[':id']['forceupdateservice']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].forceupdateservice.$put(args, options))
}

export async function getEndpointsIdKubernetesHelm(
  args: InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].kubernetes.helm.$get(args, options))
}

export async function postEndpointsIdKubernetesHelm(
  args: InferRequestType<(typeof client.endpoints)[':id']['kubernetes']['helm']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].kubernetes.helm.$post(args, options))
}

export async function getEndpointsIdKubernetesHelmRelease(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints[':id'].kubernetes.helm[':release'].$get(args, options),
  )
}

export async function deleteEndpointsIdKubernetesHelmRelease(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints[':id'].kubernetes.helm[':release'].$delete(args, options),
  )
}

export async function getEndpointsIdKubernetesHelmReleaseHistory(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints[':id'].kubernetes.helm[':release'].history.$get(args, options),
  )
}

export async function postEndpointsIdKubernetesHelmReleaseRollback(
  args: InferRequestType<
    (typeof client.endpoints)[':id']['kubernetes']['helm'][':release']['rollback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.endpoints[':id'].kubernetes.helm[':release'].rollback.$post(args, options),
  )
}

export async function getEndpointsIdRegistries(
  args: InferRequestType<(typeof client.endpoints)[':id']['registries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].registries.$get(args, options))
}

export async function putEndpointsIdRegistriesRegistryId(
  args: InferRequestType<(typeof client.endpoints)[':id']['registries'][':registryId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].registries[':registryId'].$put(args, options))
}

export async function putEndpointsIdSettings(
  args: InferRequestType<(typeof client.endpoints)[':id']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].settings.$put(args, options))
}

export async function postEndpointsIdSnapshot(
  args: InferRequestType<(typeof client.endpoints)[':id']['snapshot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints[':id'].snapshot.$post(args, options))
}

export async function postEndpointsDelete(
  args: InferRequestType<typeof client.endpoints.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.delete.$post(args, options))
}

export async function postEndpointsGlobalKey(options?: ClientRequestOptions) {
  return await parseResponse(client.endpoints['global-key'].$post(undefined, options))
}

export async function putEndpointsRelations(
  args: InferRequestType<typeof client.endpoints.relations.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.endpoints.relations.$put(args, options))
}

export async function postEndpointsSnapshot(options?: ClientRequestOptions) {
  return await parseResponse(client.endpoints.snapshot.$post(undefined, options))
}

export async function getEndpointsSummary(options?: ClientRequestOptions) {
  return await parseResponse(client.endpoints.summary.$get(undefined, options))
}

export async function postGitopsRepoFilePreview(
  args: InferRequestType<typeof client.gitops.repo.file.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.repo.file.preview.$post(args, options))
}

export async function getGitopsSources(
  args: InferRequestType<typeof client.gitops.sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.sources.$get(args, options))
}

export async function getGitopsSourcesId(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.sources[':id'].$get(args, options))
}

export async function putGitopsSourcesId(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.sources[':id'].$put(args, options))
}

export async function deleteGitopsSourcesId(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.sources[':id'].$delete(args, options))
}

export async function putGitopsSourcesIdAccess(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['access']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.sources[':id'].access.$put(args, options))
}

export async function postGitopsSourcesIdTest(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.sources[':id'].test.$post(args, options))
}

export async function getGitopsSourcesIdWorkflows(
  args: InferRequestType<(typeof client.gitops.sources)[':id']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.sources[':id'].workflows.$get(args, options))
}

export async function postGitopsSourcesGit(
  args: InferRequestType<typeof client.gitops.sources.git.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.sources.git.$post(args, options))
}

export async function getGitopsSourcesSummary(options?: ClientRequestOptions) {
  return await parseResponse(client.gitops.sources.summary.$get(undefined, options))
}

export async function postGitopsSourcesTest(
  args: InferRequestType<typeof client.gitops.sources.test.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.sources.test.$post(args, options))
}

export async function getGitopsWorkflows(
  args: InferRequestType<typeof client.gitops.workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.workflows.$get(args, options))
}

export async function getGitopsWorkflowsId(
  args: InferRequestType<(typeof client.gitops.workflows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gitops.workflows[':id'].$get(args, options))
}

export async function getGitopsWorkflowsSummary(options?: ClientRequestOptions) {
  return await parseResponse(client.gitops.workflows.summary.$get(undefined, options))
}

export async function getKubernetesIdApplications(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].applications.$get(args, options))
}

export async function getKubernetesIdApplicationsCount(
  args: InferRequestType<(typeof client.kubernetes)[':id']['applications']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].applications.count.$get(args, options))
}

export async function postKubernetesIdClusterRoleBindingsDelete(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['cluster_role_bindings']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].cluster_role_bindings.delete.$post(args, options),
  )
}

export async function postKubernetesIdClusterRolesDelete(
  args: InferRequestType<(typeof client.kubernetes)[':id']['cluster_roles']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].cluster_roles.delete.$post(args, options))
}

export async function getKubernetesIdClusterrolebindings(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterrolebindings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].clusterrolebindings.$get(args, options))
}

export async function getKubernetesIdClusterroles(
  args: InferRequestType<(typeof client.kubernetes)[':id']['clusterroles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].clusterroles.$get(args, options))
}

export async function getKubernetesIdConfigmaps(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].configmaps.$get(args, options))
}

export async function getKubernetesIdConfigmapsCount(
  args: InferRequestType<(typeof client.kubernetes)[':id']['configmaps']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].configmaps.count.$get(args, options))
}

export async function getKubernetesIdCronJobs(
  args: InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].cron_jobs.$get(args, options))
}

export async function postKubernetesIdCronJobsDelete(
  args: InferRequestType<(typeof client.kubernetes)[':id']['cron_jobs']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].cron_jobs.delete.$post(args, options))
}

export async function getKubernetesIdDashboard(
  args: InferRequestType<(typeof client.kubernetes)[':id']['dashboard']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].dashboard.$get(args, options))
}

export async function getKubernetesIdDeployments(
  args: InferRequestType<(typeof client.kubernetes)[':id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].deployments.$get(args, options))
}

export async function getKubernetesIdDescribe(
  args: InferRequestType<(typeof client.kubernetes)[':id']['describe']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].describe.$get(args, options))
}

export async function getKubernetesIdEvents(
  args: InferRequestType<(typeof client.kubernetes)[':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].events.$get(args, options))
}

export async function getKubernetesIdIngressclasses(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingressclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].ingressclasses.$get(args, options))
}

export async function getKubernetesIdIngresscontrollers(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].ingresscontrollers.$get(args, options))
}

export async function putKubernetesIdIngresscontrollers(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresscontrollers']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].ingresscontrollers.$put(args, options))
}

export async function getKubernetesIdIngresses(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].ingresses.$get(args, options))
}

export async function getKubernetesIdIngressesCount(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].ingresses.count.$get(args, options))
}

export async function postKubernetesIdIngressesDelete(
  args: InferRequestType<(typeof client.kubernetes)[':id']['ingresses']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].ingresses.delete.$post(args, options))
}

export async function getKubernetesIdJobs(
  args: InferRequestType<(typeof client.kubernetes)[':id']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].jobs.$get(args, options))
}

export async function postKubernetesIdJobsDelete(
  args: InferRequestType<(typeof client.kubernetes)[':id']['jobs']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].jobs.delete.$post(args, options))
}

export async function postKubernetesIdManifestsDryRun(
  args: InferRequestType<(typeof client.kubernetes)[':id']['manifests']['dry_run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].manifests.dry_run.$post(args, options))
}

export async function getKubernetesIdMaxResourceLimits(
  args: InferRequestType<(typeof client.kubernetes)[':id']['max_resource_limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].max_resource_limits.$get(args, options))
}

export async function getKubernetesIdMetricsApplicationsResources(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['applications_resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].metrics.applications_resources.$get(args, options),
  )
}

export async function getKubernetesIdMetricsNodes(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].metrics.nodes.$get(args, options))
}

export async function getKubernetesIdMetricsNodesName(
  args: InferRequestType<(typeof client.kubernetes)[':id']['metrics']['nodes'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].metrics.nodes[':name'].$get(args, options))
}

export async function getKubernetesIdMetricsPodsNamespaceName(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods'][':namespace'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].metrics.pods[':namespace'][':name'].$get(args, options),
  )
}

export async function getKubernetesIdMetricsPodsNamespaceNamespace(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['metrics']['pods']['namespace'][':namespace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].metrics.pods.namespace[':namespace'].$get(args, options),
  )
}

export async function getKubernetesIdNamespaces(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].namespaces.$get(args, options))
}

export async function putKubernetesIdNamespaces(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].namespaces.$put(args, options))
}

export async function postKubernetesIdNamespaces(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].namespaces.$post(args, options))
}

export async function deleteKubernetesIdNamespaces(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].namespaces.$delete(args, options))
}

export async function getKubernetesIdNamespacesNamespace(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].namespaces[':namespace'].$get(args, options))
}

export async function putKubernetesIdNamespacesNamespace(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces'][':namespace']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].namespaces[':namespace'].$put(args, options))
}

export async function postKubernetesIdNamespacesNamespaceConfigmaps(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].configmaps.$post(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespaceConfigmapsConfigmap(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$get(args, options),
  )
}

export async function putKubernetesIdNamespacesNamespaceConfigmapsConfigmap(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$put(args, options),
  )
}

export async function deleteKubernetesIdNamespacesNamespaceConfigmapsConfigmap(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['configmaps'][':configmap']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].configmaps[':configmap'].$delete(
      args,
      options,
    ),
  )
}

export async function getKubernetesIdNamespacesNamespaceDeployments(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].deployments.$get(args, options),
  )
}

export async function postKubernetesIdNamespacesNamespaceDeployments(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].deployments.$post(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespaceDeploymentsName(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$get(args, options),
  )
}

export async function putKubernetesIdNamespacesNamespaceDeploymentsName(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$put(args, options),
  )
}

export async function deleteKubernetesIdNamespacesNamespaceDeploymentsName(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$delete(args, options),
  )
}

export async function patchKubernetesIdNamespacesNamespaceDeploymentsName(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].$patch(args, options),
  )
}

export async function postKubernetesIdNamespacesNamespaceDeploymentsNameRollback(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['rollback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].rollback.$post(
      args,
      options,
    ),
  )
}

export async function putKubernetesIdNamespacesNamespaceDeploymentsNameScale(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['deployments'][':name']['scale']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].deployments[':name'].scale.$put(
      args,
      options,
    ),
  )
}

export async function getKubernetesIdNamespacesNamespaceEvents(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].events.$get(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespaceIngresscontrollers(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].ingresscontrollers.$get(args, options),
  )
}

export async function putKubernetesIdNamespacesNamespaceIngresscontrollers(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresscontrollers']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].ingresscontrollers.$put(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespaceIngresses(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].ingresses.$get(args, options),
  )
}

export async function putKubernetesIdNamespacesNamespaceIngresses(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].ingresses.$put(args, options),
  )
}

export async function postKubernetesIdNamespacesNamespaceIngresses(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].ingresses.$post(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespaceIngressesIngress(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['ingresses'][':ingress']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].ingresses[':ingress'].$get(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespacePersistentVolumeClaims(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims.$get(args, options),
  )
}

export async function postKubernetesIdNamespacesNamespacePersistentVolumeClaims(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims.$post(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespacePersistentVolumeClaimsName(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['persistent_volume_claims'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].persistent_volume_claims[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getKubernetesIdNamespacesNamespacePods(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].pods.$get(args, options),
  )
}

export async function deleteKubernetesIdNamespacesNamespacePodsName(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].$delete(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespacePodsNameLog(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['log']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].log.$get(args, options),
  )
}

export async function postKubernetesIdNamespacesNamespacePodsNameRestart(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['pods'][':name']['restart']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].pods[':name'].restart.$post(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespaceReplicasets(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['replicasets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].replicasets.$get(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespaceResourceQuotas(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['resource_quotas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].resource_quotas.$get(args, options),
  )
}

export async function postKubernetesIdNamespacesNamespaceSecrets(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].secrets.$post(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespaceSecretsSecret(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$get(args, options),
  )
}

export async function putKubernetesIdNamespacesNamespaceSecretsSecret(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$put(args, options),
  )
}

export async function deleteKubernetesIdNamespacesNamespaceSecretsSecret(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['secrets'][':secret']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].secrets[':secret'].$delete(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespaceServiceAccountsName(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].service_accounts[':name'].$get(args, options),
  )
}

export async function putKubernetesIdNamespacesNamespaceServiceAccountsNameImagePullSecrets(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['service_accounts'][':name']['image_pull_secrets']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].service_accounts[
      ':name'
    ].image_pull_secrets.$put(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespaceServices(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].services.$get(args, options),
  )
}

export async function putKubernetesIdNamespacesNamespaceServices(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].services.$put(args, options),
  )
}

export async function postKubernetesIdNamespacesNamespaceServices(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['services']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].services.$post(args, options),
  )
}

export async function putKubernetesIdNamespacesNamespaceSystem(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['system']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].system.$put(args, options),
  )
}

export async function getKubernetesIdNamespacesNamespaceVolumes(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['namespaces'][':namespace']['volumes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].namespaces[':namespace'].volumes.$get(args, options),
  )
}

export async function getKubernetesIdNamespacesCount(
  args: InferRequestType<(typeof client.kubernetes)[':id']['namespaces']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].namespaces.count.$get(args, options))
}

export async function getKubernetesIdNodes(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].nodes.$get(args, options))
}

export async function postKubernetesIdNodesNameDrain(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes'][':name']['drain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].nodes[':name'].drain.$post(args, options))
}

export async function getKubernetesIdNodesLimits(
  args: InferRequestType<(typeof client.kubernetes)[':id']['nodes_limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].nodes_limits.$get(args, options))
}

export async function getKubernetesIdPersistentVolumeClaims(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volume_claims']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].persistent_volume_claims.$get(args, options))
}

export async function postKubernetesIdPersistentVolumeClaimsDelete(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['persistent_volume_claims']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].persistent_volume_claims.delete.$post(args, options),
  )
}

export async function putKubernetesIdPersistentVolumeClaimsResize(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['persistent_volume_claims']['resize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].persistent_volume_claims.resize.$put(args, options),
  )
}

export async function getKubernetesIdPersistentVolumes(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].persistent_volumes.$get(args, options))
}

export async function getKubernetesIdPersistentVolumesName(
  args: InferRequestType<(typeof client.kubernetes)[':id']['persistent_volumes'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].persistent_volumes[':name'].$get(args, options),
  )
}

export async function postKubernetesIdPersistentVolumesDelete(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['persistent_volumes']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].persistent_volumes.delete.$post(args, options),
  )
}

export async function putKubernetesIdPersistentVolumesReclaimPolicy(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['persistent_volumes']['reclaim_policy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].persistent_volumes.reclaim_policy.$put(args, options),
  )
}

export async function getKubernetesIdPods(
  args: InferRequestType<(typeof client.kubernetes)[':id']['pods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].pods.$get(args, options))
}

export async function getKubernetesIdRbacEnabled(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rbac_enabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].rbac_enabled.$get(args, options))
}

export async function postKubernetesIdRoleBindingsDelete(
  args: InferRequestType<(typeof client.kubernetes)[':id']['role_bindings']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].role_bindings.delete.$post(args, options))
}

export async function getKubernetesIdRolebindings(
  args: InferRequestType<(typeof client.kubernetes)[':id']['rolebindings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].rolebindings.$get(args, options))
}

export async function getKubernetesIdRoles(
  args: InferRequestType<(typeof client.kubernetes)[':id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].roles.$get(args, options))
}

export async function postKubernetesIdRolesDelete(
  args: InferRequestType<(typeof client.kubernetes)[':id']['roles']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].roles.delete.$post(args, options))
}

export async function getKubernetesIdSecrets(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].secrets.$get(args, options))
}

export async function getKubernetesIdSecretsCount(
  args: InferRequestType<(typeof client.kubernetes)[':id']['secrets']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].secrets.count.$get(args, options))
}

export async function postKubernetesIdServiceAccountsDelete(
  args: InferRequestType<(typeof client.kubernetes)[':id']['service_accounts']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].service_accounts.delete.$post(args, options))
}

export async function getKubernetesIdServiceaccounts(
  args: InferRequestType<(typeof client.kubernetes)[':id']['serviceaccounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].serviceaccounts.$get(args, options))
}

export async function getKubernetesIdServices(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].services.$get(args, options))
}

export async function getKubernetesIdServicesCount(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].services.count.$get(args, options))
}

export async function postKubernetesIdServicesDelete(
  args: InferRequestType<(typeof client.kubernetes)[':id']['services']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].services.delete.$post(args, options))
}

export async function getKubernetesIdStorageClasses(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].storage_classes.$get(args, options))
}

export async function getKubernetesIdStorageClassesName(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].storage_classes[':name'].$get(args, options))
}

export async function putKubernetesIdStorageClassesNameDefault(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['storage_classes'][':name']['default']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].storage_classes[':name'].default.$put(args, options),
  )
}

export async function postKubernetesIdStorageClassesDelete(
  args: InferRequestType<(typeof client.kubernetes)[':id']['storage_classes']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].storage_classes.delete.$post(args, options))
}

export async function getKubernetesIdVersion(
  args: InferRequestType<(typeof client.kubernetes)[':id']['version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].version.$get(args, options))
}

export async function getKubernetesIdVolumes(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].volumes.$get(args, options))
}

export async function getKubernetesIdVolumesNamespaceVolume(
  args: InferRequestType<
    (typeof client.kubernetes)[':id']['volumes'][':namespace'][':volume']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.kubernetes[':id'].volumes[':namespace'][':volume'].$get(args, options),
  )
}

export async function getKubernetesIdVolumesCount(
  args: InferRequestType<(typeof client.kubernetes)[':id']['volumes']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes[':id'].volumes.count.$get(args, options))
}

export async function getKubernetesConfig(
  args: InferRequestType<typeof client.kubernetes.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.kubernetes.config.$get(args, options))
}

export async function postLdapCheck(
  args: InferRequestType<typeof client.ldap.check.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ldap.check.$post(args, options))
}

export async function getMotd(options?: ClientRequestOptions) {
  return await parseResponse(client.motd.$get(undefined, options))
}

export async function getRegistries(options?: ClientRequestOptions) {
  return await parseResponse(client.registries.$get(undefined, options))
}

export async function postRegistries(
  args: InferRequestType<typeof client.registries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registries.$post(args, options))
}

export async function getRegistriesId(
  args: InferRequestType<(typeof client.registries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registries[':id'].$get(args, options))
}

export async function putRegistriesId(
  args: InferRequestType<(typeof client.registries)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registries[':id'].$put(args, options))
}

export async function deleteRegistriesId(
  args: InferRequestType<(typeof client.registries)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registries[':id'].$delete(args, options))
}

export async function postRegistriesIdConfigure(
  args: InferRequestType<(typeof client.registries)[':id']['configure']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registries[':id'].configure.$post(args, options))
}

export async function postRegistriesPing(
  args: InferRequestType<typeof client.registries.ping.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registries.ping.$post(args, options))
}

export async function postResourceControls(
  args: InferRequestType<typeof client.resource_controls.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resource_controls.$post(args, options))
}

export async function putResourceControlsId(
  args: InferRequestType<(typeof client.resource_controls)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resource_controls[':id'].$put(args, options))
}

export async function deleteResourceControlsId(
  args: InferRequestType<(typeof client.resource_controls)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resource_controls[':id'].$delete(args, options))
}

export async function postRestore(
  args: InferRequestType<typeof client.restore.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restore.$post(args, options))
}

export async function getRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.roles.$get(undefined, options))
}

export async function getSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.$get(undefined, options))
}

export async function putSettings(
  args: InferRequestType<typeof client.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.$put(args, options))
}

export async function getSettingsPublic(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.public.$get(undefined, options))
}

export async function getSsl(options?: ClientRequestOptions) {
  return await parseResponse(client.ssl.$get(undefined, options))
}

export async function putSsl(
  args: InferRequestType<typeof client.ssl.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ssl.$put(args, options))
}

export async function getStacks(
  args: InferRequestType<typeof client.stacks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.$get(args, options))
}

export async function getStacksId(
  args: InferRequestType<(typeof client.stacks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].$get(args, options))
}

export async function putStacksId(
  args: InferRequestType<(typeof client.stacks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].$put(args, options))
}

export async function deleteStacksId(
  args: InferRequestType<(typeof client.stacks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].$delete(args, options))
}

export async function putStacksIdAssociate(
  args: InferRequestType<(typeof client.stacks)[':id']['associate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].associate.$put(args, options))
}

export async function getStacksIdFile(
  args: InferRequestType<(typeof client.stacks)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].file.$get(args, options))
}

export async function postStacksIdGit(
  args: InferRequestType<(typeof client.stacks)[':id']['git']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].git.$post(args, options))
}

export async function putStacksIdGitRedeploy(
  args: InferRequestType<(typeof client.stacks)[':id']['git']['redeploy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].git.redeploy.$put(args, options))
}

export async function postStacksIdMigrate(
  args: InferRequestType<(typeof client.stacks)[':id']['migrate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].migrate.$post(args, options))
}

export async function postStacksIdStart(
  args: InferRequestType<(typeof client.stacks)[':id']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].start.$post(args, options))
}

export async function postStacksIdStop(
  args: InferRequestType<(typeof client.stacks)[':id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks[':id'].stop.$post(args, options))
}

export async function postStacksCreateKubernetesRepository(
  args: InferRequestType<typeof client.stacks.create.kubernetes.repository.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.create.kubernetes.repository.$post(args, options))
}

export async function postStacksCreateKubernetesString(
  args: InferRequestType<typeof client.stacks.create.kubernetes.string.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.create.kubernetes.string.$post(args, options))
}

export async function postStacksCreateKubernetesUrl(
  args: InferRequestType<typeof client.stacks.create.kubernetes.url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.create.kubernetes.url.$post(args, options))
}

export async function postStacksCreateStandaloneFile(
  args: InferRequestType<typeof client.stacks.create.standalone.file.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.create.standalone.file.$post(args, options))
}

export async function postStacksCreateStandaloneRepository(
  args: InferRequestType<typeof client.stacks.create.standalone.repository.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.create.standalone.repository.$post(args, options))
}

export async function postStacksCreateStandaloneString(
  args: InferRequestType<typeof client.stacks.create.standalone.string.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.create.standalone.string.$post(args, options))
}

export async function postStacksCreateSwarmFile(
  args: InferRequestType<typeof client.stacks.create.swarm.file.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.create.swarm.file.$post(args, options))
}

export async function postStacksCreateSwarmRepository(
  args: InferRequestType<typeof client.stacks.create.swarm.repository.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.create.swarm.repository.$post(args, options))
}

export async function postStacksCreateSwarmString(
  args: InferRequestType<typeof client.stacks.create.swarm.string.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.create.swarm.string.$post(args, options))
}

export async function deleteStacksNameName(
  args: InferRequestType<(typeof client.stacks.name)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.name[':name'].$delete(args, options))
}

export async function postStacksWebhooksWebhookID(
  args: InferRequestType<(typeof client.stacks.webhooks)[':webhookID']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stacks.webhooks[':webhookID'].$post(args, options))
}

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}

export async function getSystemInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.system.info.$get(undefined, options))
}

export async function getSystemNodes(options?: ClientRequestOptions) {
  return await parseResponse(client.system.nodes.$get(undefined, options))
}

export async function getSystemStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.system.status.$get(undefined, options))
}

export async function postSystemUpgrade(options?: ClientRequestOptions) {
  return await parseResponse(client.system.upgrade.$post(undefined, options))
}

export async function getSystemVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.system.version.$get(undefined, options))
}

export async function getTags(options?: ClientRequestOptions) {
  return await parseResponse(client.tags.$get(undefined, options))
}

export async function postTags(
  args: InferRequestType<typeof client.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$post(args, options))
}

export async function deleteTagsId(
  args: InferRequestType<(typeof client.tags)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':id'].$delete(args, options))
}

export async function getTeamMemberships(options?: ClientRequestOptions) {
  return await parseResponse(client.team_memberships.$get(undefined, options))
}

export async function postTeamMemberships(
  args: InferRequestType<typeof client.team_memberships.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team_memberships.$post(args, options))
}

export async function putTeamMembershipsId(
  args: InferRequestType<(typeof client.team_memberships)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team_memberships[':id'].$put(args, options))
}

export async function deleteTeamMembershipsId(
  args: InferRequestType<(typeof client.team_memberships)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.team_memberships[':id'].$delete(args, options))
}

export async function getTeams(
  args: InferRequestType<typeof client.teams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$get(args, options))
}

export async function postTeams(
  args: InferRequestType<typeof client.teams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.$post(args, options))
}

export async function getTeamsId(
  args: InferRequestType<(typeof client.teams)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].$get(args, options))
}

export async function putTeamsId(
  args: InferRequestType<(typeof client.teams)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].$put(args, options))
}

export async function deleteTeamsId(
  args: InferRequestType<(typeof client.teams)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].$delete(args, options))
}

export async function getTeamsIdMemberships(
  args: InferRequestType<(typeof client.teams)[':id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams[':id'].memberships.$get(args, options))
}

export async function getTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.templates.$get(undefined, options))
}

export async function postTemplatesIdFile(
  args: InferRequestType<(typeof client.templates)[':id']['file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':id'].file.$post(args, options))
}

export async function getTemplatesHelm(
  args: InferRequestType<typeof client.templates.helm.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.helm.$get(args, options))
}

export async function getTemplatesHelmCommand(
  args: InferRequestType<(typeof client.templates.helm)[':command']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.helm[':command'].$get(args, options))
}

export async function postUploadTlsCertificate(
  args: InferRequestType<(typeof client.upload.tls)[':certificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.upload.tls[':certificate'].$post(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$get(args, options))
}

export async function putUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$put(args, options))
}

export async function deleteUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$delete(args, options))
}

export async function getUsersIdEffectiveAccess(
  args: InferRequestType<(typeof client.users)[':id']['effective-access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id']['effective-access'].$get(args, options))
}

export async function getUsersIdHelmRepositories(
  args: InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].helm.repositories.$get(args, options))
}

export async function postUsersIdHelmRepositories(
  args: InferRequestType<(typeof client.users)[':id']['helm']['repositories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].helm.repositories.$post(args, options))
}

export async function deleteUsersIdHelmRepositoriesRepositoryID(
  args: InferRequestType<
    (typeof client.users)[':id']['helm']['repositories'][':repositoryID']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':id'].helm.repositories[':repositoryID'].$delete(args, options),
  )
}

export async function getUsersIdMemberships(
  args: InferRequestType<(typeof client.users)[':id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].memberships.$get(args, options))
}

export async function putUsersIdPasswd(
  args: InferRequestType<(typeof client.users)[':id']['passwd']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].passwd.$put(args, options))
}

export async function getUsersIdTokens(
  args: InferRequestType<(typeof client.users)[':id']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].tokens.$get(args, options))
}

export async function postUsersIdTokens(
  args: InferRequestType<(typeof client.users)[':id']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].tokens.$post(args, options))
}

export async function deleteUsersIdTokensKeyID(
  args: InferRequestType<(typeof client.users)[':id']['tokens'][':keyID']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].tokens[':keyID'].$delete(args, options))
}

export async function getUsersAdminCheck(options?: ClientRequestOptions) {
  return await parseResponse(client.users.admin.check.$get(undefined, options))
}

export async function postUsersAdminInit(
  args: InferRequestType<typeof client.users.admin.init.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.admin.init.$post(args, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$get(undefined, options))
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function putWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$put(args, options))
}

export async function postWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$post(args, options))
}

export async function deleteWebhooksId(
  args: InferRequestType<(typeof client.webhooks)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':id'].$delete(args, options))
}

export async function getWebsocketAttach(
  args: InferRequestType<typeof client.websocket.attach.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.websocket.attach.$get(args, options))
}

export async function getWebsocketExec(
  args: InferRequestType<typeof client.websocket.exec.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.websocket.exec.$get(args, options))
}

export async function getWebsocketKubernetesShell(
  args: InferRequestType<(typeof client.websocket)['kubernetes-shell']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.websocket['kubernetes-shell'].$get(args, options))
}

export async function getWebsocketPod(
  args: InferRequestType<typeof client.websocket.pod.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.websocket.pod.$get(args, options))
}
