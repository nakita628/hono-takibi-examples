import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAccessRequestsCreate(
  args: InferRequestType<(typeof client)['accessRequests.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['accessRequests.create'].$post(args, options))
}

export async function postAccessRequestsInfo(
  args: InferRequestType<(typeof client)['accessRequests.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['accessRequests.info'].$post(args, options))
}

export async function postAccessRequestsApprove(
  args: InferRequestType<(typeof client)['accessRequests.approve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['accessRequests.approve'].$post(args, options))
}

export async function postAccessRequestsDismiss(
  args: InferRequestType<(typeof client)['accessRequests.dismiss']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['accessRequests.dismiss'].$post(args, options))
}

export async function postApiKeysCreate(
  args: InferRequestType<(typeof client)['apiKeys.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apiKeys.create'].$post(args, options))
}

export async function postApiKeysList(
  args: InferRequestType<(typeof client)['apiKeys.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apiKeys.list'].$post(args, options))
}

export async function postApiKeysDelete(
  args: InferRequestType<(typeof client)['apiKeys.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['apiKeys.delete'].$post(args, options))
}

export async function postAttachmentsCreate(
  args: InferRequestType<(typeof client)['attachments.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attachments.create'].$post(args, options))
}

export async function postAttachmentsRedirect(
  args: InferRequestType<(typeof client)['attachments.redirect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attachments.redirect'].$post(args, options))
}

export async function postAttachmentsDelete(
  args: InferRequestType<(typeof client)['attachments.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attachments.delete'].$post(args, options))
}

export async function postAttachmentsList(
  args: InferRequestType<(typeof client)['attachments.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attachments.list'].$post(args, options))
}

export async function postAttachmentsCreateFromUrl(
  args: InferRequestType<(typeof client)['attachments.createFromUrl']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attachments.createFromUrl'].$post(args, options))
}

export async function postAuthInfo(options?: ClientRequestOptions) {
  return await parseResponse(client['auth.info'].$post(undefined, options))
}

export async function postAuthConfig(options?: ClientRequestOptions) {
  return await parseResponse(client['auth.config'].$post(undefined, options))
}

export async function postAuthDelete(
  args: InferRequestType<(typeof client)['auth.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['auth.delete'].$post(args, options))
}

export async function postCollectionsInfo(
  args: InferRequestType<(typeof client)['collections.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.info'].$post(args, options))
}

export async function postCollectionsDocuments(
  args: InferRequestType<(typeof client)['collections.documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.documents'].$post(args, options))
}

export async function postCollectionsList(
  args: InferRequestType<(typeof client)['collections.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.list'].$post(args, options))
}

export async function postCollectionsCreate(
  args: InferRequestType<(typeof client)['collections.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.create'].$post(args, options))
}

export async function postCollectionsDuplicate(
  args: InferRequestType<(typeof client)['collections.duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.duplicate'].$post(args, options))
}

export async function postCollectionsUpdate(
  args: InferRequestType<(typeof client)['collections.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.update'].$post(args, options))
}

export async function postCollectionsAddUser(
  args: InferRequestType<(typeof client)['collections.add_user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.add_user'].$post(args, options))
}

export async function postCollectionsRemoveUser(
  args: InferRequestType<(typeof client)['collections.remove_user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.remove_user'].$post(args, options))
}

export async function postCollectionsMemberships(
  args: InferRequestType<(typeof client)['collections.memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.memberships'].$post(args, options))
}

export async function postCollectionsAddGroup(
  args: InferRequestType<(typeof client)['collections.add_group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.add_group'].$post(args, options))
}

export async function postCollectionsRemoveGroup(
  args: InferRequestType<(typeof client)['collections.remove_group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.remove_group'].$post(args, options))
}

export async function postCollectionsGroupMemberships(
  args: InferRequestType<(typeof client)['collections.group_memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.group_memberships'].$post(args, options))
}

export async function postCollectionsDelete(
  args: InferRequestType<(typeof client)['collections.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.delete'].$post(args, options))
}

export async function postCollectionsExport(
  args: InferRequestType<(typeof client)['collections.export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.export'].$post(args, options))
}

export async function postCollectionsExportAll(
  args: InferRequestType<(typeof client)['collections.export_all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.export_all'].$post(args, options))
}

