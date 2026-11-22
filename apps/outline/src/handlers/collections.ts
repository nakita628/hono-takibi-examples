import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCollectionsAddGroupRoute,
  postCollectionsAddUserRoute,
  postCollectionsArchiveRoute,
  postCollectionsCreateRoute,
  postCollectionsDeleteRoute,
  postCollectionsDocumentsRoute,
  postCollectionsDuplicateRoute,
  postCollectionsExportAllRoute,
  postCollectionsExportRoute,
  postCollectionsGroupMembershipsRoute,
  postCollectionsImportRoute,
  postCollectionsInfoRoute,
  postCollectionsListRoute,
  postCollectionsMembershipsRoute,
  postCollectionsMoveRoute,
  postCollectionsRemoveGroupRoute,
  postCollectionsRemoveUserRoute,
  postCollectionsRestoreRoute,
  postCollectionsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(postCollectionsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsAddUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsRemoveUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsAddGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsRemoveGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsGroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsExportAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
