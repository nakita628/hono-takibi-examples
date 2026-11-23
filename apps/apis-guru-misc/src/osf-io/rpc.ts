import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getActionsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.actions.index.$get(undefined, options))
}

export async function getAddonsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.addons.index.$get(undefined, options))
}

export async function getCitationsStylesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.citations.styles.index.$get(undefined, options))
}

export async function getCitationsStylesStyleIdIndex(
  args: InferRequestType<(typeof client.citations.styles)[':style_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.citations.styles[':style_id'].index.$get(args, options))
}

export async function getCollectionsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.collections.index.$get(undefined, options))
}

export async function postCollectionsIndex(
  args: InferRequestType<typeof client.collections.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.index.$post(args, options))
}

export async function getCollectionsCollectionIdIndex(
  args: InferRequestType<(typeof client.collections)[':collection_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_id'].index.$get(args, options))
}

export async function deleteCollectionsCollectionIdIndex(
  args: InferRequestType<(typeof client.collections)[':collection_id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_id'].index.$delete(args, options))
}

export async function getCollectionsCollectionIdCollectedMetadataIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].collected_metadata.index.$get(args, options),
  )
}

export async function postCollectionsCollectionIdCollectedMetadataIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].collected_metadata.index.$post(args, options),
  )
}

export async function getCollectionsCollectionIdCollectedMetadataCgmId(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].collected_metadata[':cgm_id'].$get(args, options),
  )
}

export async function postCollectionsCollectionIdCollectedMetadataCgmId(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].collected_metadata[':cgm_id'].$post(args, options),
  )
}

export async function deleteCollectionsCollectionIdCollectedMetadataCgmId(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].collected_metadata[':cgm_id'].$delete(args, options),
  )
}

export async function getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].collected_metadata[
      ':cgm_id'
    ].relationships.subjects.index.$get(args, options),
  )
}

export async function postCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['relationships']['subjects']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].collected_metadata[
      ':cgm_id'
    ].relationships.subjects.index.$post(args, options),
  )
}

export async function getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['collected_metadata'][':cgm_id']['subjects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].collected_metadata[':cgm_id'].subjects.index.$get(
      args,
      options,
    ),
  )
}

export async function getCollectionsCollectionIdLinkedNodes(
  args: InferRequestType<(typeof client.collections)[':collection_id']['linked_nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_id'].linked_nodes.$get(args, options))
}

export async function getCollectionsCollectionIdLinkedNodesRelationshipsIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].linked_nodes.relationships.index.$get(args, options),
  )
}

export async function postCollectionsCollectionIdLinkedNodesRelationshipsIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].linked_nodes.relationships.index.$post(args, options),
  )
}

export async function deleteCollectionsCollectionIdLinkedNodesRelationshipsIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_nodes']['relationships']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].linked_nodes.relationships.index.$delete(args, options),
  )
}

export async function getCollectionsCollectionIdLinkedPreprintsIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_preprints']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].linked_preprints.index.$get(args, options),
  )
}

export async function getCollectionsCollectionIdLinkedRegistrationsIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].linked_registrations.index.$get(args, options),
  )
}

export async function getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].linked_registrations.relationships.index.$get(
      args,
      options,
    ),
  )
}

export async function postCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].linked_registrations.relationships.index.$post(
      args,
      options,
    ),
  )
}

export async function deleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndex(
  args: InferRequestType<
    (typeof client.collections)[':collection_id']['linked_registrations']['relationships']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collections[':collection_id'].linked_registrations.relationships.index.$delete(
      args,
      options,
    ),
  )
}

export async function getCommentsCommentIdIndex(
  args: InferRequestType<(typeof client.comments)[':comment_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':comment_id'].index.$get(args, options))
}

export async function putCommentsCommentIdIndex(
  args: InferRequestType<(typeof client.comments)[':comment_id']['index']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':comment_id'].index.$put(args, options))
}

export async function deleteCommentsCommentIdIndex(
  args: InferRequestType<(typeof client.comments)[':comment_id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':comment_id'].index.$delete(args, options))
}

export async function getDraftRegistrationsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.draft_registrations.index.$get(undefined, options))
}

export async function postDraftRegistrationsIndex(
  args: InferRequestType<typeof client.draft_registrations.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.draft_registrations.index.$post(args, options))
}

