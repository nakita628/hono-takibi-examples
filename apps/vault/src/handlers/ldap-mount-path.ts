import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLdapMountPathConfigRoute,
  deleteLdapMountPathLibraryNameRoute,
  deleteLdapMountPathRoleNameRoute,
  deleteLdapMountPathStaticRoleNameRoute,
  getLdapMountPathConfigRoute,
  getLdapMountPathCredsNameRoute,
  getLdapMountPathLibraryIndexRoute,
  getLdapMountPathLibraryNameRoute,
  getLdapMountPathLibraryNameStatusRoute,
  getLdapMountPathRoleIndexRoute,
  getLdapMountPathRoleNameRoute,
  getLdapMountPathStaticCredNameRoute,
  getLdapMountPathStaticRoleIndexRoute,
  getLdapMountPathStaticRoleNameRoute,
  postLdapMountPathConfigRoute,
  postLdapMountPathLibraryManageNameCheckInRoute,
  postLdapMountPathLibraryNameCheckInRoute,
  postLdapMountPathLibraryNameCheckOutRoute,
  postLdapMountPathLibraryNameRoute,
  postLdapMountPathRoleNameRoute,
  postLdapMountPathRotateRoleNameRoute,
  postLdapMountPathRotateRootRoute,
  postLdapMountPathStaticRoleNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ldapMountPathHandler = app
  .openapi(getLdapMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLdapMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathCredsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathLibraryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathLibraryManageNameCheckInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathLibraryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathLibraryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLdapMountPathLibraryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathLibraryNameCheckInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathLibraryNameCheckOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathLibraryNameStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLdapMountPathRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathRotateRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathRotateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathStaticCredNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathStaticRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLdapMountPathStaticRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLdapMountPathStaticRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLdapMountPathStaticRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
