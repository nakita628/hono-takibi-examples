import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDraftsDraftIdRoute,
  deleteSavedSnippetsSavedSnippetIdRoute,
  getDraftsRoute,
  getSavedSnippetsRoute,
  patchDraftsDraftIdRoute,
  patchSavedSnippetsSavedSnippetIdRoute,
  postDraftsRoute,
  postSavedSnippetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const draftsHandler = app
  .openapi(getDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDraftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDraftsDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDraftsDraftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSavedSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSavedSnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSavedSnippetsSavedSnippetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSavedSnippetsSavedSnippetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
