import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAppendChatMessage(
  args: InferRequestType<typeof client.appendChatMessage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appendChatMessage.$get(args, options))
}

export async function postAppendChatMessage(
  args: InferRequestType<typeof client.appendChatMessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appendChatMessage.$post(args, options))
}

export async function getAppendText(
  args: InferRequestType<typeof client.appendText.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appendText.$get(args, options))
}

export async function postAppendText(
  args: InferRequestType<typeof client.appendText.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appendText.$post(args, options))
}

export async function getCheckToken(options?: ClientRequestOptions) {
  return await parseResponse(client.checkToken.$get(undefined, options))
}

export async function postCheckToken(options?: ClientRequestOptions) {
  return await parseResponse(client.checkToken.$post(undefined, options))
}

export async function getCopyPad(
  args: InferRequestType<typeof client.copyPad.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.copyPad.$get(args, options))
}

export async function postCopyPad(
  args: InferRequestType<typeof client.copyPad.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.copyPad.$post(args, options))
}

export async function getCopyPadWithoutHistory(
  args: InferRequestType<typeof client.copyPadWithoutHistory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.copyPadWithoutHistory.$get(args, options))
}

export async function postCopyPadWithoutHistory(
  args: InferRequestType<typeof client.copyPadWithoutHistory.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.copyPadWithoutHistory.$post(args, options))
}

export async function getCreateAuthor(
  args: InferRequestType<typeof client.createAuthor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createAuthor.$get(args, options))
}

export async function postCreateAuthor(
  args: InferRequestType<typeof client.createAuthor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createAuthor.$post(args, options))
}

export async function getCreateAuthorIfNotExistsFor(
  args: InferRequestType<typeof client.createAuthorIfNotExistsFor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createAuthorIfNotExistsFor.$get(args, options))
}

export async function postCreateAuthorIfNotExistsFor(
  args: InferRequestType<typeof client.createAuthorIfNotExistsFor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createAuthorIfNotExistsFor.$post(args, options))
}

export async function getCreateDiffHTML(
  args: InferRequestType<typeof client.createDiffHTML.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createDiffHTML.$get(args, options))
}

export async function postCreateDiffHTML(
  args: InferRequestType<typeof client.createDiffHTML.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createDiffHTML.$post(args, options))
}

export async function getCreateGroup(options?: ClientRequestOptions) {
  return await parseResponse(client.createGroup.$get(undefined, options))
}

export async function postCreateGroup(options?: ClientRequestOptions) {
  return await parseResponse(client.createGroup.$post(undefined, options))
}

export async function getCreateGroupIfNotExistsFor(
  args: InferRequestType<typeof client.createGroupIfNotExistsFor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createGroupIfNotExistsFor.$get(args, options))
}

export async function postCreateGroupIfNotExistsFor(
  args: InferRequestType<typeof client.createGroupIfNotExistsFor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createGroupIfNotExistsFor.$post(args, options))
}

export async function getCreateGroupPad(
  args: InferRequestType<typeof client.createGroupPad.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createGroupPad.$get(args, options))
}

export async function postCreateGroupPad(
  args: InferRequestType<typeof client.createGroupPad.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createGroupPad.$post(args, options))
}

export async function getCreatePad(
  args: InferRequestType<typeof client.createPad.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createPad.$get(args, options))
}

export async function postCreatePad(
  args: InferRequestType<typeof client.createPad.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createPad.$post(args, options))
}

export async function getCreateSession(
  args: InferRequestType<typeof client.createSession.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createSession.$get(args, options))
}

export async function postCreateSession(
  args: InferRequestType<typeof client.createSession.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createSession.$post(args, options))
}

export async function getDeleteGroup(
  args: InferRequestType<typeof client.deleteGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteGroup.$get(args, options))
}

export async function postDeleteGroup(
  args: InferRequestType<typeof client.deleteGroup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteGroup.$post(args, options))
}

export async function getDeletePad(
  args: InferRequestType<typeof client.deletePad.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deletePad.$get(args, options))
}

export async function postDeletePad(
  args: InferRequestType<typeof client.deletePad.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deletePad.$post(args, options))
}

export async function getDeleteSession(
  args: InferRequestType<typeof client.deleteSession.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteSession.$get(args, options))
}

