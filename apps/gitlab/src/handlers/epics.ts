import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdEpicsEpicIidRelatedEpicsRelatedEpicLinkIdRoute,
  deleteApiV4GroupsIdU28DashEpicsEpicIidEpicsChildEpicIdRoute,
  deleteApiV4GroupsIdU28DashEpicsEpicIidIssuesEpicIssueIdRoute,
  deleteApiV4GroupsIdU28DashEpicsEpicIidRoute,
  getApiV4GroupsIdDashEpicsEpicIidIssuesRoute,
  getApiV4GroupsIdDashEpicsEpicIidRoute,
  getApiV4GroupsIdDashEpicsRoute,
  getApiV4GroupsIdEpicBoardsBoardIdListsListIdRoute,
  getApiV4GroupsIdEpicBoardsBoardIdListsRoute,
  getApiV4GroupsIdEpicBoardsBoardIdRoute,
  getApiV4GroupsIdEpicBoardsRoute,
  getApiV4GroupsIdEpicsEpicIidIssuesRoute,
  getApiV4GroupsIdEpicsEpicIidRelatedEpicsRoute,
  getApiV4GroupsIdEpicsEpicIidRoute,
  getApiV4GroupsIdEpicsRoute,
  getApiV4GroupsIdRelatedEpicLinksRoute,
  getApiV4GroupsIdU28DashEpicsEpicIidEpicsRoute,
  postApiV4GroupsIdEpicsEpicIidRelatedEpicsRoute,
  postApiV4GroupsIdEpicsEpicIidTodoRoute,
  postApiV4GroupsIdU28DashEpicsEpicIidEpicsChildEpicIdRoute,
  postApiV4GroupsIdU28DashEpicsEpicIidEpicsRoute,
  postApiV4GroupsIdU28DashEpicsEpicIidIssuesEpicIssueIdRoute,
  postApiV4GroupsIdU28DashEpicsRoute,
  putApiV4GroupsIdU28DashEpicsEpicIidEpicsChildEpicIdRoute,
  putApiV4GroupsIdU28DashEpicsEpicIidIssuesEpicIssueIdRoute,
  putApiV4GroupsIdU28DashEpicsEpicIidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const epicsHandler = app
  .openapi(getApiV4GroupsIdRelatedEpicLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsEpicIidRelatedEpicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdEpicsEpicIidRelatedEpicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdEpicsEpicIidRelatedEpicsRelatedEpicLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicBoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicBoardsBoardIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicBoardsBoardIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashEpicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsEpicIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashEpicsEpicIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdU28DashEpicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdU28DashEpicsEpicIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdU28DashEpicsEpicIidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdU28DashEpicsEpicIidEpicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdU28DashEpicsEpicIidEpicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdU28DashEpicsEpicIidEpicsChildEpicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdU28DashEpicsEpicIidEpicsChildEpicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdU28DashEpicsEpicIidEpicsChildEpicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdU28DashEpicsEpicIidIssuesEpicIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdU28DashEpicsEpicIidIssuesEpicIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdU28DashEpicsEpicIidIssuesEpicIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdEpicsEpicIidIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashEpicsEpicIidIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdEpicsEpicIidTodoRoute, (c) => {
    throw new Error('Not implemented')
  })
