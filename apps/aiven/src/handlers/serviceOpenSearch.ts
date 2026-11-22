import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectProjectServiceServiceNameIndexIndexPatternRoute,
  deleteProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
  getProjectProjectServiceServiceNameIndexRoute,
  getProjectProjectServiceServiceNameOpensearchAclRoute,
  getProjectProjectServiceServiceNameOpensearchSecurityRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameAllRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameStatusRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameStatusRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRestorationInProgressRoute,
  getProjectProjectServiceServiceNameOpensearchSnapshotRoute,
  getProjectProjectServiceServiceNameOpensearchTieredStorageSummaryRoute,
  postProjectProjectServiceServiceNameIndexCloseMultipleRoute,
  postProjectProjectServiceServiceNameIndexOpenMultipleRoute,
  postProjectProjectServiceServiceNameOpensearchAclRoute,
  postProjectProjectServiceServiceNameOpensearchIndexPatternCloseRoute,
  postProjectProjectServiceServiceNameOpensearchIndexPatternOpenRoute,
  postProjectProjectServiceServiceNameOpensearchSecurityAdminRoute,
  postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreCheckRoute,
  postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreRoute,
  postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
  postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameVerifyRoute,
  putProjectProjectServiceServiceNameOpensearchAclRoute,
  putProjectProjectServiceServiceNameOpensearchSecurityAdminRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceOpenSearchHandler = app
  .openapi(getProjectProjectServiceServiceNameOpensearchAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameOpensearchAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameOpensearchAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameOpensearchIndexPatternCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameIndexCloseMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectServiceServiceNameIndexIndexPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameOpensearchIndexPatternOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameIndexOpenMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameOpensearchSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectServiceServiceNameOpensearchSecurityAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameOpensearchSecurityAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameRestoreCheckRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameSnapshotNameStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectProjectServiceServiceNameOpensearchSnapshotRepositoryNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameOpensearchSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameOpensearchSnapshotRestorationInProgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectServiceServiceNameOpensearchTieredStorageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