export async function postDeleteSession(
  args: InferRequestType<typeof client.deleteSession.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteSession.$post(args, options))
}

export async function getGetAttributePool(
  args: InferRequestType<typeof client.getAttributePool.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getAttributePool.$get(args, options))
}

export async function postGetAttributePool(
  args: InferRequestType<typeof client.getAttributePool.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getAttributePool.$post(args, options))
}

export async function getGetAuthorName(
  args: InferRequestType<typeof client.getAuthorName.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getAuthorName.$get(args, options))
}

export async function postGetAuthorName(
  args: InferRequestType<typeof client.getAuthorName.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getAuthorName.$post(args, options))
}

export async function getGetChatHead(
  args: InferRequestType<typeof client.getChatHead.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getChatHead.$get(args, options))
}

export async function postGetChatHead(
  args: InferRequestType<typeof client.getChatHead.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getChatHead.$post(args, options))
}

export async function getGetChatHistory(
  args: InferRequestType<typeof client.getChatHistory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getChatHistory.$get(args, options))
}

export async function postGetChatHistory(
  args: InferRequestType<typeof client.getChatHistory.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getChatHistory.$post(args, options))
}

export async function getGetHTML(
  args: InferRequestType<typeof client.getHTML.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getHTML.$get(args, options))
}

export async function postGetHTML(
  args: InferRequestType<typeof client.getHTML.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getHTML.$post(args, options))
}

export async function getGetLastEdited(
  args: InferRequestType<typeof client.getLastEdited.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getLastEdited.$get(args, options))
}

export async function postGetLastEdited(
  args: InferRequestType<typeof client.getLastEdited.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getLastEdited.$post(args, options))
}

export async function getGetPadID(
  args: InferRequestType<typeof client.getPadID.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getPadID.$get(args, options))
}

export async function postGetPadID(
  args: InferRequestType<typeof client.getPadID.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getPadID.$post(args, options))
}

export async function getGetPublicStatus(
  args: InferRequestType<typeof client.getPublicStatus.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getPublicStatus.$get(args, options))
}

export async function postGetPublicStatus(
  args: InferRequestType<typeof client.getPublicStatus.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getPublicStatus.$post(args, options))
}

export async function getGetReadOnlyID(
  args: InferRequestType<typeof client.getReadOnlyID.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getReadOnlyID.$get(args, options))
}

export async function postGetReadOnlyID(
  args: InferRequestType<typeof client.getReadOnlyID.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getReadOnlyID.$post(args, options))
}

export async function getGetRevisionChangeset(
  args: InferRequestType<typeof client.getRevisionChangeset.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getRevisionChangeset.$get(args, options))
}

export async function postGetRevisionChangeset(
  args: InferRequestType<typeof client.getRevisionChangeset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getRevisionChangeset.$post(args, options))
}

export async function getGetRevisionsCount(
  args: InferRequestType<typeof client.getRevisionsCount.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getRevisionsCount.$get(args, options))
}

export async function postGetRevisionsCount(
  args: InferRequestType<typeof client.getRevisionsCount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getRevisionsCount.$post(args, options))
}

export async function getGetSavedRevisionsCount(
  args: InferRequestType<typeof client.getSavedRevisionsCount.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getSavedRevisionsCount.$get(args, options))
}

export async function postGetSavedRevisionsCount(
  args: InferRequestType<typeof client.getSavedRevisionsCount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getSavedRevisionsCount.$post(args, options))
}

export async function getGetSessionInfo(
  args: InferRequestType<typeof client.getSessionInfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getSessionInfo.$get(args, options))
}

export async function postGetSessionInfo(
  args: InferRequestType<typeof client.getSessionInfo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getSessionInfo.$post(args, options))
}

export async function getGetStats(options?: ClientRequestOptions) {
  return await parseResponse(client.getStats.$get(undefined, options))
}

export async function postGetStats(options?: ClientRequestOptions) {
  return await parseResponse(client.getStats.$post(undefined, options))
}

export async function getGetText(
  args: InferRequestType<typeof client.getText.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getText.$get(args, options))
}

export async function postGetText(
  args: InferRequestType<typeof client.getText.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getText.$post(args, options))
}

export async function getListAllGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.listAllGroups.$get(undefined, options))
}

export async function postListAllGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.listAllGroups.$post(undefined, options))
}

