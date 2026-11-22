import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1GroupsGroupKeyAliasesAliasRoute,
  deleteAdminDirectoryV1GroupsGroupKeyRoute,
  getAdminDirectoryV1GroupsGroupKeyAliasesRoute,
  getAdminDirectoryV1GroupsGroupKeyRoute,
  getAdminDirectoryV1GroupsRoute,
  patchAdminDirectoryV1GroupsGroupKeyRoute,
  postAdminDirectoryV1GroupsGroupKeyAliasesRoute,
  postAdminDirectoryV1GroupsRoute,
  putAdminDirectoryV1GroupsGroupKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getAdminDirectoryV1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1GroupsGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1GroupsGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1GroupsGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1GroupsGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1GroupsGroupKeyAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1GroupsGroupKeyAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1GroupsGroupKeyAliasesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
