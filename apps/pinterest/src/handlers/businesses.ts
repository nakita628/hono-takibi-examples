import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBusinessesBusinessIdAssetGroupsRoute,
  deleteBusinessesBusinessIdInvitesRoute,
  deleteBusinessesBusinessIdMembersAssetsAccessRoute,
  deleteBusinessesBusinessIdMembersRoute,
  deleteBusinessesBusinessIdPartnersAssetsRoute,
  deleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdRoute,
  deleteBusinessesBusinessIdPartnersRoute,
  getBusinessesBusinessIdAdAccountRequestsRoute,
  getBusinessesBusinessIdAnalyticsAggregatedTimelineRoute,
  getBusinessesBusinessIdAnalyticsRoute,
  getBusinessesBusinessIdAssetsAssetIdMembersRoute,
  getBusinessesBusinessIdAssetsAssetIdPartnersRoute,
  getBusinessesBusinessIdAssetsRoute,
  getBusinessesBusinessIdAudiencesRoute,
  getBusinessesBusinessIdAudiencesSharedAccountsRoute,
  getBusinessesBusinessIdInvitesRoute,
  getBusinessesBusinessIdMembersMemberIdAssetsRoute,
  getBusinessesBusinessIdMembersRoute,
  getBusinessesBusinessIdPartnersPartnerIdAssetsRoute,
  getBusinessesBusinessIdPartnersRoute,
  getBusinessesBusinessIdRmnContractsContractIdRoute,
  getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsRoute,
  getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryRoute,
  getBusinessesEmployersRoute,
  patchBusinessesBusinessIdAssetGroupsRoute,
  patchBusinessesBusinessIdAudiencesAdAccountsSharedRoute,
  patchBusinessesBusinessIdAudiencesBusinessesSharedRoute,
  patchBusinessesBusinessIdMembersAssetsAccessRoute,
  patchBusinessesBusinessIdMembersRoute,
  patchBusinessesBusinessIdPartnersAssetsRoute,
  patchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdRoute,
  patchBusinessesBusinessIdRmnContractsContractIdProcessRoute,
  patchBusinessesBusinessIdSystemUsersSystemUserIdRoute,
  patchBusinessesInvitesRoute,
  postBusinessesBusinessIdAdAccountRequestsAcceptRoute,
  postBusinessesBusinessIdAdAccountRequestsRejectRoute,
  postBusinessesBusinessIdAssetGroupsRoute,
  postBusinessesBusinessIdInvitesAssetsAccessRoute,
  postBusinessesBusinessIdInvitesRoute,
  postBusinessesBusinessIdPartnersPartnerIdAdAccountRequestRoute,
  postBusinessesBusinessIdRequestsAssetsAccessRoute,
  postBusinessesBusinessIdRmnPartnersPartnerIdInviteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessesHandler = app
  .openapi(getBusinessesEmployersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAdAccountRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdAdAccountRequestsAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdAdAccountRequestsRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAnalyticsAggregatedTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdAssetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdAssetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdAssetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAssetsAssetIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAssetsAssetIdPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAudiencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdAudiencesAdAccountsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdAudiencesBusinessesSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAudiencesSharedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdInvitesAssetsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdMembersAssetsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdMembersAssetsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdMembersMemberIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdPartnersAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdPartnersAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdPartnersPartnerIdAdAccountRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getBusinessesBusinessIdPartnersPartnerIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdRequestsAssetsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdRmnContractsContractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdRmnContractsContractIdProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdRmnPartnersPartnerIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdSystemUsersSystemUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
