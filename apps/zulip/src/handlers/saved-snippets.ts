import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSavedSnippetsSavedSnippetIdRoute,
  getSavedSnippetsRoute,
  patchSavedSnippetsSavedSnippetIdRoute,
  postSavedSnippetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const savedSnippetsHandler = app
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
