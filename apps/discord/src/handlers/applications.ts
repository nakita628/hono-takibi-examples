import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdCommandsCommandIdRoute,
  deleteApplicationsApplicationIdEmojisEmojiIdRoute,
  deleteApplicationsApplicationIdEntitlementsEntitlementIdRoute,
  deleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
  getApplicationsApplicationIdActivityInstancesInstanceIdRoute,
  getApplicationsApplicationIdCommandsCommandIdRoute,
  getApplicationsApplicationIdCommandsRoute,
  getApplicationsApplicationIdEmojisEmojiIdRoute,
  getApplicationsApplicationIdEmojisRoute,
  getApplicationsApplicationIdEntitlementsEntitlementIdRoute,
  getApplicationsApplicationIdEntitlementsRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsRoute,
  getApplicationsApplicationIdGuildsGuildIdCommandsRoute,
  getApplicationsApplicationIdRoleConnectionsMetadataRoute,
  getApplicationsApplicationIdRoute,
  getApplicationsMeRoute,
  patchApplicationsApplicationIdCommandsCommandIdRoute,
  patchApplicationsApplicationIdEmojisEmojiIdRoute,
  patchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute,
  patchApplicationsApplicationIdRoute,
  patchApplicationsMeRoute,
  postApplicationsApplicationIdAttachmentRoute,
  postApplicationsApplicationIdCommandsRoute,
  postApplicationsApplicationIdEmojisRoute,
  postApplicationsApplicationIdEntitlementsEntitlementIdConsumeRoute,
  postApplicationsApplicationIdEntitlementsRoute,
  postApplicationsApplicationIdGuildsGuildIdCommandsRoute,
  putApplicationsApplicationIdCommandsRoute,
  putApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRoute,
  putApplicationsApplicationIdGuildsGuildIdCommandsRoute,
  putApplicationsApplicationIdRoleConnectionsMetadataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(getApplicationsMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdActivityInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationsApplicationIdCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdCommandsCommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdCommandsCommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdCommandsCommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdEmojisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdEmojisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdEmojisEmojiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdEmojisEmojiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdEmojisEmojiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdEntitlementsEntitlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdEntitlementsEntitlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdEntitlementsEntitlementIdConsumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdGuildsGuildIdCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationsApplicationIdGuildsGuildIdCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdGuildsGuildIdCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdGuildsGuildIdCommandsPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdGuildsGuildIdCommandsCommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationsApplicationIdGuildsGuildIdCommandsCommandIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdRoleConnectionsMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApplicationsApplicationIdRoleConnectionsMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
