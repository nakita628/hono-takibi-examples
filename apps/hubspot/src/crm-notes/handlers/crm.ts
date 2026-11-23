import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609NotesNoteIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609NotesNoteIdAssociationsToObjectTypeRoute,
  getCrmObjects202609NotesNoteIdRoute,
  getCrmObjects202609NotesRoute,
  patchCrmObjects202609NotesNoteIdRoute,
  postCrmObjects202609NotesBatchArchiveRoute,
  postCrmObjects202609NotesBatchCreateRoute,
  postCrmObjects202609NotesBatchReadRoute,
  postCrmObjects202609NotesBatchUpdateRoute,
  postCrmObjects202609NotesBatchUpsertRoute,
  postCrmObjects202609NotesGdprDeleteRoute,
  postCrmObjects202609NotesMergeRoute,
  postCrmObjects202609NotesRoute,
  postCrmObjects202609NotesSearchRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(getCrmObjects202609NotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609NotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609NotesBatchArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609NotesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609NotesBatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609NotesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609NotesBatchUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609NotesGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609NotesMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609NotesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609NotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609NotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609NotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609NotesNoteIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