export async function getDraftRegistrationsDraftIdIndex(
  args: InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.draft_registrations[':draft_id'].index.$get(args, options))
}

export async function deleteDraftRegistrationsDraftIdIndex(
  args: InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.draft_registrations[':draft_id'].index.$delete(args, options))
}

export async function patchDraftRegistrationsDraftIdIndex(
  args: InferRequestType<(typeof client.draft_registrations)[':draft_id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.draft_registrations[':draft_id'].index.$patch(args, options))
}

export async function getDraftRegistrationsDraftIdContributorsIndex(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.draft_registrations[':draft_id'].contributors.index.$get(args, options),
  )
}

export async function postDraftRegistrationsDraftIdContributorsIndex(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.draft_registrations[':draft_id'].contributors.index.$post(args, options),
  )
}

export async function getDraftRegistrationsDraftIdContributorsUserIdIndex(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.draft_registrations[':draft_id'].contributors[':user_id'].index.$get(args, options),
  )
}

export async function getDraftRegistrationsDraftIdInstitutionsIndex(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['institutions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.draft_registrations[':draft_id'].institutions.index.$get(args, options),
  )
}

export async function getDraftRegistrationsDraftIdSubjectsIndex(
  args: InferRequestType<
    (typeof client.draft_registrations)[':draft_id']['subjects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.draft_registrations[':draft_id'].subjects.index.$get(args, options),
  )
}

export async function getFilesFileIdIndex(
  args: InferRequestType<(typeof client.files)[':file_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].index.$get(args, options))
}

export async function patchFilesFileIdIndex(
  args: InferRequestType<(typeof client.files)[':file_id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].index.$patch(args, options))
}

export async function getFilesFileIdVersionsIndex(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].versions.index.$get(args, options))
}

export async function getFilesFileIdVersionsVersionIdIndex(
  args: InferRequestType<
    (typeof client.files)[':file_id']['versions'][':version_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].versions[':version_id'].index.$get(args, options),
  )
}

export async function getInstitutionsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.institutions.index.$get(undefined, options))
}

export async function getInstitutionsInstitutionIdIndex(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institutions[':institution_id'].index.$get(args, options))
}

export async function getInstitutionsInstitutionIdNodesIndex(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['nodes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institutions[':institution_id'].nodes.index.$get(args, options))
}

export async function getInstitutionsInstitutionIdRegistrationsIndex(
  args: InferRequestType<
    (typeof client.institutions)[':institution_id']['registrations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.institutions[':institution_id'].registrations.index.$get(args, options),
  )
}

export async function getInstitutionsInstitutionIdUsersIndex(
  args: InferRequestType<(typeof client.institutions)[':institution_id']['users']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.institutions[':institution_id'].users.index.$get(args, options))
}

export async function getLicenseLicenseIdIndex(
  args: InferRequestType<(typeof client.license)[':license_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.license[':license_id'].index.$get(args, options))
}

export async function getLicensesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.licenses.index.$get(undefined, options))
}

export async function getLogsLogIdIndex(
  args: InferRequestType<(typeof client.logs)[':log_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':log_id'].index.$get(args, options))
}

export async function getNodesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.nodes.index.$get(undefined, options))
}

export async function postNodesIndex(
  args: InferRequestType<typeof client.nodes.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes.index.$post(args, options))
}

export async function getNodesNodeIdIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].index.$get(args, options))
}

export async function deleteNodesNodeIdIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].index.$delete(args, options))
}

export async function patchNodesNodeIdIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].index.$patch(args, options))
}

export async function getNodesNodeIdAddonsIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].addons.index.$get(args, options))
}

export async function getNodesNodeIdAddonsProviderIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['addons'][':provider']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].addons[':provider'].index.$get(args, options))
}

export async function patchNodesNodeIdAddonsProviderIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['addons'][':provider']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].addons[':provider'].index.$patch(args, options),
  )
}

export async function getNodesNodeIdAddonsProviderFoldersIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['addons'][':provider']['folders']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].addons[':provider'].folders.index.$get(args, options),
  )
}

export async function getNodesNodeIdChildrenIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].children.index.$get(args, options))
}

export async function postNodesNodeIdChildrenIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['children']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].children.index.$post(args, options))
}

export async function getNodesNodeIdCitationIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['citation']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].citation.index.$get(args, options))
}

export async function getNodesNodeIdCitationStyleIdIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['citation'][':style_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].citation[':style_id'].index.$get(args, options),
  )
}

export async function getNodesNodeIdCommentsIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].comments.index.$get(args, options))
}

export async function postNodesNodeIdCommentsIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['comments']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].comments.index.$post(args, options))
}

export async function getNodesNodeIdContributorsIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].contributors.index.$get(args, options))
}

export async function postNodesNodeIdContributorsIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['contributors']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].contributors.index.$post(args, options))
}

export async function getNodesNodeIdContributorsUserIdIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].contributors[':user_id'].index.$get(args, options),
  )
}

export async function deleteNodesNodeIdContributorsUserIdIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].contributors[':user_id'].index.$delete(args, options),
  )
}

export async function patchNodesNodeIdContributorsUserIdIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['contributors'][':user_id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].contributors[':user_id'].index.$patch(args, options),
  )
}

export async function getNodesNodeIdDraftRegistrationsIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['draft_registrations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].draft_registrations.index.$get(args, options))
}

export async function postNodesNodeIdDraftRegistrationsIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['draft_registrations']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].draft_registrations.index.$post(args, options),
  )
}

export async function getNodesNodeIdDraftRegistrationsDraftIdIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].draft_registrations[':draft_id'].index.$get(args, options),
  )
}

export async function deleteNodesNodeIdDraftRegistrationsDraftIdIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].draft_registrations[':draft_id'].index.$delete(args, options),
  )
}

export async function patchNodesNodeIdDraftRegistrationsDraftIdIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['draft_registrations'][':draft_id']['index']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].draft_registrations[':draft_id'].index.$patch(args, options),
  )
}

export async function getNodesNodeIdFilesIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].files.index.$get(args, options))
}

export async function getNodesNodeIdFilesProvidersProviderIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files']['providers'][':provider']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].files.providers[':provider'].index.$get(args, options),
  )
}

export async function getNodesNodeIdFilesProviderIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['files'][':provider']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].files[':provider'].index.$get(args, options))
}

export async function getNodesNodeIdFilesProviderPathIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['files'][':provider'][':path']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].files[':provider'][':path'].index.$get(args, options),
  )
}

export async function getNodesNodeIdForksIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].forks.index.$get(args, options))
}

export async function postNodesNodeIdForksIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['forks']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].forks.index.$post(args, options))
}

export async function getNodesNodeIdIdentifiersIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['identifiers']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].identifiers.index.$get(args, options))
}

export async function getNodesNodeIdInstitutionsIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['institutions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].institutions.index.$get(args, options))
}

export async function getNodesNodeIdLinkedNodesIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['linked_nodes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].linked_nodes.index.$get(args, options))
}

export async function getNodesNodeIdLogsIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['logs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].logs.index.$get(args, options))
}

export async function getNodesNodeIdPreprintsIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['preprints']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].preprints.index.$get(args, options))
}

export async function getNodesNodeIdRegistrationsIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['registrations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].registrations.index.$get(args, options))
}

export async function getNodesNodeIdViewOnlyLinksIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['view_only_links']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].view_only_links.index.$get(args, options))
}

export async function getNodesNodeIdViewOnlyLinksLinkIdIndex(
  args: InferRequestType<
    (typeof client.nodes)[':node_id']['view_only_links'][':link_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':node_id'].view_only_links[':link_id'].index.$get(args, options),
  )
}

export async function getNodesNodeIdWikisIndex(
  args: InferRequestType<(typeof client.nodes)[':node_id']['wikis']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':node_id'].wikis.index.$get(args, options))
}

export async function getPreprintProvidersIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.preprint_providers.index.$get(undefined, options))
}

export async function getPreprintProvidersPreprintProviderIdIndex(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preprint_providers[':preprint_provider_id'].index.$get(args, options),
  )
}

export async function getPreprintProvidersPreprintProviderIdLicensesIndex(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['licenses']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preprint_providers[':preprint_provider_id'].licenses.index.$get(args, options),
  )
}

export async function getPreprintProvidersPreprintProviderIdPreprintsIndex(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['preprints']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preprint_providers[':preprint_provider_id'].preprints.index.$get(args, options),
  )
}

