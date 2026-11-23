import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAbout(options?: ClientRequestOptions) {
  return await parseResponse(client.about.$get(undefined, options))
}

export async function getArchitectures(options?: ClientRequestOptions) {
  return await parseResponse(client.architectures.$get(undefined, options))
}

export async function getArchitecturesArchitectureName(
  args: InferRequestType<(typeof client.architectures)[':architecture_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.architectures[':architecture_name'].$get(args, options))
}

export async function getAttribute(options?: ClientRequestOptions) {
  return await parseResponse(client.attribute.$get(undefined, options))
}

export async function getAttributeNamespace(
  args: InferRequestType<(typeof client.attribute)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attribute[':namespace'].$get(args, options))
}

export async function deleteAttributeNamespace(
  args: InferRequestType<(typeof client.attribute)[':namespace']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attribute[':namespace'].$delete(args, options))
}

export async function getAttributeNamespaceMeta(
  args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attribute[':namespace']._meta.$get(args, options))
}

export async function putAttributeNamespaceMeta(
  args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attribute[':namespace']._meta.$put(args, options))
}

export async function postAttributeNamespaceMeta(
  args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attribute[':namespace']._meta.$post(args, options))
}

export async function deleteAttributeNamespaceMeta(
  args: InferRequestType<(typeof client.attribute)[':namespace']['_meta']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.attribute[':namespace']._meta.$delete(args, options))
}

export async function deleteAttributeNamespaceAttributeName(
  args: InferRequestType<(typeof client.attribute)[':namespace'][':attribute_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.attribute[':namespace'][':attribute_name'].$delete(args, options),
  )
}

export async function getAttributeNamespaceAttributeNameMeta(
  args: InferRequestType<
    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.attribute[':namespace'][':attribute_name']._meta.$get(args, options),
  )
}

export async function putAttributeNamespaceAttributeNameMeta(
  args: InferRequestType<
    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.attribute[':namespace'][':attribute_name']._meta.$put(args, options),
  )
}

export async function postAttributeNamespaceAttributeNameMeta(
  args: InferRequestType<
    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.attribute[':namespace'][':attribute_name']._meta.$post(args, options),
  )
}

export async function deleteAttributeNamespaceAttributeNameMeta(
  args: InferRequestType<
    (typeof client.attribute)[':namespace'][':attribute_name']['_meta']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.attribute[':namespace'][':attribute_name']._meta.$delete(args, options),
  )
}

export async function getBuild(options?: ClientRequestOptions) {
  return await parseResponse(client.build.$get(undefined, options))
}

export async function getBuildProjectName(
  args: InferRequestType<(typeof client.build)[':project_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.build[':project_name'].$get(args, options))
}

export async function postBuildProjectName(
  args: InferRequestType<(typeof client.build)[':project_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.build[':project_name'].$post(args, options))
}

export async function getBuildProjectNameResult(
  args: InferRequestType<(typeof client.build)[':project_name']['_result']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.build[':project_name']._result.$get(args, options))
}

export async function getBuildProjectNameRepositoryName(
  args: InferRequestType<(typeof client.build)[':project_name'][':repository_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.build[':project_name'][':repository_name'].$get(args, options))
}

export async function getBuildProjectNameRepositoryNameBuildconfig(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name']['_buildconfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name']._buildconfig.$get(args, options),
  )
}

export async function getBuildProjectNameRepositoryNameArchitectureNameBuilddepinfo(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_builddepinfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name']._builddepinfo.$get(
      args,
      options,
    ),
  )
}

export async function getBuildProjectNameRepositoryNameArchitectureNameRepository(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name']['_repository']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name']._repository.$get(
      args,
      options,
    ),
  )
}

export async function getBuildProjectNameRepositoryNameArchitectureNamePackageName(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'].$get(
      args,
      options,
    ),
  )
}

export async function getBuildProjectNameRepositoryNameArchitectureNamePackageNameBuildinfo(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_buildinfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name'][
      ':package_name'
    ]._buildinfo.$get(args, options),
  )
}

export async function getBuildProjectNameRepositoryNameArchitectureNamePackageNameHistory(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name'][
      ':package_name'
    ]._history.$get(args, options),
  )
}

