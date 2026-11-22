import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUsersGroupsIdIndexRoute,
  deleteApiUsersGroupsIndexRoute,
  deleteApiUsersOwnerGroupsIdIndexRoute,
  deleteApiUsersOwnerGroupsIndexRoute,
  deleteApiUsersOwnersIdIndexRoute,
  deleteApiUsersOwnersIndexRoute,
  deleteApiUsersPermissionsIdIndexRoute,
  deleteApiUsersPermissionsIndexRoute,
  deleteApiUsersTokensIdIndexRoute,
  deleteApiUsersTokensIndexRoute,
  deleteApiUsersUsersIdIndexRoute,
  deleteApiUsersUsersIndexRoute,
  getApiUsersConfigIndexRoute,
  getApiUsersGroupsIdIndexRoute,
  getApiUsersGroupsIndexRoute,
  getApiUsersOwnerGroupsIdIndexRoute,
  getApiUsersOwnerGroupsIndexRoute,
  getApiUsersOwnersIdIndexRoute,
  getApiUsersOwnersIndexRoute,
  getApiUsersPermissionsIdIndexRoute,
  getApiUsersPermissionsIndexRoute,
  getApiUsersTokensIdIndexRoute,
  getApiUsersTokensIndexRoute,
  getApiUsersUsersIdIndexRoute,
  getApiUsersUsersIndexRoute,
  patchApiUsersGroupsIdIndexRoute,
  patchApiUsersGroupsIndexRoute,
  patchApiUsersOwnerGroupsIdIndexRoute,
  patchApiUsersOwnerGroupsIndexRoute,
  patchApiUsersOwnersIdIndexRoute,
  patchApiUsersOwnersIndexRoute,
  patchApiUsersPermissionsIdIndexRoute,
  patchApiUsersPermissionsIndexRoute,
  patchApiUsersTokensIdIndexRoute,
  patchApiUsersTokensIndexRoute,
  patchApiUsersUsersIdIndexRoute,
  patchApiUsersUsersIndexRoute,
  postApiUsersGroupsIndexRoute,
  postApiUsersOwnerGroupsIndexRoute,
  postApiUsersOwnersIndexRoute,
  postApiUsersPermissionsIndexRoute,
  postApiUsersTokensIndexRoute,
  postApiUsersTokensProvisionIndexRoute,
  postApiUsersUsersIndexRoute,
  putApiUsersGroupsIdIndexRoute,
  putApiUsersGroupsIndexRoute,
  putApiUsersOwnerGroupsIdIndexRoute,
  putApiUsersOwnerGroupsIndexRoute,
  putApiUsersOwnersIdIndexRoute,
  putApiUsersOwnersIndexRoute,
  putApiUsersPermissionsIdIndexRoute,
  putApiUsersPermissionsIndexRoute,
  putApiUsersTokensIdIndexRoute,
  putApiUsersTokensIndexRoute,
  putApiUsersUsersIdIndexRoute,
  putApiUsersUsersIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getApiUsersConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersOwnerGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersOwnerGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersOwnerGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersOwnerGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersOwnerGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersOwnerGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersOwnerGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersOwnerGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersOwnerGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersOwnersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersOwnersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersOwnersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersOwnersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersOwnersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersOwnersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersOwnersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersOwnersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersOwnersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersTokensProvisionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUsersUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
