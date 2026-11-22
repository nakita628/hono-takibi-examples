import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609NotesNoteIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609NotesNoteIdAssociationsToObjectTypeRoute,
  getCrmObjects202609NotesNoteIdRoute,
  getCrmObjects202609NotesRoute,
  patchCrmObjects202609NotesNoteIdRoute,
  postCrmObjects202609NotesRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609NotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609NotesRoute, (c) => {
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
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
