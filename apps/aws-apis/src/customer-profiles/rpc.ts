import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDomainsDomainNameProfilesKeys(
  args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['keys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].profiles.keys.$post(args, options))
}

export async function getDomainsDomainName(
  args: InferRequestType<(typeof client.domains)[':DomainName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].$get(args, options))
}

export async function putDomainsDomainName(
  args: InferRequestType<(typeof client.domains)[':DomainName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].$put(args, options))
}

export async function postDomainsDomainName(
  args: InferRequestType<(typeof client.domains)[':DomainName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].$post(args, options))
}

export async function deleteDomainsDomainName(
  args: InferRequestType<(typeof client.domains)[':DomainName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].$delete(args, options))
}

export async function postDomainsDomainNameWorkflowsIntegrations(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows']['integrations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName'].workflows.integrations.$post(args, options),
  )
}

export async function putDomainsDomainNameProfiles(
  args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].profiles.$put(args, options))
}

export async function postDomainsDomainNameProfiles(
  args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].profiles.$post(args, options))
}

export async function postDomainsDomainNameIntegrationsDelete(
  args: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].integrations.delete.$post(args, options))
}

export async function postDomainsDomainNameProfilesDelete(
  args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].profiles.delete.$post(args, options))
}

export async function postDomainsDomainNameProfilesKeysDelete(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['profiles']['keys']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName'].profiles.keys.delete.$post(args, options),
  )
}

export async function postDomainsDomainNameProfilesObjectsDelete(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['profiles']['objects']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName'].profiles.objects.delete.$post(args, options),
  )
}

export async function getDomainsDomainNameObjectTypesObjectTypeName(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName']['object-types'][':ObjectTypeName'].$get(args, options),
  )
}

export async function putDomainsDomainNameObjectTypesObjectTypeName(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName']['object-types'][':ObjectTypeName'].$put(args, options),
  )
}

export async function deleteDomainsDomainNameObjectTypesObjectTypeName(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['object-types'][':ObjectTypeName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName']['object-types'][':ObjectTypeName'].$delete(args, options),
  )
}

export async function getDomainsDomainNameWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName'].workflows[':WorkflowId'].$get(args, options),
  )
}

export async function deleteDomainsDomainNameWorkflowsWorkflowId(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName'].workflows[':WorkflowId'].$delete(args, options),
  )
}

export async function postDomainsDomainNameIdentityResolutionJobsAutoMergingPreview(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs']['auto-merging-preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName']['identity-resolution-jobs']['auto-merging-preview'].$post(
      args,
      options,
    ),
  )
}

export async function getDomainsDomainNameIdentityResolutionJobsJobId(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs'][':JobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName']['identity-resolution-jobs'][':JobId'].$get(args, options),
  )
}

export async function getDomainsDomainNameIntegrations(
  args: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].integrations.$get(args, options))
}

export async function putDomainsDomainNameIntegrations(
  args: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].integrations.$put(args, options))
}

export async function postDomainsDomainNameIntegrations(
  args: InferRequestType<(typeof client.domains)[':DomainName']['integrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].integrations.$post(args, options))
}

export async function getDomainsDomainNameMatches(
  args: InferRequestType<(typeof client.domains)[':DomainName']['matches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].matches.$get(args, options))
}

export async function getTemplatesTemplateId(
  args: InferRequestType<(typeof client.templates)[':TemplateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':TemplateId'].$get(args, options))
}

export async function getDomainsDomainNameWorkflowsWorkflowIdSteps(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['workflows'][':WorkflowId']['steps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName'].workflows[':WorkflowId'].steps.$get(args, options),
  )
}

export async function postIntegrations(
  args: InferRequestType<typeof client.integrations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.$post(args, options))
}

export async function getDomains(
  args: InferRequestType<typeof client.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$get(args, options))
}

export async function getDomainsDomainNameIdentityResolutionJobs(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['identity-resolution-jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName']['identity-resolution-jobs'].$get(args, options),
  )
}

export async function getTemplates(
  args: InferRequestType<typeof client.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$get(args, options))
}

export async function getDomainsDomainNameObjectTypes(
  args: InferRequestType<(typeof client.domains)[':DomainName']['object-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName']['object-types'].$get(args, options))
}

export async function putDomainsDomainNameProfilesObjects(
  args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['objects']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].profiles.objects.$put(args, options))
}

export async function postDomainsDomainNameProfilesObjects(
  args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['objects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].profiles.objects.$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postDomainsDomainNameWorkflows(
  args: InferRequestType<(typeof client.domains)[':DomainName']['workflows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].workflows.$post(args, options))
}

export async function postDomainsDomainNameProfilesObjectsMerge(
  args: InferRequestType<
    (typeof client.domains)[':DomainName']['profiles']['objects']['merge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.domains[':DomainName'].profiles.objects.merge.$post(args, options),
  )
}

export async function postDomainsDomainNameProfilesSearch(
  args: InferRequestType<(typeof client.domains)[':DomainName']['profiles']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':DomainName'].profiles.search.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
