import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdNotesNoteIdAttachmentsAttachmentIdRoute,
  deleteUsersUserIdNotesNoteIdExtensionsExtensionIdRoute,
  deleteUsersUserIdNotesNoteIdRoute,
  getUsersUserIdNotesCountRoute,
  getUsersUserIdNotesDeltaRoute,
  getUsersUserIdNotesNoteIdAttachmentsAttachmentIdRoute,
  getUsersUserIdNotesNoteIdAttachmentsCountRoute,
  getUsersUserIdNotesNoteIdAttachmentsRoute,
  getUsersUserIdNotesNoteIdExtensionsCountRoute,
  getUsersUserIdNotesNoteIdExtensionsExtensionIdRoute,
  getUsersUserIdNotesNoteIdExtensionsRoute,
  getUsersUserIdNotesNoteIdRoute,
  getUsersUserIdNotesRoute,
  patchUsersUserIdNotesNoteIdExtensionsExtensionIdRoute,
  patchUsersUserIdNotesNoteIdRoute,
  postUsersUserIdNotesNoteIdAttachmentsCreateUploadSessionRoute,
  postUsersUserIdNotesNoteIdAttachmentsRoute,
  postUsersUserIdNotesNoteIdExtensionsRoute,
  postUsersUserIdNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersNoteHandler = app
  .openapi(getUsersUserIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdNotesNoteIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdNotesNoteIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdNotesNoteIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdNotesNoteIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdNotesNoteIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdNotesNoteIdAttachmentsCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdNotesNoteIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdNotesNoteIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdNotesNoteIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdNotesNoteIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdNotesNoteIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdNotesNoteIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdNotesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdNotesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
