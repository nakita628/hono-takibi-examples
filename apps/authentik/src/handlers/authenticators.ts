import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuthenticatorsAdminDuoIdIndexRoute,
  deleteAuthenticatorsAdminEmailIdIndexRoute,
  deleteAuthenticatorsAdminEndpointUuidIndexRoute,
  deleteAuthenticatorsAdminSmsIdIndexRoute,
  deleteAuthenticatorsAdminStaticIdIndexRoute,
  deleteAuthenticatorsAdminTotpIdIndexRoute,
  deleteAuthenticatorsAdminWebauthnIdIndexRoute,
  deleteAuthenticatorsDuoIdIndexRoute,
  deleteAuthenticatorsEmailIdIndexRoute,
  deleteAuthenticatorsSmsIdIndexRoute,
  deleteAuthenticatorsStaticIdIndexRoute,
  deleteAuthenticatorsTotpIdIndexRoute,
  deleteAuthenticatorsWebauthnIdIndexRoute,
  getAuthenticatorsAdminAllIndexRoute,
  getAuthenticatorsAdminDuoIdIndexRoute,
  getAuthenticatorsAdminDuoIndexRoute,
  getAuthenticatorsAdminEmailIdIndexRoute,
  getAuthenticatorsAdminEmailIndexRoute,
  getAuthenticatorsAdminEndpointIndexRoute,
  getAuthenticatorsAdminEndpointUuidIndexRoute,
  getAuthenticatorsAdminSmsIdIndexRoute,
  getAuthenticatorsAdminSmsIndexRoute,
  getAuthenticatorsAdminStaticIdIndexRoute,
  getAuthenticatorsAdminStaticIndexRoute,
  getAuthenticatorsAdminTotpIdIndexRoute,
  getAuthenticatorsAdminTotpIndexRoute,
  getAuthenticatorsAdminWebauthnIdIndexRoute,
  getAuthenticatorsAdminWebauthnIndexRoute,
  getAuthenticatorsAllIndexRoute,
  getAuthenticatorsDuoIdIndexRoute,
  getAuthenticatorsDuoIdUsedByIndexRoute,
  getAuthenticatorsDuoIndexRoute,
  getAuthenticatorsEmailIdIndexRoute,
  getAuthenticatorsEmailIdUsedByIndexRoute,
  getAuthenticatorsEmailIndexRoute,
  getAuthenticatorsEndpointIndexRoute,
  getAuthenticatorsEndpointUuidIndexRoute,
  getAuthenticatorsEndpointUuidUsedByIndexRoute,
  getAuthenticatorsSmsIdIndexRoute,
  getAuthenticatorsSmsIdUsedByIndexRoute,
  getAuthenticatorsSmsIndexRoute,
  getAuthenticatorsStaticIdIndexRoute,
  getAuthenticatorsStaticIdUsedByIndexRoute,
  getAuthenticatorsStaticIndexRoute,
  getAuthenticatorsTotpIdIndexRoute,
  getAuthenticatorsTotpIdUsedByIndexRoute,
  getAuthenticatorsTotpIndexRoute,
  getAuthenticatorsWebauthnIdIndexRoute,
  getAuthenticatorsWebauthnIdUsedByIndexRoute,
  getAuthenticatorsWebauthnIndexRoute,
  patchAuthenticatorsAdminDuoIdIndexRoute,
  patchAuthenticatorsAdminEmailIdIndexRoute,
  patchAuthenticatorsAdminEndpointUuidIndexRoute,
  patchAuthenticatorsAdminSmsIdIndexRoute,
  patchAuthenticatorsAdminStaticIdIndexRoute,
  patchAuthenticatorsAdminTotpIdIndexRoute,
  patchAuthenticatorsAdminWebauthnIdIndexRoute,
  patchAuthenticatorsDuoIdIndexRoute,
  patchAuthenticatorsEmailIdIndexRoute,
  patchAuthenticatorsSmsIdIndexRoute,
  patchAuthenticatorsStaticIdIndexRoute,
  patchAuthenticatorsTotpIdIndexRoute,
  patchAuthenticatorsWebauthnIdIndexRoute,
  postAuthenticatorsAdminDuoIndexRoute,
  postAuthenticatorsAdminEmailIndexRoute,
  postAuthenticatorsAdminEndpointIndexRoute,
  postAuthenticatorsAdminSmsIndexRoute,
  postAuthenticatorsAdminStaticIndexRoute,
  postAuthenticatorsAdminTotpIndexRoute,
  postAuthenticatorsAdminWebauthnIndexRoute,
  postAuthenticatorsPasswordIdLockIndexRoute,
  postAuthenticatorsPasswordIdUnlockIndexRoute,
  putAuthenticatorsAdminDuoIdIndexRoute,
  putAuthenticatorsAdminEmailIdIndexRoute,
  putAuthenticatorsAdminEndpointUuidIndexRoute,
  putAuthenticatorsAdminSmsIdIndexRoute,
  putAuthenticatorsAdminStaticIdIndexRoute,
  putAuthenticatorsAdminTotpIdIndexRoute,
  putAuthenticatorsAdminWebauthnIdIndexRoute,
  putAuthenticatorsDuoIdIndexRoute,
  putAuthenticatorsEmailIdIndexRoute,
  putAuthenticatorsSmsIdIndexRoute,
  putAuthenticatorsStaticIdIndexRoute,
  putAuthenticatorsTotpIdIndexRoute,
  putAuthenticatorsWebauthnIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticatorsHandler = app
  .openapi(getAuthenticatorsAdminAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminDuoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticatorsAdminDuoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminDuoIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsAdminDuoIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsAdminDuoIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsAdminDuoIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminEmailIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticatorsAdminEmailIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminEmailIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsAdminEmailIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsAdminEmailIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsAdminEmailIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminEndpointIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticatorsAdminEndpointIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminEndpointUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsAdminEndpointUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsAdminEndpointUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsAdminEndpointUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminSmsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticatorsAdminSmsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsAdminSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsAdminSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsAdminSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminStaticIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticatorsAdminStaticIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminStaticIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsAdminStaticIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsAdminStaticIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsAdminStaticIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminTotpIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticatorsAdminTotpIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminTotpIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsAdminTotpIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsAdminTotpIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsAdminTotpIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminWebauthnIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticatorsAdminWebauthnIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAdminWebauthnIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsAdminWebauthnIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsAdminWebauthnIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsAdminWebauthnIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsDuoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsDuoIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsDuoIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsDuoIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsDuoIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsDuoIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsEmailIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsEmailIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsEmailIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsEmailIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsEmailIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsEmailIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsEndpointIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsEndpointUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsEndpointUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticatorsPasswordIdLockIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthenticatorsPasswordIdUnlockIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsSmsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsSmsIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsStaticIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsStaticIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsStaticIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsStaticIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsStaticIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsStaticIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsTotpIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsTotpIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsTotpIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsTotpIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsTotpIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsTotpIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsWebauthnIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsWebauthnIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuthenticatorsWebauthnIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuthenticatorsWebauthnIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuthenticatorsWebauthnIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthenticatorsWebauthnIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
