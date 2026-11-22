import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4NodesCommentsCommentIdRoute,
  deleteV4NodesDeletedNodesRoute,
  deleteV4NodesFilesUploadsUploadIdRoute,
  deleteV4NodesNodeIdDeletedNodesRoute,
  deleteV4NodesNodeIdFavoriteRoute,
  deleteV4NodesNodeIdRoute,
  deleteV4NodesRoomsRoomIdGroupsRoute,
  deleteV4NodesRoomsRoomIdKeypairRoute,
  deleteV4NodesRoomsRoomIdUsersRoute,
  deleteV4NodesRoute,
  getV4NodesDeletedNodesDeletedNodeIdRoute,
  getV4NodesFilesFileIdDataRoomFileKeyRoute,
  getV4NodesFilesFileIdDataSpaceFileKeyRoute,
  getV4NodesFilesFileIdUserFileKeyRoute,
  getV4NodesFilesUploadsUploadIdRoute,
  getV4NodesFilesVersionsReferenceIdRoute,
  getV4NodesMissingFileKeysRoute,
  getV4NodesNodeIdCommentsRoute,
  getV4NodesNodeIdDeletedNodesRoute,
  getV4NodesNodeIdDeletedNodesVersionsRoute,
  getV4NodesNodeIdParentsRoute,
  getV4NodesNodeIdRoute,
  getV4NodesRoomsPendingRoute,
  getV4NodesRoomsRoomIdEventsRoute,
  getV4NodesRoomsRoomIdGroupsRoute,
  getV4NodesRoomsRoomIdKeypairRoute,
  getV4NodesRoomsRoomIdKeypairsRoute,
  getV4NodesRoomsRoomIdPoliciesRoute,
  getV4NodesRoomsRoomIdS3TagsRoute,
  getV4NodesRoomsRoomIdUsersRoute,
  getV4NodesRoomsRoomIdWebhooksRoute,
  getV4NodesRoute,
  getV4NodesSearchRoute,
  postV4NodesDeletedNodesActionsRestoreRoute,
  postV4NodesFilesFileIdDownloadsRoute,
  postV4NodesFilesKeysRoute,
  postV4NodesFilesUploadsRoute,
  postV4NodesFilesUploadsUploadIdRoute,
  postV4NodesFilesUploadsUploadIdS3UrlsRoute,
  postV4NodesFoldersRoute,
  postV4NodesNodeIdCommentsRoute,
  postV4NodesNodeIdCopyToRoute,
  postV4NodesNodeIdFavoriteRoute,
  postV4NodesNodeIdMoveToRoute,
  postV4NodesRoomsRoomIdKeypairRoute,
  postV4NodesRoomsRoomIdKeypairsRoute,
  postV4NodesRoomsRoomIdS3TagsRoute,
  postV4NodesRoomsRoute,
  postV4NodesZipDownloadRoute,
  postV4NodesZipRoute,
  putV4NodesCommentsCommentIdRoute,
  putV4NodesFavoritesRoute,
  putV4NodesFilesFileIdRoute,
  putV4NodesFilesRoute,
  putV4NodesFilesUploadsUploadIdRoute,
  putV4NodesFilesUploadsUploadIdS3Route,
  putV4NodesFoldersFolderIdRoute,
  putV4NodesRoomsPendingRoute,
  putV4NodesRoomsRoomIdConfigRoute,
  putV4NodesRoomsRoomIdEncryptRoute,
  putV4NodesRoomsRoomIdGroupsRoute,
  putV4NodesRoomsRoomIdGuestUsersRoute,
  putV4NodesRoomsRoomIdPoliciesRoute,
  putV4NodesRoomsRoomIdRoute,
  putV4NodesRoomsRoomIdUsersRoute,
  putV4NodesRoomsRoomIdWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodesHandler = app
  .openapi(deleteV4NodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesDeletedNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesDeletedNodesActionsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesDeletedNodesDeletedNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFilesKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFilesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesFilesUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesFilesUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFilesUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFilesUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFilesUploadsUploadIdS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFilesUploadsUploadIdS3UrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesFilesVersionsReferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesFilesFileIdDataRoomFileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesFilesFileIdDataSpaceFileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFilesFileIdDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesFilesFileIdUserFileKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesMissingFileKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdEncryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesRoomsRoomIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdGuestUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesRoomsRoomIdKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesRoomsRoomIdKeypairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesRoomsRoomIdKeypairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdS3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesRoomsRoomIdS3TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesRoomsRoomIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesRoomsRoomIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4NodesRoomsRoomIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesZipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesZipDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesNodeIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesNodeIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesNodeIdCopyToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesNodeIdDeletedNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesNodeIdDeletedNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesNodeIdDeletedNodesVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4NodesNodeIdFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesNodeIdFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4NodesNodeIdMoveToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4NodesNodeIdParentsRoute, (c) => {
    throw new Error('Not implemented')
  })
