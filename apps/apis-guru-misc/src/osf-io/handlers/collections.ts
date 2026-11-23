import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionIdCollectedMetadataCgmIdRoute,
  deleteCollectionsCollectionIdIndexRoute,
  deleteCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute,
  deleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute,
  getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRoute,
  getCollectionsCollectionIdCollectedMetadataCgmIdRoute,
  getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexRoute,
  getCollectionsCollectionIdCollectedMetadataIndexRoute,
  getCollectionsCollectionIdIndexRoute,
  getCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute,
  getCollectionsCollectionIdLinkedNodesRoute,
  getCollectionsCollectionIdLinkedPreprintsIndexRoute,
  getCollectionsCollectionIdLinkedRegistrationsIndexRoute,
  getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute,
  getCollectionsIndexRoute,
  postCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRoute,
  postCollectionsCollectionIdCollectedMetadataCgmIdRoute,
  postCollectionsCollectionIdCollectedMetadataIndexRoute,
  postCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute,
  postCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute,
  postCollectionsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getCollectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdCollectedMetadataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionIdCollectedMetadataIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionIdCollectedMetadataCgmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdCollectedMetadataCgmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionIdCollectedMetadataCgmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postCollectionsCollectionIdCollectedMetadataCgmIdRelationshipsSubjectsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCollectionsCollectionIdCollectedMetadataCgmIdSubjectsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdLinkedNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionIdLinkedNodesRelationshipsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdLinkedPreprintsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdLinkedRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionIdLinkedRegistrationsRelationshipsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
