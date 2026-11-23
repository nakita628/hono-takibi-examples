import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatabaseMountPathConfigNameRoute,
  deleteDatabaseMountPathRolesNameRoute,
  deleteDatabaseMountPathStaticRolesNameRoute,
  getDatabaseMountPathConfigIndexRoute,
  getDatabaseMountPathConfigNameRoute,
  getDatabaseMountPathCredsNameRoute,
  getDatabaseMountPathRolesIndexRoute,
  getDatabaseMountPathRolesNameRoute,
  getDatabaseMountPathStaticCredsNameRoute,
  getDatabaseMountPathStaticRolesIndexRoute,
  getDatabaseMountPathStaticRolesNameRoute,
  postDatabaseMountPathConfigNameRoute,
  postDatabaseMountPathResetNameRoute,
  postDatabaseMountPathRolesNameRoute,
  postDatabaseMountPathRotateRoleNameRoute,
  postDatabaseMountPathRotateRootNameRoute,
  postDatabaseMountPathStaticRolesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databaseMountPathHandler = app
  .openapi(getDatabaseMountPathConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabaseMountPathConfigNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathResetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabaseMountPathRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathRotateRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathRotateRootNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathStaticCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathStaticRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabaseMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabaseMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabaseMountPathStaticRolesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