export async function getBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatus(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_jobstatus']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name'][
      ':package_name'
    ]._jobstatus.$get(args, options),
  )
}

export async function getBuildProjectNameRepositoryNameArchitectureNamePackageNameLog(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_log']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name'][
      ':package_name'
    ]._log.$get(args, options),
  )
}

export async function getBuildProjectNameRepositoryNameArchitectureNamePackageNameReason(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_reason']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name'][
      ':package_name'
    ]._reason.$get(args, options),
  )
}

export async function getBuildProjectNameRepositoryNameArchitectureNamePackageNameStatus(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name']['_status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name'][
      ':package_name'
    ]._status.$get(args, options),
  )
}

export async function getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileName(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
      ':file_name'
    ].$get(args, options),
  )
}

export async function putBuildProjectNameRepositoryNameArchitectureNamePackageNameFileName(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
      ':file_name'
    ].$put(args, options),
  )
}

export async function getBuildProjectNameRepositoryNameArchitectureNamePackageNameFileNameViewFileinfo(
  args: InferRequestType<
    (typeof client.build)[':project_name'][':repository_name'][':architecture_name'][':package_name'][':file_name?view=fileinfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.build[':project_name'][':repository_name'][':architecture_name'][':package_name'][
      ':file_name?view=fileinfo'
    ].$get(args, options),
  )
}

export async function getConfiguration(options?: ClientRequestOptions) {
  return await parseResponse(client.configuration.$get(undefined, options))
}

export async function putConfiguration(
  args: InferRequestType<typeof client.configuration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configuration.$put(args, options))
}

export async function getDistributions(options?: ClientRequestOptions) {
  return await parseResponse(client.distributions.$get(undefined, options))
}

export async function postDistributions(
  args: InferRequestType<typeof client.distributions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.distributions.$post(args, options))
}

export async function putDistributionsBulkReplace(
  args: InferRequestType<typeof client.distributions.bulk_replace.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.distributions.bulk_replace.$put(args, options))
}

export async function getDistributionsIncludeRemotes(options?: ClientRequestOptions) {
  return await parseResponse(client.distributions.include_remotes.$get(undefined, options))
}

export async function getDistributionsDistributionId(
  args: InferRequestType<(typeof client.distributions)[':distribution_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.distributions[':distribution_id'].$get(args, options))
}

export async function putDistributionsDistributionId(
  args: InferRequestType<(typeof client.distributions)[':distribution_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.distributions[':distribution_id'].$put(args, options))
}

export async function deleteDistributionsDistributionId(
  args: InferRequestType<(typeof client.distributions)[':distribution_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.distributions[':distribution_id'].$delete(args, options))
}

export async function getGroup(options?: ClientRequestOptions) {
  return await parseResponse(client.group.$get(undefined, options))
}

export async function getGroupGroupTitle(
  args: InferRequestType<(typeof client.group)[':group_title']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':group_title'].$get(args, options))
}

export async function putGroupGroupTitle(
  args: InferRequestType<(typeof client.group)[':group_title']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':group_title'].$put(args, options))
}

export async function postGroupGroupTitle(
  args: InferRequestType<(typeof client.group)[':group_title']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':group_title'].$post(args, options))
}

export async function deleteGroupGroupTitle(
  args: InferRequestType<(typeof client.group)[':group_title']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group[':group_title'].$delete(args, options))
}

export async function getIssueTrackers(options?: ClientRequestOptions) {
  return await parseResponse(client.issue_trackers.$get(undefined, options))
}

export async function postIssueTrackers(
  args: InferRequestType<typeof client.issue_trackers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issue_trackers.$post(args, options))
}

export async function getIssueTrackersIssueTrackerName(
  args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issue_trackers[':issue_tracker_name'].$get(args, options))
}

export async function putIssueTrackersIssueTrackerName(
  args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issue_trackers[':issue_tracker_name'].$put(args, options))
}

export async function deleteIssueTrackersIssueTrackerName(
  args: InferRequestType<(typeof client.issue_trackers)[':issue_tracker_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.issue_trackers[':issue_tracker_name'].$delete(args, options))
}

export async function getIssueTrackersIssueTrackerNameIssuesIssueName(
  args: InferRequestType<
    (typeof client.issue_trackers)[':issue_tracker_name']['issues'][':issue_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.issue_trackers[':issue_tracker_name'].issues[':issue_name'].$get(args, options),
  )
}

export async function getPerson(
  args: InferRequestType<typeof client.person.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person.$get(args, options))
}