export async function getPreprintProvidersPreprintProviderIdTaxonomiesIndex(
  args: InferRequestType<
    (typeof client.preprint_providers)[':preprint_provider_id']['taxonomies']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preprint_providers[':preprint_provider_id'].taxonomies.index.$get(args, options),
  )
}

export async function getPreprintsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.preprints.index.$get(undefined, options))
}

export async function postPreprintsIndex(
  args: InferRequestType<typeof client.preprints.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.preprints.index.$post(args, options))
}

export async function getPreprintsPreprintIdIndex(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.preprints[':preprint_id'].index.$get(args, options))
}

export async function patchPreprintsPreprintIdIndex(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.preprints[':preprint_id'].index.$patch(args, options))
}

export async function getPreprintsPreprintIdBibliographicContributorsIndex(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['bibliographic_contributors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preprints[':preprint_id'].bibliographic_contributors.index.$get(args, options),
  )
}

export async function getPreprintsPreprintIdCitationIndex(
  args: InferRequestType<(typeof client.preprints)[':preprint_id']['citation']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.preprints[':preprint_id'].citation.index.$get(args, options))
}

export async function getPreprintsPreprintIdCitationStyleIdIndex(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['citation'][':style_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preprints[':preprint_id'].citation[':style_id'].index.$get(args, options),
  )
}

export async function getPreprintsPreprintIdContributorsIndex(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preprints[':preprint_id'].contributors.index.$get(args, options),
  )
}

export async function postPreprintsPreprintIdContributorsIndex(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preprints[':preprint_id'].contributors.index.$post(args, options),
  )
}

export async function getPreprintsPreprintIdContributorsUserIdIndex(
  args: InferRequestType<
    (typeof client.preprints)[':preprint_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preprints[':preprint_id'].contributors[':user_id'].index.$get(args, options),
  )
}

export async function getRegistrationsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.registrations.index.$get(undefined, options))
}

export async function getRegistrationsRegistrationIdIndex(
  args: InferRequestType<(typeof client.registrations)[':registration_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registrations[':registration_id'].index.$get(args, options))
}

export async function patchRegistrationsRegistrationIdIndex(
  args: InferRequestType<(typeof client.registrations)[':registration_id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.registrations[':registration_id'].index.$patch(args, options))
}

export async function getRegistrationsRegistrationIdChildrenIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['children']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].children.index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdCitationsIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].citations.index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdCitationsCitationIdIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['citations'][':citation_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].citations[':citation_id'].index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdCommentsIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['comments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].comments.index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdContributorsIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].contributors.index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdContributorsUserIdIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['contributors'][':user_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].contributors[':user_id'].index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdFilesIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].files.index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdFilesProviderIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].files[':provider'].index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdFilesProviderPathIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['files'][':provider'][':path']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].files[':provider'][':path'].index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdForksIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['forks']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].forks.index.$get(args, options),
  )
}

export async function postRegistrationsRegistrationIdForksIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['forks']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].forks.index.$post(args, options),
  )
}

export async function getRegistrationsRegistrationIdIdentifiersIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['identifiers']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].identifiers.index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdInstitutionsIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['institutions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].institutions.index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdLinkedNodesIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['linked_nodes']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].linked_nodes.index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdLogsIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['logs']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].logs.index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdViewOnlyLinksIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].view_only_links.index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['view_only_links'][':link_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].view_only_links[':link_id'].index.$get(args, options),
  )
}

export async function getRegistrationsRegistrationIdWikisIndex(
  args: InferRequestType<
    (typeof client.registrations)[':registration_id']['wikis']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.registrations[':registration_id'].wikis.index.$get(args, options),
  )
}

export async function getSchemaResponsesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.schema_responses.index.$get(undefined, options))
}

export async function postSchemaResponsesIndex(
  args: InferRequestType<typeof client.schema_responses.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schema_responses.index.$post(args, options))
}

export async function getSchemaResponsesSchemaResponseId(
  args: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schema_responses[':schema_response_id'].$get(args, options))
}

export async function deleteSchemaResponsesSchemaResponseId(
  args: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schema_responses[':schema_response_id'].$delete(args, options))
}