export async function postCollectionsArchive(
  args: InferRequestType<(typeof client)['collections.archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.archive'].$post(args, options))
}

export async function postCollectionsRestore(
  args: InferRequestType<(typeof client)['collections.restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.restore'].$post(args, options))
}

export async function postCollectionsMove(
  args: InferRequestType<(typeof client)['collections.move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.move'].$post(args, options))
}

export async function postCollectionsImport(
  args: InferRequestType<(typeof client)['collections.import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['collections.import'].$post(args, options))
}

export async function postCommentsCreate(
  args: InferRequestType<(typeof client)['comments.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['comments.create'].$post(args, options))
}

export async function postCommentsInfo(
  args: InferRequestType<(typeof client)['comments.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['comments.info'].$post(args, options))
}

export async function postCommentsUpdate(
  args: InferRequestType<(typeof client)['comments.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['comments.update'].$post(args, options))
}

export async function postCommentsDelete(
  args: InferRequestType<(typeof client)['comments.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['comments.delete'].$post(args, options))
}

export async function postCommentsList(
  args: InferRequestType<(typeof client)['comments.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['comments.list'].$post(args, options))
}

export async function postCommentsResolve(
  args: InferRequestType<(typeof client)['comments.resolve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['comments.resolve'].$post(args, options))
}

export async function postCommentsUnresolve(
  args: InferRequestType<(typeof client)['comments.unresolve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['comments.unresolve'].$post(args, options))
}

export async function postCommentsAddReaction(
  args: InferRequestType<(typeof client)['comments.add_reaction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['comments.add_reaction'].$post(args, options))
}

export async function postCommentsRemoveReaction(
  args: InferRequestType<(typeof client)['comments.remove_reaction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['comments.remove_reaction'].$post(args, options))
}

export async function postDataAttributesInfo(
  args: InferRequestType<(typeof client)['dataAttributes.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dataAttributes.info'].$post(args, options))
}

export async function postDataAttributesList(
  args: InferRequestType<(typeof client)['dataAttributes.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dataAttributes.list'].$post(args, options))
}

export async function postDataAttributesCreate(
  args: InferRequestType<(typeof client)['dataAttributes.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dataAttributes.create'].$post(args, options))
}

export async function postDataAttributesUpdate(
  args: InferRequestType<(typeof client)['dataAttributes.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dataAttributes.update'].$post(args, options))
}

export async function postDataAttributesDelete(
  args: InferRequestType<(typeof client)['dataAttributes.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['dataAttributes.delete'].$post(args, options))
}

export async function postDocumentsInfo(
  args: InferRequestType<(typeof client)['documents.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.info'].$post(args, options))
}

export async function postDocumentsInsights(
  args: InferRequestType<(typeof client)['documents.insights']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.insights'].$post(args, options))
}

export async function postDocumentsImport(
  args: InferRequestType<(typeof client)['documents.import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.import'].$post(args, options))
}

export async function postDocumentsExport(
  args: InferRequestType<(typeof client)['documents.export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.export'].$post(args, options))
}

export async function postDocumentsList(
  args: InferRequestType<(typeof client)['documents.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.list'].$post(args, options))
}

export async function postDocumentsDocuments(
  args: InferRequestType<(typeof client)['documents.documents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.documents'].$post(args, options))
}

export async function postDocumentsDrafts(
  args: InferRequestType<(typeof client)['documents.drafts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.drafts'].$post(args, options))
}

export async function postDocumentsViewed(
  args: InferRequestType<(typeof client)['documents.viewed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.viewed'].$post(args, options))
}

export async function postDocumentsAnswerQuestion(
  args: InferRequestType<(typeof client)['documents.answerQuestion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.answerQuestion'].$post(args, options))
}

export async function postDocumentsSearchTitles(
  args: InferRequestType<(typeof client)['documents.search_titles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.search_titles'].$post(args, options))
}

export async function postDocumentsSearch(
  args: InferRequestType<(typeof client)['documents.search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.search'].$post(args, options))
}

export async function postDocumentsCreate(
  args: InferRequestType<(typeof client)['documents.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.create'].$post(args, options))
}

export async function postDocumentsUpdate(
  args: InferRequestType<(typeof client)['documents.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.update'].$post(args, options))
}

