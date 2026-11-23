import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBoardsIdBoardMembersIdMemberRoute,
  deleteBoardsIdBoardPowerUpsPowerUpRoute,
  getBoardsIdBoardActionsRoute,
  getBoardsIdBoardBoardStarsRoute,
  getBoardsIdBoardCardsFilterRoute,
  getBoardsIdBoardCardsIdCardRoute,
  getBoardsIdBoardCardsRoute,
  getBoardsIdBoardChecklistsRoute,
  getBoardsIdBoardDeltasRoute,
  getBoardsIdBoardFieldRoute,
  getBoardsIdBoardLabelsIdLabelRoute,
  getBoardsIdBoardLabelsRoute,
  getBoardsIdBoardListsFilterRoute,
  getBoardsIdBoardListsRoute,
  getBoardsIdBoardMembersFilterRoute,
  getBoardsIdBoardMembershipsIdMembershipRoute,
  getBoardsIdBoardMembershipsRoute,
  getBoardsIdBoardMembersIdMemberCardsRoute,
  getBoardsIdBoardMembersInvitedFieldRoute,
  getBoardsIdBoardMembersInvitedRoute,
  getBoardsIdBoardMembersRoute,
  getBoardsIdBoardMyPrefsRoute,
  getBoardsIdBoardOrganizationFieldRoute,
  getBoardsIdBoardOrganizationRoute,
  getBoardsIdBoardRoute,
  postBoardsIdBoardCalendarKeyGenerateRoute,
  postBoardsIdBoardChecklistsRoute,
  postBoardsIdBoardEmailKeyGenerateRoute,
  postBoardsIdBoardLabelsRoute,
  postBoardsIdBoardListsRoute,
  postBoardsIdBoardMarkAsViewedRoute,
  postBoardsIdBoardPowerUpsRoute,
  postBoardsRoute,
  putBoardsIdBoardClosedRoute,
  putBoardsIdBoardDescRoute,
  putBoardsIdBoardIdOrganizationRoute,
  putBoardsIdBoardLabelNamesBlueRoute,
  putBoardsIdBoardLabelNamesGreenRoute,
  putBoardsIdBoardLabelNamesOrangeRoute,
  putBoardsIdBoardLabelNamesPurpleRoute,
  putBoardsIdBoardLabelNamesRedRoute,
  putBoardsIdBoardLabelNamesYellowRoute,
  putBoardsIdBoardMembershipsIdMembershipRoute,
  putBoardsIdBoardMembersIdMemberRoute,
  putBoardsIdBoardMembersRoute,
  putBoardsIdBoardMyPrefsEmailPositionRoute,
  putBoardsIdBoardMyPrefsIdEmailListRoute,
  putBoardsIdBoardMyPrefsShowListGuideRoute,
  putBoardsIdBoardMyPrefsShowSidebarActivityRoute,
  putBoardsIdBoardMyPrefsShowSidebarBoardActionsRoute,
  putBoardsIdBoardMyPrefsShowSidebarMembersRoute,
  putBoardsIdBoardMyPrefsShowSidebarRoute,
  putBoardsIdBoardNameRoute,
  putBoardsIdBoardPrefsBackgroundRoute,
  putBoardsIdBoardPrefsCalendarFeedEnabledRoute,
  putBoardsIdBoardPrefsCardAgingRoute,
  putBoardsIdBoardPrefsCardCoversRoute,
  putBoardsIdBoardPrefsCommentsRoute,
  putBoardsIdBoardPrefsInvitationsRoute,
  putBoardsIdBoardPrefsPermissionLevelRoute,
  putBoardsIdBoardPrefsSelfJoinRoute,
  putBoardsIdBoardPrefsVotingRoute,
  putBoardsIdBoardRoute,
  putBoardsIdBoardSubscribedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boardsHandler = app
  .openapi(postBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardBoardStarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdBoardCalendarKeyGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardCardsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardCardsIdCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardChecklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdBoardChecklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardClosedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardDeltasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardDescRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdBoardEmailKeyGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardLabelNamesBlueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardLabelNamesGreenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardLabelNamesOrangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardLabelNamesPurpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardLabelNamesRedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardLabelNamesYellowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdBoardLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardLabelsIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdBoardListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardListsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdBoardMarkAsViewedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardMembersFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBoardsIdBoardMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardMembersIdMemberCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardMembersInvitedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardMembersInvitedFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardMembershipsIdMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardMembershipsIdMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardMyPrefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardMyPrefsEmailPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardMyPrefsIdEmailListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardMyPrefsShowListGuideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardMyPrefsShowSidebarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardMyPrefsShowSidebarActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardMyPrefsShowSidebarBoardActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardMyPrefsShowSidebarMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardOrganizationFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdBoardPowerUpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBoardsIdBoardPowerUpsPowerUpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardPrefsBackgroundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardPrefsCalendarFeedEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardPrefsCardAgingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardPrefsCardCoversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardPrefsCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardPrefsInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardPrefsPermissionLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardPrefsSelfJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardPrefsVotingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdBoardSubscribedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
