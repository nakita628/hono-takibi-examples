import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeNotesNoteIdAttachmentsAttachmentIdRoute,
  deleteMeNotesNoteIdExtensionsExtensionIdRoute,
  deleteMeNotesNoteIdRoute,
  getMeNotesCountRoute,
  getMeNotesDeltaRoute,
  getMeNotesNoteIdAttachmentsAttachmentIdRoute,
  getMeNotesNoteIdAttachmentsCountRoute,
  getMeNotesNoteIdAttachmentsRoute,
  getMeNotesNoteIdExtensionsCountRoute,
  getMeNotesNoteIdExtensionsExtensionIdRoute,
  getMeNotesNoteIdExtensionsRoute,
  getMeNotesNoteIdRoute,
  getMeNotesRoute,
  patchMeNotesNoteIdExtensionsExtensionIdRoute,
  patchMeNotesNoteIdRoute,
  postMeNotesNoteIdAttachmentsCreateUploadSessionRoute,
  postMeNotesNoteIdAttachmentsRoute,
  postMeNotesNoteIdExtensionsRoute,
  postMeNotesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meNoteHandler = app
  .openapi(getMeNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeNotesNoteIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeNotesNoteIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeNotesNoteIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeNotesNoteIdAttachmentsAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeNotesNoteIdAttachmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeNotesNoteIdAttachmentsCreateUploadSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeNotesNoteIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeNotesNoteIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeNotesNoteIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeNotesNoteIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeNotesNoteIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeNotesNoteIdExtensionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeNotesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeNotesDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
