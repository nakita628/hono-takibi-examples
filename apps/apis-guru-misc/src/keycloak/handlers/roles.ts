import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmClientsIdRolesRoleNameCompositesRoute,
  deleteRealmClientsIdRolesRoleNameRoute,
  deleteRealmRolesRoleNameCompositesRoute,
  deleteRealmRolesRoleNameRoute,
  getRealmClientsIdRolesRoleNameCompositesClientsClientRoute,
  getRealmClientsIdRolesRoleNameCompositesRealmRoute,
  getRealmClientsIdRolesRoleNameCompositesRoute,
  getRealmClientsIdRolesRoleNameGroupsRoute,
  getRealmClientsIdRolesRoleNameManagementPermissionsRoute,
  getRealmClientsIdRolesRoleNameRoute,
  getRealmClientsIdRolesRoleNameUsersRoute,
  getRealmClientsIdRolesRoute,
  getRealmRolesRoleNameCompositesClientsClientRoute,
  getRealmRolesRoleNameCompositesRealmRoute,
  getRealmRolesRoleNameCompositesRoute,
  getRealmRolesRoleNameGroupsRoute,
  getRealmRolesRoleNameManagementPermissionsRoute,
  getRealmRolesRoleNameRoute,
  getRealmRolesRoleNameUsersRoute,
  getRealmRolesRoute,
  postRealmClientsIdRolesRoleNameCompositesRoute,
  postRealmClientsIdRolesRoute,
  postRealmRolesRoleNameCompositesRoute,
  postRealmRolesRoute,
  putRealmClientsIdRolesRoleNameManagementPermissionsRoute,
  putRealmClientsIdRolesRoleNameRoute,
  putRealmRolesRoleNameManagementPermissionsRoute,
  putRealmRolesRoleNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rolesHandler = app
  .openapi(getRealmClientsIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmClientsIdRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmClientsIdRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameCompositesClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameCompositesRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmClientsIdRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmClientsIdRolesRoleNameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmRolesRoleNameCompositesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameCompositesClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameCompositesRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmRolesRoleNameManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmRolesRoleNameUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
