import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBoardsIdBoardPluginsIdPluginRoute,
  deleteBoardsIdExportsIdExportRoute,
  deleteBoardsIdMembersIdMemberRoute,
  deleteBoardsIdRoute,
  getBoardsBoardIdActionsRoute,
  getBoardsBoardIdBoardStarsRoute,
  getBoardsIdBoardPluginsRoute,
  getBoardsIdCardsFilterRoute,
  getBoardsIdCardsRoute,
  getBoardsIdChecklistsRoute,
  getBoardsIdCustomFieldsRoute,
  getBoardsIdExportsIdExportDownloadRoute,
  getBoardsIdExportsIdExportRoute,
  getBoardsIdExportsMostRecentRoute,
  getBoardsIdFieldRoute,
  getBoardsIdLabelsRoute,
  getBoardsIdListsFilterRoute,
  getBoardsIdListsRoute,
  getBoardsIdMembershipsRoute,
  getBoardsIdMembersRoute,
  getBoardsIdPluginsRoute,
  getBoardsIdRoute,
  postBoardsIdBoardPluginsRoute,
  postBoardsIdCalendarKeyGenerateRoute,
  postBoardsIdEmailKeyGenerateRoute,
  postBoardsIdExportsRoute,
  postBoardsIdIdTagsRoute,
  postBoardsIdLabelsRoute,
  postBoardsIdListsRoute,
  postBoardsIdMarkAsViewedRoute,
  postBoardsIndexRoute,
  putBoardsIdMembershipsIdMembershipRoute,
  putBoardsIdMembersIdMemberRoute,
  putBoardsIdMembersRoute,
  putBoardsIdMyPrefsEmailPositionRoute,
  putBoardsIdMyPrefsIdEmailListRoute,
  putBoardsIdMyPrefsShowSidebarActivityRoute,
  putBoardsIdMyPrefsShowSidebarBoardActionsRoute,
  putBoardsIdMyPrefsShowSidebarMembersRoute,
  putBoardsIdMyPrefsShowSidebarRoute,
  putBoardsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boardsHandler = app
  .openapi(getBoardsIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBoardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsBoardIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsBoardIdBoardStarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdChecklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdCardsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdListsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBoardsIdMembersIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdMembershipsIdMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdMyPrefsEmailPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdMyPrefsIdEmailListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdMyPrefsShowSidebarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdMyPrefsShowSidebarActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdMyPrefsShowSidebarBoardActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBoardsIdMyPrefsShowSidebarMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdCalendarKeyGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdEmailKeyGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdMarkAsViewedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdBoardPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdBoardPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBoardsIdBoardPluginsIdPluginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBoardsIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdExportsIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBoardsIdExportsIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdExportsIdExportDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoardsIdExportsMostRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
