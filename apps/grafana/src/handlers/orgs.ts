import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgsOrgIdRoute,
  deleteOrgsOrgIdUsersUserIdRoute,
  getOrgsNameOrgNameRoute,
  getOrgsOrgIdRoute,
  getOrgsOrgIdUsersRoute,
  getOrgsOrgIdUsersSearchRoute,
  getOrgsRoute,
  patchOrgsOrgIdUsersUserIdRoute,
  postOrgsOrgIdUsersRoute,
  postOrgsRoute,
  putOrgsOrgIdAddressRoute,
  putOrgsOrgIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsHandler = app
  .openapi(getOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsNameOrgNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgIdAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgIdUsersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
