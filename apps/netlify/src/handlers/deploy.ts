import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeploysDeployIdRoute,
  deleteSitesSiteIdDeploysDeployIdRoute,
  getDeploysDeployIdRoute,
  getSitesSiteIdDeploysDeployIdRoute,
  getSitesSiteIdDeploysRoute,
  postDeploysDeployIdCancelRoute,
  postDeploysDeployIdLockRoute,
  postDeploysDeployIdUnlockRoute,
  postSitesSiteIdDeploysDeployIdRestoreRoute,
  postSitesSiteIdDeploysRoute,
  putDeploysDeployIdServerCodeShaRoute,
  putSitesSiteIdDeploysDeployIdRoute,
  putSitesSiteIdRollbackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deployHandler = app
  .openapi(getSitesSiteIdDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDeploysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSitesSiteIdDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploysDeployIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSitesSiteIdDeploysDeployIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSitesSiteIdRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeploysDeployIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploysDeployIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeploysDeployIdUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDeploysDeployIdServerCodeShaRoute, (c) => {
    throw new Error('Not implemented')
  })
