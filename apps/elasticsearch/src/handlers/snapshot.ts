import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSnapshotRepositoryRoute,
  deleteSnapshotRepositorySnapshotRoute,
  getSnapshotRepositoryRoute,
  getSnapshotRepositorySnapshotRoute,
  getSnapshotRepositorySnapshotStatusRoute,
  getSnapshotRepositoryStatusRoute,
  getSnapshotRoute,
  getSnapshotStatusRoute,
  postSnapshotRepositoryAnalyzeRoute,
  postSnapshotRepositoryCleanupRoute,
  postSnapshotRepositoryRoute,
  postSnapshotRepositorySnapshotMountRoute,
  postSnapshotRepositorySnapshotRestoreRoute,
  postSnapshotRepositorySnapshotRoute,
  postSnapshotRepositoryVerifyIntegrityRoute,
  postSnapshotRepositoryVerifyRoute,
  putSnapshotRepositoryRoute,
  putSnapshotRepositorySnapshotCloneTargetSnapshotRoute,
  putSnapshotRepositorySnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotHandler = app
  .openapi(postSnapshotRepositorySnapshotMountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotRepositoryCleanupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSnapshotRepositorySnapshotCloneTargetSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotRepositorySnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSnapshotRepositorySnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotRepositorySnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnapshotRepositorySnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSnapshotRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSnapshotRepositoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotRepositoryAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotRepositoryVerifyIntegrityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotRepositorySnapshotRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotRepositoryStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSnapshotRepositorySnapshotStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSnapshotRepositoryVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
