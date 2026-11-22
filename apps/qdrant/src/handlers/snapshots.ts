import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute,
  deleteCollectionsCollectionNameSnapshotsSnapshotNameRoute,
  deleteSnapshotsSnapshotNameRoute,
  getCollectionsCollectionNameShardsShardIdSnapshotRoute,
  getCollectionsCollectionNameShardsShardIdSnapshotsRoute,
  getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute,
  getCollectionsCollectionNameSnapshotsRoute,
  getCollectionsCollectionNameSnapshotsSnapshotNameRoute,
  getSnapshotsRoute,
  getSnapshotsSnapshotNameRoute,
  postCollectionsCollectionNameShardsShardIdSnapshotsRoute,
  postCollectionsCollectionNameShardsShardIdSnapshotsUploadRoute,
  postCollectionsCollectionNameSnapshotsRoute,
  postCollectionsCollectionNameSnapshotsUploadRoute,
  postSnapshotsRoute,
  putCollectionsCollectionNameShardsShardIdSnapshotsRecoverRoute,
  putCollectionsCollectionNameSnapshotsRecoverRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app
  .openapi(postCollectionsCollectionNameSnapshotsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNameSnapshotsRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameShardsShardIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameShardsShardIdSnapshotsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCollectionsCollectionNameShardsShardIdSnapshotsRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameShardsShardIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsCollectionNameShardsShardIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute, (c) => {
    throw new Error('Not implemented')
  })
