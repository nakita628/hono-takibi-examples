import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiCollectionsUuidRoute,
  deleteAiCollectionsUuidSourcesSourceIdRoute,
  getAiCollectionsRoute,
  getAiCollectionsSlugSlugRoute,
  getAiCollectionsUuidRoute,
  getAiCollectionsUuidSettingsRoute,
  getAiCollectionsUuidSourcesRoute,
  getAiKnowledgeCollectionsSlugDocumentsRoute,
  patchAiCollectionsUuidRoute,
  patchAiCollectionsUuidSettingsRoute,
  postAiCollectionsRoute,
  postAiCollectionsUuidSourcesRoute,
  putAiCollectionsUuidSettingsRoute,
  putAiCollectionsUuidSourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiCollectionsHandler = app
  .openapi(getAiCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiCollectionsSlugSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiCollectionsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiCollectionsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiCollectionsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiCollectionsUuidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiCollectionsUuidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiCollectionsUuidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiCollectionsUuidSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiCollectionsUuidSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiCollectionsUuidSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiCollectionsUuidSourcesSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiKnowledgeCollectionsSlugDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