export async function patchSchemaResponsesSchemaResponseId(
  args: InferRequestType<(typeof client.schema_responses)[':schema_response_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schema_responses[':schema_response_id'].$patch(args, options))
}

export async function getSchemaResponsesSchemaResponseIdActionsIndex(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schema_responses[':schema_response_id'].actions.index.$get(args, options),
  )
}

export async function postSchemaResponsesSchemaResponseIdActionsIndex(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions']['index']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schema_responses[':schema_response_id'].actions.index.$post(args, options),
  )
}

export async function getSchemaResponsesSchemaResponseIdActionsSchemaResponseActionId(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['actions'][':schema_response_action_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schema_responses[':schema_response_id'].actions[':schema_response_action_id'].$get(
      args,
      options,
    ),
  )
}

export async function getSchemaResponsesSchemaResponseIdSchemaBlocksIndex(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schema_responses[':schema_response_id'].schema_blocks.index.$get(args, options),
  )
}

export async function getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId(
  args: InferRequestType<
    (typeof client.schema_responses)[':schema_response_id']['schema_blocks'][':schema_response_block_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schema_responses[':schema_response_id'].schema_blocks[':schema_response_block_id'].$get(
      args,
      options,
    ),
  )
}

export async function getSchemasRegistrationsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.schemas.registrations.index.$get(undefined, options))
}

export async function getSchemasRegistrationsRegistrationSchemaId(
  args: InferRequestType<(typeof client.schemas.registrations)[':registration_schema_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.schemas.registrations[':registration_schema_id'].$get(args, options),
  )
}

export async function getTaxonomiesIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.taxonomies.index.$get(undefined, options))
}

export async function getTaxonomiesTaxonomyIdIndex(
  args: InferRequestType<(typeof client.taxonomies)[':taxonomy_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.taxonomies[':taxonomy_id'].index.$get(args, options))
}

export async function getUsersIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.users.index.$get(undefined, options))
}

export async function getUsersUserIdIndex(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].index.$get(args, options))
}

export async function patchUsersUserIdIndex(
  args: InferRequestType<(typeof client.users)[':user_id']['index']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].index.$patch(args, options))
}

export async function getUsersUserIdAddonsIndex(
  args: InferRequestType<(typeof client.users)[':user_id']['addons']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].addons.index.$get(args, options))
}

export async function getUsersUserIdAddonsProviderIndex(
  args: InferRequestType<(typeof client.users)[':user_id']['addons'][':provider']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].addons[':provider'].index.$get(args, options))
}

export async function getUsersUserIdAddonsProviderAccountsIndex(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].addons[':provider'].accounts.index.$get(args, options),
  )
}

export async function getUsersUserIdAddonsProviderAccountsAccountIdIndex(
  args: InferRequestType<
    (typeof client.users)[':user_id']['addons'][':provider']['accounts'][':account_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].addons[':provider'].accounts[':account_id'].index.$get(args, options),
  )
}

export async function getUsersUserIdInstitutionsIndex(
  args: InferRequestType<(typeof client.users)[':user_id']['institutions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].institutions.index.$get(args, options))
}

export async function getUsersUserIdNodesIndex(
  args: InferRequestType<(typeof client.users)[':user_id']['nodes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].nodes.index.$get(args, options))
}

export async function getUsersUserIdPreprintsIndex(
  args: InferRequestType<(typeof client.users)[':user_id']['preprints']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].preprints.index.$get(args, options))
}

export async function getUsersUserIdRegistrationsIndex(
  args: InferRequestType<(typeof client.users)[':user_id']['registrations']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].registrations.index.$get(args, options))
}

export async function getViewOnlyLinksLinkIdIndex(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.view_only_links[':link_id'].index.$get(args, options))
}

export async function getViewOnlyLinksLinkIdNodesIndex(
  args: InferRequestType<(typeof client.view_only_links)[':link_id']['nodes']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.view_only_links[':link_id'].nodes.index.$get(args, options))
}

export async function getWikisWikiIdIndex(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wikis[':wiki_id'].index.$get(args, options))
}

export async function getWikisWikiIdContentIndex(
  args: InferRequestType<(typeof client.wikis)[':wiki_id']['content']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wikis[':wiki_id'].content.index.$get(args, options))
}
