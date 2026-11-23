import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSshMountPathConfigCaRoute,
  deleteSshMountPathConfigZeroaddressRoute,
  deleteSshMountPathRolesRoleRoute,
  deleteSshMountPathTidyDynamicKeysRoute,
  getSshMountPathConfigCaRoute,
  getSshMountPathConfigZeroaddressRoute,
  getSshMountPathPublicKeyRoute,
  getSshMountPathRolesIndexRoute,
  getSshMountPathRolesRoleRoute,
  postSshMountPathConfigCaRoute,
  postSshMountPathConfigZeroaddressRoute,
  postSshMountPathCredsRoleRoute,
  postSshMountPathIssueRoleRoute,
  postSshMountPathLookupRoute,
  postSshMountPathRolesRoleRoute,
  postSshMountPathSignRoleRoute,
  postSshMountPathVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sshMountPathHandler = app
  .openapi(getSshMountPathConfigCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathConfigCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSshMountPathConfigCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshMountPathConfigZeroaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathConfigZeroaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSshMountPathConfigZeroaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathCredsRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathIssueRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshMountPathPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshMountPathRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSshMountPathRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSshMountPathRolesRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathSignRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSshMountPathTidyDynamicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSshMountPathVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