export async function postDocumentsTemplatize(
  args: InferRequestType<(typeof client)['documents.templatize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.templatize'].$post(args, options))
}

export async function postDocumentsUnpublish(
  args: InferRequestType<(typeof client)['documents.unpublish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.unpublish'].$post(args, options))
}

export async function postDocumentsMove(
  args: InferRequestType<(typeof client)['documents.move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.move'].$post(args, options))
}

export async function postDocumentsArchive(
  args: InferRequestType<(typeof client)['documents.archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.archive'].$post(args, options))
}

export async function postDocumentsRestore(
  args: InferRequestType<(typeof client)['documents.restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.restore'].$post(args, options))
}

export async function postDocumentsDelete(
  args: InferRequestType<(typeof client)['documents.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.delete'].$post(args, options))
}

export async function postDocumentsUsers(
  args: InferRequestType<(typeof client)['documents.users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.users'].$post(args, options))
}

export async function postDocumentsMemberships(
  args: InferRequestType<(typeof client)['documents.memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.memberships'].$post(args, options))
}

export async function postDocumentsAddUser(
  args: InferRequestType<(typeof client)['documents.add_user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.add_user'].$post(args, options))
}

export async function postDocumentsRemoveUser(
  args: InferRequestType<(typeof client)['documents.remove_user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.remove_user'].$post(args, options))
}

export async function postDocumentsArchived(
  args: InferRequestType<(typeof client)['documents.archived']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.archived'].$post(args, options))
}

export async function postDocumentsDeleted(
  args: InferRequestType<(typeof client)['documents.deleted']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.deleted'].$post(args, options))
}

export async function postDocumentsDuplicate(
  args: InferRequestType<(typeof client)['documents.duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.duplicate'].$post(args, options))
}

export async function postDocumentsAddGroup(
  args: InferRequestType<(typeof client)['documents.add_group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.add_group'].$post(args, options))
}

export async function postDocumentsRemoveGroup(
  args: InferRequestType<(typeof client)['documents.remove_group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.remove_group'].$post(args, options))
}

export async function postDocumentsGroupMemberships(
  args: InferRequestType<(typeof client)['documents.group_memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['documents.group_memberships'].$post(args, options))
}

export async function postDocumentsEmptyTrash(options?: ClientRequestOptions) {
  return await parseResponse(client['documents.empty_trash'].$post(undefined, options))
}

export async function postEventsList(
  args: InferRequestType<(typeof client)['events.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['events.list'].$post(args, options))
}

export async function postFileOperationsInfo(
  args: InferRequestType<(typeof client)['fileOperations.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fileOperations.info'].$post(args, options))
}

export async function postFileOperationsDelete(
  args: InferRequestType<(typeof client)['fileOperations.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fileOperations.delete'].$post(args, options))
}

export async function postFileOperationsRedirect(
  args: InferRequestType<(typeof client)['fileOperations.redirect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fileOperations.redirect'].$post(args, options))
}

export async function postFileOperationsList(
  args: InferRequestType<(typeof client)['fileOperations.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['fileOperations.list'].$post(args, options))
}

export async function postGroupMembershipsList(
  args: InferRequestType<(typeof client)['groupMemberships.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groupMemberships.list'].$post(args, options))
}

export async function postGroupsInfo(
  args: InferRequestType<(typeof client)['groups.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groups.info'].$post(args, options))
}

export async function postGroupsList(
  args: InferRequestType<(typeof client)['groups.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groups.list'].$post(args, options))
}

export async function postGroupsCreate(
  args: InferRequestType<(typeof client)['groups.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groups.create'].$post(args, options))
}

export async function postGroupsUpdate(
  args: InferRequestType<(typeof client)['groups.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groups.update'].$post(args, options))
}

export async function postGroupsDelete(
  args: InferRequestType<(typeof client)['groups.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groups.delete'].$post(args, options))
}

export async function postGroupsMemberships(
  args: InferRequestType<(typeof client)['groups.memberships']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groups.memberships'].$post(args, options))
}

export async function postGroupsAddUser(
  args: InferRequestType<(typeof client)['groups.add_user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groups.add_user'].$post(args, options))
}

export async function postGroupsRemoveUser(
  args: InferRequestType<(typeof client)['groups.remove_user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groups.remove_user'].$post(args, options))
}

