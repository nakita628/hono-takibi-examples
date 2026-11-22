import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdAcceptedSendersDirectoryObjectIdRefRoute,
  deleteGroupsGroupIdMembersDirectoryObjectIdRefRoute,
  deleteGroupsGroupIdOwnersDirectoryObjectIdRefRoute,
  deleteGroupsGroupIdRejectedSendersDirectoryObjectIdRefRoute,
  getGroupsGroupIdAcceptedSendersRefRoute,
  getGroupsGroupIdAcceptedSendersRoute,
  getGroupsGroupIdCreatedOnBehalfOfRoute,
  getGroupsGroupIdMemberOfDirectoryObjectIdRoute,
  getGroupsGroupIdMemberOfRoute,
  getGroupsGroupIdMembersRefRoute,
  getGroupsGroupIdMembersRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdRoute,
  getGroupsGroupIdMembersWithLicenseErrorsRoute,
  getGroupsGroupIdOwnersRefRoute,
  getGroupsGroupIdOwnersRoute,
  getGroupsGroupIdRejectedSendersRefRoute,
  getGroupsGroupIdRejectedSendersRoute,
  getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdRoute,
  getGroupsGroupIdTransitiveMemberOfRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdRoute,
  getGroupsGroupIdTransitiveMembersRoute,
  postGroupsGroupIdAcceptedSendersRefRoute,
  postGroupsGroupIdMembersRefRoute,
  postGroupsGroupIdOwnersRefRoute,
  postGroupsGroupIdRejectedSendersRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsDirectoryObjectHandler = app
  .openapi(getGroupsGroupIdAcceptedSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdAcceptedSendersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdAcceptedSendersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdAcceptedSendersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdCreatedOnBehalfOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdMembersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOwnersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRejectedSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRejectedSendersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdRejectedSendersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdRejectedSendersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
