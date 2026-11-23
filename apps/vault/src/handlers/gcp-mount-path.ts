import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGcpMountPathImpersonatedAccountNameRoute,
  deleteGcpMountPathRolesetNameRoute,
  deleteGcpMountPathStaticAccountNameRoute,
  getGcpMountPathConfigRoute,
  getGcpMountPathImpersonatedAccountIndexRoute,
  getGcpMountPathImpersonatedAccountNameRoute,
  getGcpMountPathImpersonatedAccountNameTokenRoute,
  getGcpMountPathImpersonatedAccountsIndexRoute,
  getGcpMountPathKeyRolesetRoute,
  getGcpMountPathRolesetIndexRoute,
  getGcpMountPathRolesetNameRoute,
  getGcpMountPathRolesetRolesetKeyRoute,
  getGcpMountPathRolesetRolesetTokenRoute,
  getGcpMountPathRolesetsIndexRoute,
  getGcpMountPathStaticAccountIndexRoute,
  getGcpMountPathStaticAccountNameKeyRoute,
  getGcpMountPathStaticAccountNameRoute,
  getGcpMountPathStaticAccountNameTokenRoute,
  getGcpMountPathStaticAccountsIndexRoute,
  getGcpMountPathTokenRolesetRoute,
  postGcpMountPathConfigRotateRootRoute,
  postGcpMountPathConfigRoute,
  postGcpMountPathImpersonatedAccountNameRoute,
  postGcpMountPathImpersonatedAccountNameTokenRoute,
  postGcpMountPathKeyRolesetRoute,
  postGcpMountPathRolesetNameRotateKeyRoute,
  postGcpMountPathRolesetNameRotateRoute,
  postGcpMountPathRolesetNameRoute,
  postGcpMountPathRolesetRolesetKeyRoute,
  postGcpMountPathRolesetRolesetTokenRoute,
  postGcpMountPathStaticAccountNameKeyRoute,
  postGcpMountPathStaticAccountNameRotateKeyRoute,
  postGcpMountPathStaticAccountNameRoute,
  postGcpMountPathStaticAccountNameTokenRoute,
  postGcpMountPathTokenRolesetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gcpMountPathHandler = app
  .openapi(getGcpMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathConfigRotateRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathImpersonatedAccountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathImpersonatedAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathImpersonatedAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpMountPathImpersonatedAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathImpersonatedAccountNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathImpersonatedAccountNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathImpersonatedAccountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathKeyRolesetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathKeyRolesetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathRolesetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathRolesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathRolesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpMountPathRolesetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathRolesetNameRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathRolesetNameRotateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathRolesetRolesetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathRolesetRolesetKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathRolesetRolesetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathRolesetRolesetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathRolesetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathStaticAccountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathStaticAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathStaticAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpMountPathStaticAccountNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathStaticAccountNameKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathStaticAccountNameKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathStaticAccountNameRotateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathStaticAccountNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathStaticAccountNameTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathStaticAccountsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpMountPathTokenRolesetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpMountPathTokenRolesetRoute, (c) => {
    throw new Error('Not implemented')
  })