export async function postGroupsUpdateUser(
  args: InferRequestType<(typeof client)['groups.update_user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['groups.update_user'].$post(args, options))
}

export async function postNotificationsList(
  args: InferRequestType<(typeof client)['notifications.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['notifications.list'].$post(args, options))
}

export async function postNotificationsUpdate(
  args: InferRequestType<(typeof client)['notifications.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['notifications.update'].$post(args, options))
}

export async function postNotificationsUpdateAll(
  args: InferRequestType<(typeof client)['notifications.update_all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['notifications.update_all'].$post(args, options))
}

export async function postOauthAuthenticationsList(
  args: InferRequestType<(typeof client)['oauthAuthentications.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oauthAuthentications.list'].$post(args, options))
}

export async function postOauthAuthenticationsDelete(
  args: InferRequestType<(typeof client)['oauthAuthentications.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oauthAuthentications.delete'].$post(args, options))
}

export async function postOauthClientsInfo(
  args: InferRequestType<(typeof client)['oauthClients.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oauthClients.info'].$post(args, options))
}

export async function postOauthClientsList(
  args: InferRequestType<(typeof client)['oauthClients.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oauthClients.list'].$post(args, options))
}

export async function postOauthClientsCreate(
  args: InferRequestType<(typeof client)['oauthClients.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oauthClients.create'].$post(args, options))
}

export async function postOauthClientsUpdate(
  args: InferRequestType<(typeof client)['oauthClients.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oauthClients.update'].$post(args, options))
}

export async function postOauthClientsRotateSecret(
  args: InferRequestType<(typeof client)['oauthClients.rotate_secret']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oauthClients.rotate_secret'].$post(args, options))
}

export async function postOauthClientsDelete(
  args: InferRequestType<(typeof client)['oauthClients.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['oauthClients.delete'].$post(args, options))
}

export async function postPinsCreate(
  args: InferRequestType<(typeof client)['pins.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['pins.create'].$post(args, options))
}

export async function postPinsInfo(
  args: InferRequestType<(typeof client)['pins.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['pins.info'].$post(args, options))
}

export async function postPinsList(
  args: InferRequestType<(typeof client)['pins.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['pins.list'].$post(args, options))
}

export async function postPinsUpdate(
  args: InferRequestType<(typeof client)['pins.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['pins.update'].$post(args, options))
}

export async function postPinsDelete(
  args: InferRequestType<(typeof client)['pins.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['pins.delete'].$post(args, options))
}

export async function postReactionsList(
  args: InferRequestType<(typeof client)['reactions.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['reactions.list'].$post(args, options))
}

export async function postRevisionsInfo(
  args: InferRequestType<(typeof client)['revisions.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['revisions.info'].$post(args, options))
}

export async function postRevisionsList(
  args: InferRequestType<(typeof client)['revisions.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['revisions.list'].$post(args, options))
}

export async function postRevisionsUpdate(
  args: InferRequestType<(typeof client)['revisions.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['revisions.update'].$post(args, options))
}

export async function postRevisionsDelete(
  args: InferRequestType<(typeof client)['revisions.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['revisions.delete'].$post(args, options))
}

export async function postRevisionsExport(
  args: InferRequestType<(typeof client)['revisions.export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['revisions.export'].$post(args, options))
}

export async function postSharesInfo(
  args: InferRequestType<(typeof client)['shares.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shares.info'].$post(args, options))
}

export async function postSharesList(
  args: InferRequestType<(typeof client)['shares.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shares.list'].$post(args, options))
}

export async function postSharesCreate(
  args: InferRequestType<(typeof client)['shares.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shares.create'].$post(args, options))
}

export async function postSharesUpdate(
  args: InferRequestType<(typeof client)['shares.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shares.update'].$post(args, options))
}

export async function postSharesRevoke(
  args: InferRequestType<(typeof client)['shares.revoke']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shares.revoke'].$post(args, options))
}

export async function postStarsCreate(
  args: InferRequestType<(typeof client)['stars.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stars.create'].$post(args, options))
}

export async function postStarsList(
  args: InferRequestType<(typeof client)['stars.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stars.list'].$post(args, options))
}

export async function postStarsUpdate(
  args: InferRequestType<(typeof client)['stars.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stars.update'].$post(args, options))
}

export async function postStarsDelete(
  args: InferRequestType<(typeof client)['stars.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stars.delete'].$post(args, options))
}

export async function postSubscriptionsList(
  args: InferRequestType<(typeof client)['subscriptions.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions.list'].$post(args, options))
}

export async function postSubscriptionsInfo(
  args: InferRequestType<(typeof client)['subscriptions.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions.info'].$post(args, options))
}

export async function postSubscriptionsCreate(
  args: InferRequestType<(typeof client)['subscriptions.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions.create'].$post(args, options))
}

export async function postSubscriptionsDelete(
  args: InferRequestType<(typeof client)['subscriptions.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriptions.delete'].$post(args, options))
}

