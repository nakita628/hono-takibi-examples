import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgMigrationsMigrationIdArchiveRoute,
  deleteOrgsOrgMigrationsMigrationIdReposRepoNameLockRoute,
  deleteReposOwnerRepoImportRoute,
  deleteUserMigrationsMigrationIdArchiveRoute,
  deleteUserMigrationsMigrationIdReposRepoNameLockRoute,
  getOrgsOrgMigrationsMigrationIdArchiveRoute,
  getOrgsOrgMigrationsMigrationIdRepositoriesRoute,
  getOrgsOrgMigrationsMigrationIdRoute,
  getOrgsOrgMigrationsRoute,
  getReposOwnerRepoImportAuthorsRoute,
  getReposOwnerRepoImportLargeFilesRoute,
  getReposOwnerRepoImportRoute,
  getUserMigrationsMigrationIdArchiveRoute,
  getUserMigrationsMigrationIdRepositoriesRoute,
  getUserMigrationsMigrationIdRoute,
  getUserMigrationsRoute,
  patchReposOwnerRepoImportAuthorsAuthorIdRoute,
  patchReposOwnerRepoImportLfsRoute,
  patchReposOwnerRepoImportRoute,
  postOrgsOrgMigrationsRoute,
  postUserMigrationsRoute,
  putReposOwnerRepoImportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const migrationsHandler = app
  .openapi(getOrgsOrgMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMigrationsMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMigrationsMigrationIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgMigrationsMigrationIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgMigrationsMigrationIdReposRepoNameLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgMigrationsMigrationIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReposOwnerRepoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoImportAuthorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoImportAuthorsAuthorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoImportLargeFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoImportLfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMigrationsMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMigrationsMigrationIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserMigrationsMigrationIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserMigrationsMigrationIdReposRepoNameLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserMigrationsMigrationIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
