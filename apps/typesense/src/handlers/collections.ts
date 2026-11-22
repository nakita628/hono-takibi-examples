import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAliasesAliasNameRoute,
  deleteCollectionsCollectionNameRoute,
  getAliasesAliasNameRoute,
  getAliasesRoute,
  getCollectionsCollectionNameRoute,
  getCollectionsRoute,
  patchCollectionsCollectionNameRoute,
  postCollectionsRoute,
  putAliasesAliasNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
