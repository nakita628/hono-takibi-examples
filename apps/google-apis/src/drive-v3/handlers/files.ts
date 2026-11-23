import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
  deleteFilesFileIdCommentsCommentIdRoute,
  deleteFilesFileIdPermissionsPermissionIdRoute,
  deleteFilesFileIdRevisionsRevisionIdRoute,
  deleteFilesFileIdRoute,
  deleteFilesTrashRoute,
  getFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
  getFilesFileIdCommentsCommentIdRepliesRoute,
  getFilesFileIdCommentsCommentIdRoute,
  getFilesFileIdCommentsRoute,
  getFilesFileIdExportRoute,
  getFilesFileIdListLabelsRoute,
  getFilesFileIdPermissionsPermissionIdRoute,
  getFilesFileIdPermissionsRoute,
  getFilesFileIdRevisionsRevisionIdRoute,
  getFilesFileIdRevisionsRoute,
  getFilesFileIdRoute,
  getFilesGenerateIdsRoute,
  getFilesRoute,
  patchFilesFileIdCommentsCommentIdRepliesReplyIdRoute,
  patchFilesFileIdCommentsCommentIdRoute,
  patchFilesFileIdPermissionsPermissionIdRoute,
  patchFilesFileIdRevisionsRevisionIdRoute,
  patchFilesFileIdRoute,
  postFilesFileIdCommentsCommentIdRepliesRoute,
  postFilesFileIdCommentsRoute,
  postFilesFileIdCopyRoute,
  postFilesFileIdModifyLabelsRoute,
  postFilesFileIdPermissionsRoute,
  postFilesFileIdWatchRoute,
  postFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app
  .openapi(getFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesGenerateIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesFileIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdCommentsCommentIdRepliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdCommentsCommentIdRepliesReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdCommentsCommentIdRepliesReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesFileIdCommentsCommentIdRepliesReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdListLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdModifyLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesFileIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchFilesFileIdRevisionsRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
