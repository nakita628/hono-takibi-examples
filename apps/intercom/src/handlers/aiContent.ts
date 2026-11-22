import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiContentImportSourcesSourceIdRoute,
  deleteAiExternalPagesExternalPageIdTagsIdRoute,
  deleteAiExternalPagesPageIdRoute,
  getAiContentImportSourcesRoute,
  getAiContentImportSourcesSourceIdRoute,
  getAiExternalPagesPageIdRoute,
  getAiExternalPagesRoute,
  postAiContentImportSourcesRoute,
  postAiExternalPagesExternalPageIdTagsRoute,
  postAiExternalPagesRoute,
  putAiContentImportSourcesSourceIdRoute,
  putAiExternalPagesPageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiContentHandler = app
  .openapi(getAiContentImportSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiContentImportSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiContentImportSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiContentImportSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiContentImportSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiExternalPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiExternalPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiExternalPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiExternalPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiExternalPagesPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiExternalPagesExternalPageIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiExternalPagesExternalPageIdTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