export async function postPerson(
  args: InferRequestType<typeof client.person.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person.$post(args, options))
}

export async function postPersonRegister(
  args: InferRequestType<typeof client.person.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person.register.$post(args, options))
}

export async function getPersonLogin(
  args: InferRequestType<(typeof client.person)[':login']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person[':login'].$get(args, options))
}

export async function putPersonLogin(
  args: InferRequestType<(typeof client.person)[':login']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person[':login'].$put(args, options))
}

export async function postPersonLogin(
  args: InferRequestType<(typeof client.person)[':login']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person[':login'].$post(args, options))
}

export async function getPersonLoginGroup(
  args: InferRequestType<(typeof client.person)[':login']['group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person[':login'].group.$get(args, options))
}

export async function getPersonLoginToken(
  args: InferRequestType<(typeof client.person)[':login']['token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person[':login'].token.$get(args, options))
}

export async function postPersonLoginToken(
  args: InferRequestType<(typeof client.person)[':login']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person[':login'].token.$post(args, options))
}

export async function deletePersonLoginTokenId(
  args: InferRequestType<(typeof client.person)[':login']['token'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.person[':login'].token[':id'].$delete(args, options))
}

export async function getPublished(options?: ClientRequestOptions) {
  return await parseResponse(client.published.$get(undefined, options))
}

export async function getPublishedProjectName(
  args: InferRequestType<(typeof client.published)[':project_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.published[':project_name'].$get(args, options))
}

export async function getPublishedProjectNameRepositoryName(
  args: InferRequestType<(typeof client.published)[':project_name'][':repository_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.published[':project_name'][':repository_name'].$get(args, options),
  )
}

export async function getPublishedProjectNameRepositoryNameArchitectureName(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.published[':project_name'][':repository_name'][':architecture_name'].$get(args, options),
  )
}

export async function getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilename(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.published[':project_name'][':repository_name'][':architecture_name'][
      ':binary_filename'
    ].$get(args, options),
  )
}

export async function getPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewYmp(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name'][':architecture_name'][':binary_filename?view=ymp']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.published[':project_name'][':repository_name'][':architecture_name'][
      ':binary_filename?view=ymp'
    ].$get(args, options),
  )
}

export async function getPublishedProjectNameRepositoryNameViewStatus(
  args: InferRequestType<
    (typeof client.published)[':project_name'][':repository_name?view=status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.published[':project_name'][':repository_name?view=status'].$get(args, options),
  )
}

export async function getRequest(options?: ClientRequestOptions) {
  return await parseResponse(client.request.$get(undefined, options))
}

export async function postRequest(
  args: InferRequestType<typeof client.request.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request.$post(args, options))
}

export async function getRequestId(
  args: InferRequestType<(typeof client.request)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':id'].$get(args, options))
}

export async function putRequestId(
  args: InferRequestType<(typeof client.request)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':id'].$put(args, options))
}

export async function postRequestId(
  args: InferRequestType<(typeof client.request)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':id'].$post(args, options))
}

export async function deleteRequestId(
  args: InferRequestType<(typeof client.request)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':id'].$delete(args, options))
}

export async function postRequestIdCmdDiff(
  args: InferRequestType<(typeof client.request)[':id?cmd=diff']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.request[':id?cmd=diff'].$post(args, options))
}

export async function getRequestViewCollection(
  args: InferRequestType<(typeof client)['request?view=collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['request?view=collection'].$get(args, options))
}

export async function getWorkerStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.worker.status.$get(undefined, options))
}

export async function getWorkerArchitectureNameWorkerId(
  args: InferRequestType<(typeof client.worker)[':architecture_name:{worker_id}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.worker[':architecture_name:{worker_id}'].$get(args, options))
}

export async function postWorkerCmdCheckconstraints(
  args: InferRequestType<(typeof client)['worker?cmd=checkconstraints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['worker?cmd=checkconstraints'].$post(args, options))
}
