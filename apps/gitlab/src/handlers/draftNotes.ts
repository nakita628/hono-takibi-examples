import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteIdRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteIdRoute,
  getApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesBulkPublishRoute,
  postApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesRoute,
  putApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteIdPublishRoute,
  putApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const draftNotesHandler = app
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesBulkPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
