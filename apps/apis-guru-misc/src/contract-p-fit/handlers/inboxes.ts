import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInboxesInboxIdDocumentsRoute,
  deleteInboxesInboxIdRoute,
  getInboxesInboxIdDocumentsRoute,
  getInboxesInboxIdDocumentVersionsRoute,
  getInboxesInboxIdPaginatedRoute,
  getInboxesInboxIdRoute,
  getInboxesRoute,
  patchInboxesInboxIdRoute,
  postInboxesInboxIdReprocessRoute,
  postInboxesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inboxesHandler = app
  .openapi(getInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInboxesInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchInboxesInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdDocumentVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInboxesInboxIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInboxesInboxIdPaginatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInboxesInboxIdReprocessRoute, (c) => {
    throw new Error('Not implemented')
  })
