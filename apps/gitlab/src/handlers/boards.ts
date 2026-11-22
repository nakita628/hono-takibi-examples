import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdBoardsBoardIdListsListIdRoute,
  deleteApiV4GroupsIdBoardsBoardIdRoute,
  deleteApiV4ProjectsIdBoardsBoardIdListsListIdRoute,
  deleteApiV4ProjectsIdBoardsBoardIdRoute,
  getApiV4GroupsIdBoardsBoardIdListsListIdRoute,
  getApiV4GroupsIdBoardsBoardIdListsRoute,
  getApiV4GroupsIdBoardsBoardIdRoute,
  getApiV4GroupsIdBoardsRoute,
  getApiV4ProjectsIdBoardsBoardIdListsListIdRoute,
  getApiV4ProjectsIdBoardsBoardIdListsRoute,
  getApiV4ProjectsIdBoardsBoardIdRoute,
  getApiV4ProjectsIdBoardsRoute,
  postApiV4GroupsIdBoardsBoardIdListsRoute,
  postApiV4GroupsIdBoardsRoute,
  postApiV4ProjectsIdBoardsBoardIdListsRoute,
  postApiV4ProjectsIdBoardsRoute,
  putApiV4GroupsIdBoardsBoardIdListsListIdRoute,
  putApiV4GroupsIdBoardsBoardIdRoute,
  putApiV4ProjectsIdBoardsBoardIdListsListIdRoute,
  putApiV4ProjectsIdBoardsBoardIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boardsHandler = app
  .openapi(postApiV4GroupsIdBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdBoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdBoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdBoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdBoardsBoardIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdBoardsBoardIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdBoardsBoardIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdBoardsBoardIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdBoardsBoardIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdBoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdBoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdBoardsBoardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdBoardsBoardIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdBoardsBoardIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdBoardsBoardIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdBoardsBoardIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdBoardsBoardIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
