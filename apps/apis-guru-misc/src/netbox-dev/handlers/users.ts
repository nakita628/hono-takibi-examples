import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersGroupsIdIndexRoute,
  deleteUsersGroupsIndexRoute,
  deleteUsersPermissionsIdIndexRoute,
  deleteUsersPermissionsIndexRoute,
  deleteUsersTokensIdIndexRoute,
  deleteUsersTokensIndexRoute,
  deleteUsersUsersIdIndexRoute,
  deleteUsersUsersIndexRoute,
  getUsersConfigIndexRoute,
  getUsersGroupsIdIndexRoute,
  getUsersGroupsIndexRoute,
  getUsersPermissionsIdIndexRoute,
  getUsersPermissionsIndexRoute,
  getUsersTokensIdIndexRoute,
  getUsersTokensIndexRoute,
  getUsersUsersIdIndexRoute,
  getUsersUsersIndexRoute,
  patchUsersGroupsIdIndexRoute,
  patchUsersGroupsIndexRoute,
  patchUsersPermissionsIdIndexRoute,
  patchUsersPermissionsIndexRoute,
  patchUsersTokensIdIndexRoute,
  patchUsersTokensIndexRoute,
  patchUsersUsersIdIndexRoute,
  patchUsersUsersIndexRoute,
  postUsersGroupsIndexRoute,
  postUsersPermissionsIndexRoute,
  postUsersTokensIndexRoute,
  postUsersTokensProvisionIndexRoute,
  postUsersUsersIndexRoute,
  putUsersGroupsIdIndexRoute,
  putUsersGroupsIndexRoute,
  putUsersPermissionsIdIndexRoute,
  putUsersPermissionsIndexRoute,
  putUsersTokensIdIndexRoute,
  putUsersTokensIndexRoute,
  putUsersUsersIdIndexRoute,
  putUsersUsersIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersPermissionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersPermissionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersTokensProvisionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