export async function getListAllPads(options?: ClientRequestOptions) {
  return await parseResponse(client.listAllPads.$get(undefined, options))
}

export async function postListAllPads(options?: ClientRequestOptions) {
  return await parseResponse(client.listAllPads.$post(undefined, options))
}

export async function getListAuthorsOfPad(
  args: InferRequestType<typeof client.listAuthorsOfPad.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listAuthorsOfPad.$get(args, options))
}

export async function postListAuthorsOfPad(
  args: InferRequestType<typeof client.listAuthorsOfPad.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listAuthorsOfPad.$post(args, options))
}

export async function getListPads(
  args: InferRequestType<typeof client.listPads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listPads.$get(args, options))
}

export async function postListPads(
  args: InferRequestType<typeof client.listPads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listPads.$post(args, options))
}

export async function getListPadsOfAuthor(
  args: InferRequestType<typeof client.listPadsOfAuthor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listPadsOfAuthor.$get(args, options))
}

export async function postListPadsOfAuthor(
  args: InferRequestType<typeof client.listPadsOfAuthor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listPadsOfAuthor.$post(args, options))
}

export async function getListSavedRevisions(
  args: InferRequestType<typeof client.listSavedRevisions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listSavedRevisions.$get(args, options))
}

export async function postListSavedRevisions(
  args: InferRequestType<typeof client.listSavedRevisions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listSavedRevisions.$post(args, options))
}

export async function getListSessionsOfAuthor(
  args: InferRequestType<typeof client.listSessionsOfAuthor.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listSessionsOfAuthor.$get(args, options))
}

export async function postListSessionsOfAuthor(
  args: InferRequestType<typeof client.listSessionsOfAuthor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listSessionsOfAuthor.$post(args, options))
}

export async function getListSessionsOfGroup(
  args: InferRequestType<typeof client.listSessionsOfGroup.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listSessionsOfGroup.$get(args, options))
}

export async function postListSessionsOfGroup(
  args: InferRequestType<typeof client.listSessionsOfGroup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listSessionsOfGroup.$post(args, options))
}

export async function getMovePad(
  args: InferRequestType<typeof client.movePad.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movePad.$get(args, options))
}

export async function postMovePad(
  args: InferRequestType<typeof client.movePad.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.movePad.$post(args, options))
}

export async function getPadUsers(
  args: InferRequestType<typeof client.padUsers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.padUsers.$get(args, options))
}

export async function postPadUsers(
  args: InferRequestType<typeof client.padUsers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.padUsers.$post(args, options))
}

export async function getPadUsersCount(
  args: InferRequestType<typeof client.padUsersCount.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.padUsersCount.$get(args, options))
}

export async function postPadUsersCount(
  args: InferRequestType<typeof client.padUsersCount.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.padUsersCount.$post(args, options))
}

export async function getRestoreRevision(
  args: InferRequestType<typeof client.restoreRevision.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restoreRevision.$get(args, options))
}

export async function postRestoreRevision(
  args: InferRequestType<typeof client.restoreRevision.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restoreRevision.$post(args, options))
}

export async function getSaveRevision(
  args: InferRequestType<typeof client.saveRevision.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saveRevision.$get(args, options))
}

export async function postSaveRevision(
  args: InferRequestType<typeof client.saveRevision.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saveRevision.$post(args, options))
}

export async function getSendClientsMessage(
  args: InferRequestType<typeof client.sendClientsMessage.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendClientsMessage.$get(args, options))
}

export async function postSendClientsMessage(
  args: InferRequestType<typeof client.sendClientsMessage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendClientsMessage.$post(args, options))
}

export async function getSetHTML(
  args: InferRequestType<typeof client.setHTML.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setHTML.$get(args, options))
}

export async function postSetHTML(
  args: InferRequestType<typeof client.setHTML.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setHTML.$post(args, options))
}

export async function getSetPublicStatus(
  args: InferRequestType<typeof client.setPublicStatus.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setPublicStatus.$get(args, options))
}

export async function postSetPublicStatus(
  args: InferRequestType<typeof client.setPublicStatus.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setPublicStatus.$post(args, options))
}

export async function getSetText(
  args: InferRequestType<typeof client.setText.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setText.$get(args, options))
}

export async function postSetText(
  args: InferRequestType<typeof client.setText.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setText.$post(args, options))
}
