import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupV2GetAvailableAvatarsIndexRoute,
  getGroupV2GetAvailableThemesIndexRoute,
  getGroupV2GetUserClanInviteSettingMTypeIndexRoute,
  getGroupV2GroupIdAdminsAndFounderIndexRoute,
  getGroupV2GroupIdBannedIndexRoute,
  getGroupV2GroupIdEditHistoryIndexRoute,
  getGroupV2GroupIdIndexRoute,
  getGroupV2GroupIdMembersIndexRoute,
  getGroupV2GroupIdMembersInvitedIndividualsIndexRoute,
  getGroupV2GroupIdMembersPendingIndexRoute,
  getGroupV2GroupIdOptionalConversationsIndexRoute,
  getGroupV2NameGroupNameGroupTypeIndexRoute,
  getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexRoute,
  getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexRoute,
  getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexRoute,
  postGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexRoute,
  postGroupV2GroupIdEditClanBannerIndexRoute,
  postGroupV2GroupIdEditFounderOptionsIndexRoute,
  postGroupV2GroupIdEditIndexRoute,
  postGroupV2GroupIdMembersApproveAllIndexRoute,
  postGroupV2GroupIdMembersApproveListIndexRoute,
  postGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexRoute,
  postGroupV2GroupIdMembersDenyAllIndexRoute,
  postGroupV2GroupIdMembersDenyListIndexRoute,
  postGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexRoute,
  postGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexRoute,
  postGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexRoute,
  postGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexRoute,
  postGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexRoute,
  postGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexRoute,
  postGroupV2GroupIdOptionalConversationsAddIndexRoute,
  postGroupV2GroupIdOptionalConversationsEditConversationIdIndexRoute,
  postGroupV2NameV2IndexRoute,
  postGroupV2RecommendedGroupTypeCreateDateRangeIndexRoute,
  postGroupV2SearchIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupV2Handler = app
  .openapi(getGroupV2GetAvailableAvatarsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2GetAvailableThemesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2GetUserClanInviteSettingMTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2RecommendedGroupTypeCreateDateRangeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2SearchIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2GroupIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2NameGroupNameGroupTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2NameV2IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2GroupIdOptionalConversationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdEditIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdEditClanBannerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdEditFounderOptionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdOptionalConversationsAddIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdOptionalConversationsEditConversationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2GroupIdMembersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2GroupIdAdminsAndFounderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupV2GroupIdMembersMembershipTypeMembershipIdSetMembershipTypeMemberTypeIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupV2GroupIdMembersMembershipTypeMembershipIdKickIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdMembersMembershipTypeMembershipIdBanIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdMembersMembershipTypeMembershipIdUnbanIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2GroupIdBannedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2GroupIdEditHistoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdAdminAbdicateFoundershipMembershipTypeFounderIdNewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2GroupIdMembersPendingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2GroupIdMembersInvitedIndividualsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdMembersApproveAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdMembersDenyAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdMembersApproveListIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdMembersApproveMembershipTypeMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdMembersDenyListIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2UserMembershipTypeMembershipIdFilterGroupTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2RecoverMembershipTypeMembershipIdGroupTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupV2UserPotentialMembershipTypeMembershipIdFilterGroupTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupV2GroupIdMembersIndividualInviteMembershipTypeMembershipIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupV2GroupIdMembersIndividualInviteCancelMembershipTypeMembershipIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
