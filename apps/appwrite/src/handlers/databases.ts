import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRoute,
  deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
  deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
  deleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRoute,
  deleteDatabasesDatabaseIdCollectionsCollectionIdRoute,
  deleteDatabasesDatabaseIdRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdAttributesRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdIndexesRoute,
  getDatabasesDatabaseIdCollectionsCollectionIdRoute,
  getDatabasesDatabaseIdCollectionsRoute,
  getDatabasesDatabaseIdRoute,
  getDatabasesRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
  patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesIpRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesStringRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
  postDatabasesDatabaseIdCollectionsCollectionIdIndexesRoute,
  postDatabasesDatabaseIdCollectionsRoute,
  postDatabasesRoute,
  putDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute,
  putDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute,
  putDatabasesDatabaseIdCollectionsCollectionIdRoute,
  putDatabasesDatabaseIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databasesHandler = app
  .openapi(getDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatabasesDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesDatabaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesDatabaseIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesDatabaseIdCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatabasesDatabaseIdCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesDatabaseIdCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesDatabaseIdCollectionsCollectionIdAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdAttributesBooleanKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdAttributesDatetimeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEmailKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdAttributesEnumKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdAttributesFloatKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIntegerKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdAttributesIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdAttributesIpKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdAttributesRelationshipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdAttributesStringRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdAttributesStringKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdAttributesUrlKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdAttributesKeyRelationshipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeDecrementRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDatabasesDatabaseIdCollectionsCollectionIdDocumentsDocumentIdAttributeIncrementRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDatabasesDatabaseIdCollectionsCollectionIdIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesDatabaseIdCollectionsCollectionIdIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesDatabaseIdCollectionsCollectionIdIndexesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
