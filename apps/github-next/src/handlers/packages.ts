import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgPackagesPackageTypePackageNameRoute,
  deleteOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  deleteUserPackagesPackageTypePackageNameRoute,
  deleteUserPackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  deleteUsersUsernamePackagesPackageTypePackageNameRoute,
  deleteUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  getOrgsOrgDockerConflictsRoute,
  getOrgsOrgPackagesPackageTypePackageNameRoute,
  getOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  getOrgsOrgPackagesPackageTypePackageNameVersionsRoute,
  getOrgsOrgPackagesRoute,
  getUserDockerConflictsRoute,
  getUserPackagesPackageTypePackageNameRoute,
  getUserPackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  getUserPackagesPackageTypePackageNameVersionsRoute,
  getUserPackagesRoute,
  getUsersUsernameDockerConflictsRoute,
  getUsersUsernamePackagesPackageTypePackageNameRoute,
  getUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRoute,
  getUsersUsernamePackagesPackageTypePackageNameVersionsRoute,
  getUsersUsernamePackagesRoute,
  postOrgsOrgPackagesPackageTypePackageNameRestoreRoute,
  postOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute,
  postUserPackagesPackageTypePackageNameRestoreRoute,
  postUserPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute,
  postUsersUsernamePackagesPackageTypePackageNameRestoreRoute,
  postUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesHandler = app
  .openapi(getOrgsOrgDockerConflictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgPackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgPackagesPackageTypePackageNameRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPackagesPackageTypePackageNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserDockerConflictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserPackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPackagesPackageTypePackageNameRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPackagesPackageTypePackageNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserPackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserPackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserPackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameDockerConflictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernamePackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernamePackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernamePackagesPackageTypePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsernamePackagesPackageTypePackageNameRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernamePackagesPackageTypePackageNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postUsersUsernamePackagesPackageTypePackageNameVersionsPackageVersionIdRestoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
