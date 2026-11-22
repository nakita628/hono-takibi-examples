import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609NotesBatchArchiveRoute,
  postCrmObjects202609NotesBatchCreateRoute,
  postCrmObjects202609NotesBatchReadRoute,
  postCrmObjects202609NotesBatchUpdateRoute,
  postCrmObjects202609NotesBatchUpsertRoute,
  putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
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
  .openapi(
    putCrmObjects202609FromObjectTypeFromObjectIdAssociationsDefaultToObjectTypeToObjectIdRoute,
    (c) => {},
  )
