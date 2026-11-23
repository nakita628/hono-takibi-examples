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
} from './routes'
import {
  deleteCrmObjects202609NotesNoteIdRouteHandler,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  getCrmObjects202609NotesNoteIdAssociationsToObjectTypeRouteHandler,
  getCrmObjects202609NotesNoteIdRouteHandler,
  getCrmObjects202609NotesRouteHandler,
  patchCrmObjects202609NotesNoteIdRouteHandler,
  postCrmObjects202609NotesBatchArchiveRouteHandler,
  postCrmObjects202609NotesBatchCreateRouteHandler,
  postCrmObjects202609NotesBatchReadRouteHandler,
  postCrmObjects202609NotesBatchUpdateRouteHandler,
  postCrmObjects202609NotesBatchUpsertRouteHandler,
  postCrmObjects202609NotesGdprDeleteRouteHandler,
  postCrmObjects202609NotesMergeRouteHandler,
  postCrmObjects202609NotesRouteHandler,
  postCrmObjects202609NotesSearchRouteHandler,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCrmObjects202609NotesRoute, getCrmObjects202609NotesRouteHandler)
  .openapi(postCrmObjects202609NotesRoute, postCrmObjects202609NotesRouteHandler)
  .openapi(
    postCrmObjects202609NotesBatchArchiveRoute,
    postCrmObjects202609NotesBatchArchiveRouteHandler,
  )
  .openapi(
    postCrmObjects202609NotesBatchCreateRoute,
    postCrmObjects202609NotesBatchCreateRouteHandler,
  )
  .openapi(postCrmObjects202609NotesBatchReadRoute, postCrmObjects202609NotesBatchReadRouteHandler)
  .openapi(
    postCrmObjects202609NotesBatchUpdateRoute,
    postCrmObjects202609NotesBatchUpdateRouteHandler,
  )
  .openapi(
    postCrmObjects202609NotesBatchUpsertRoute,
    postCrmObjects202609NotesBatchUpsertRouteHandler,
  )
  .openapi(
    postCrmObjects202609NotesGdprDeleteRoute,
    postCrmObjects202609NotesGdprDeleteRouteHandler,
  )
  .openapi(postCrmObjects202609NotesMergeRoute, postCrmObjects202609NotesMergeRouteHandler)
  .openapi(postCrmObjects202609NotesSearchRoute, postCrmObjects202609NotesSearchRouteHandler)
  .openapi(getCrmObjects202609NotesNoteIdRoute, getCrmObjects202609NotesNoteIdRouteHandler)
  .openapi(deleteCrmObjects202609NotesNoteIdRoute, deleteCrmObjects202609NotesNoteIdRouteHandler)
  .openapi(patchCrmObjects202609NotesNoteIdRoute, patchCrmObjects202609NotesNoteIdRouteHandler)
  .openapi(
    getCrmObjects202609NotesNoteIdAssociationsToObjectTypeRoute,
    getCrmObjects202609NotesNoteIdAssociationsToObjectTypeRouteHandler,
  )
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRouteHandler,
  )

export default app