export async function postTemplatesCreate(
  args: InferRequestType<(typeof client)['templates.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['templates.create'].$post(args, options))
}

export async function postTemplatesList(
  args: InferRequestType<(typeof client)['templates.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['templates.list'].$post(args, options))
}

export async function postTemplatesInfo(
  args: InferRequestType<(typeof client)['templates.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['templates.info'].$post(args, options))
}

export async function postTemplatesUpdate(
  args: InferRequestType<(typeof client)['templates.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['templates.update'].$post(args, options))
}

export async function postTemplatesDelete(
  args: InferRequestType<(typeof client)['templates.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['templates.delete'].$post(args, options))
}

export async function postTemplatesRestore(
  args: InferRequestType<(typeof client)['templates.restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['templates.restore'].$post(args, options))
}

export async function postTemplatesDuplicate(
  args: InferRequestType<(typeof client)['templates.duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['templates.duplicate'].$post(args, options))
}

export async function postUserMembershipsList(
  args: InferRequestType<(typeof client)['userMemberships.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['userMemberships.list'].$post(args, options))
}

export async function postUserMembershipsUpdate(
  args: InferRequestType<(typeof client)['userMemberships.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['userMemberships.update'].$post(args, options))
}

export async function postUsersInvite(
  args: InferRequestType<(typeof client)['users.invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.invite'].$post(args, options))
}

export async function postUsersInfo(
  args: InferRequestType<(typeof client)['users.info']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.info'].$post(args, options))
}

export async function postUsersList(
  args: InferRequestType<(typeof client)['users.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.list'].$post(args, options))
}

export async function postUsersUpdate(
  args: InferRequestType<(typeof client)['users.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.update'].$post(args, options))
}

export async function postUsersUpdateRole(
  args: InferRequestType<(typeof client)['users.update_role']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.update_role'].$post(args, options))
}

export async function postUsersSuspend(
  args: InferRequestType<(typeof client)['users.suspend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.suspend'].$post(args, options))
}

export async function postUsersActivate(
  args: InferRequestType<(typeof client)['users.activate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.activate'].$post(args, options))
}

export async function postUsersDelete(
  args: InferRequestType<(typeof client)['users.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.delete'].$post(args, options))
}

export async function postUsersResendInvite(
  args: InferRequestType<(typeof client)['users.resendInvite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.resendInvite'].$post(args, options))
}

export async function postUsersNotificationsSubscribe(
  args: InferRequestType<(typeof client)['users.notificationsSubscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.notificationsSubscribe'].$post(args, options))
}

export async function postUsersNotificationsUnsubscribe(
  args: InferRequestType<(typeof client)['users.notificationsUnsubscribe']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['users.notificationsUnsubscribe'].$post(args, options))
}

export async function postViewsList(
  args: InferRequestType<(typeof client)['views.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['views.list'].$post(args, options))
}

export async function postWebhookSubscriptionsList(
  args: InferRequestType<(typeof client)['webhookSubscriptions.list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['webhookSubscriptions.list'].$post(args, options))
}

export async function postWebhookSubscriptionsCreate(
  args: InferRequestType<(typeof client)['webhookSubscriptions.create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['webhookSubscriptions.create'].$post(args, options))
}

export async function postWebhookSubscriptionsUpdate(
  args: InferRequestType<(typeof client)['webhookSubscriptions.update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['webhookSubscriptions.update'].$post(args, options))
}

export async function postWebhookSubscriptionsDelete(
  args: InferRequestType<(typeof client)['webhookSubscriptions.delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['webhookSubscriptions.delete'].$post(args, options))
}
