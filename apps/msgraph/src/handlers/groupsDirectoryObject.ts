import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdAcceptedSendersDirectoryObjectIdRefRoute,
  deleteGroupsGroupIdAcceptedSendersRefRoute,
  deleteGroupsGroupIdMembersDirectoryObjectIdRefRoute,
  deleteGroupsGroupIdMembersRefRoute,
  deleteGroupsGroupIdOwnersDirectoryObjectIdRefRoute,
  deleteGroupsGroupIdOwnersRefRoute,
  deleteGroupsGroupIdRejectedSendersDirectoryObjectIdRefRoute,
  deleteGroupsGroupIdRejectedSendersRefRoute,
  getGroupsGroupIdAcceptedSendersCountRoute,
  getGroupsGroupIdAcceptedSendersRefRoute,
  getGroupsGroupIdAcceptedSendersRoute,
  getGroupsGroupIdCreatedOnBehalfOfRoute,
  getGroupsGroupIdMemberOfCountRoute,
  getGroupsGroupIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getGroupsGroupIdMemberOfDirectoryObjectIdGraphGroupRoute,
  getGroupsGroupIdMemberOfDirectoryObjectIdRoute,
  getGroupsGroupIdMemberOfGraphAdministrativeUnitCountRoute,
  getGroupsGroupIdMemberOfGraphAdministrativeUnitRoute,
  getGroupsGroupIdMemberOfGraphGroupCountRoute,
  getGroupsGroupIdMemberOfGraphGroupRoute,
  getGroupsGroupIdMemberOfRoute,
  getGroupsGroupIdMembersCountRoute,
  getGroupsGroupIdMembersDirectoryObjectIdGraphApplicationRoute,
  getGroupsGroupIdMembersDirectoryObjectIdGraphDeviceRoute,
  getGroupsGroupIdMembersDirectoryObjectIdGraphGroupRoute,
  getGroupsGroupIdMembersDirectoryObjectIdGraphOrgContactRoute,
  getGroupsGroupIdMembersDirectoryObjectIdGraphServicePrincipalRoute,
  getGroupsGroupIdMembersDirectoryObjectIdGraphUserRoute,
  getGroupsGroupIdMembersGraphApplicationCountRoute,
  getGroupsGroupIdMembersGraphApplicationRoute,
  getGroupsGroupIdMembersGraphDeviceCountRoute,
  getGroupsGroupIdMembersGraphDeviceRoute,
  getGroupsGroupIdMembersGraphGroupCountRoute,
  getGroupsGroupIdMembersGraphGroupRoute,
  getGroupsGroupIdMembersGraphOrgContactCountRoute,
  getGroupsGroupIdMembersGraphOrgContactRoute,
  getGroupsGroupIdMembersGraphServicePrincipalCountRoute,
  getGroupsGroupIdMembersGraphServicePrincipalRoute,
  getGroupsGroupIdMembersGraphUserCountRoute,
  getGroupsGroupIdMembersGraphUserRoute,
  getGroupsGroupIdMembersRefRoute,
  getGroupsGroupIdMembersRoute,
  getGroupsGroupIdMembersWithLicenseErrorsCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphApplicationRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphDeviceRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphGroupRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphOrgContactRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphServicePrincipalRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphUserRoute,
  getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphApplicationCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphApplicationRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphDeviceCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphDeviceRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphGroupCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphGroupRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphOrgContactCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphOrgContactRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphServicePrincipalCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphServicePrincipalRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphUserCountRoute,
  getGroupsGroupIdMembersWithLicenseErrorsGraphUserRoute,
  getGroupsGroupIdMembersWithLicenseErrorsRoute,
  getGroupsGroupIdOwnersCountRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdGraphApplicationRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdGraphDeviceRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdGraphGroupRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdGraphOrgContactRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdGraphServicePrincipalRoute,
  getGroupsGroupIdOwnersDirectoryObjectIdGraphUserRoute,
  getGroupsGroupIdOwnersGraphApplicationCountRoute,
  getGroupsGroupIdOwnersGraphApplicationRoute,
  getGroupsGroupIdOwnersGraphDeviceCountRoute,
  getGroupsGroupIdOwnersGraphDeviceRoute,
  getGroupsGroupIdOwnersGraphGroupCountRoute,
  getGroupsGroupIdOwnersGraphGroupRoute,
  getGroupsGroupIdOwnersGraphOrgContactCountRoute,
  getGroupsGroupIdOwnersGraphOrgContactRoute,
  getGroupsGroupIdOwnersGraphServicePrincipalCountRoute,
  getGroupsGroupIdOwnersGraphServicePrincipalRoute,
  getGroupsGroupIdOwnersGraphUserCountRoute,
  getGroupsGroupIdOwnersGraphUserRoute,
  getGroupsGroupIdOwnersRefRoute,
  getGroupsGroupIdOwnersRoute,
  getGroupsGroupIdRejectedSendersCountRoute,
  getGroupsGroupIdRejectedSendersRefRoute,
  getGroupsGroupIdRejectedSendersRoute,
  getGroupsGroupIdTransitiveMemberOfCountRoute,
  getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute,
  getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute,
  getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdRoute,
  getGroupsGroupIdTransitiveMemberOfGraphAdministrativeUnitCountRoute,
  getGroupsGroupIdTransitiveMemberOfGraphAdministrativeUnitRoute,
  getGroupsGroupIdTransitiveMemberOfGraphGroupCountRoute,
  getGroupsGroupIdTransitiveMemberOfGraphGroupRoute,
  getGroupsGroupIdTransitiveMemberOfRoute,
  getGroupsGroupIdTransitiveMembersCountRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphApplicationRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphDeviceRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphGroupRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphOrgContactRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphServicePrincipalRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphUserRoute,
  getGroupsGroupIdTransitiveMembersDirectoryObjectIdRoute,
  getGroupsGroupIdTransitiveMembersGraphApplicationCountRoute,
  getGroupsGroupIdTransitiveMembersGraphApplicationRoute,
  getGroupsGroupIdTransitiveMembersGraphDeviceCountRoute,
  getGroupsGroupIdTransitiveMembersGraphDeviceRoute,
  getGroupsGroupIdTransitiveMembersGraphGroupCountRoute,
  getGroupsGroupIdTransitiveMembersGraphGroupRoute,
  getGroupsGroupIdTransitiveMembersGraphOrgContactCountRoute,
  getGroupsGroupIdTransitiveMembersGraphOrgContactRoute,
  getGroupsGroupIdTransitiveMembersGraphServicePrincipalCountRoute,
  getGroupsGroupIdTransitiveMembersGraphServicePrincipalRoute,
  getGroupsGroupIdTransitiveMembersGraphUserCountRoute,
  getGroupsGroupIdTransitiveMembersGraphUserRoute,
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
  .openapi(deleteGroupsGroupIdAcceptedSendersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdAcceptedSendersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdAcceptedSendersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdAcceptedSendersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdAcceptedSendersRefRoute, (c) => {
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
  .openapi(getGroupsGroupIdMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdMembersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdMembersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphServicePrincipalRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembersWithLicenseErrorsGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOwnersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdOwnersGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRejectedSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdRejectedSendersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRejectedSendersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRejectedSendersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdRejectedSendersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdRejectedSendersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfGraphAdministrativeUnitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfGraphAdministrativeUnitCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMemberOfGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersDirectoryObjectIdGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphApplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphApplicationCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphDeviceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphGroupCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphOrgContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphOrgContactCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphServicePrincipalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphServicePrincipalCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdTransitiveMembersGraphUserCountRoute, (c) => {
    throw new Error('Not implemented')
  })
