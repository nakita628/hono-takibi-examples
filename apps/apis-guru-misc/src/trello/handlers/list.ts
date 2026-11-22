import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListsIdListActionsRoute,
  getListsIdListBoardFieldRoute,
  getListsIdListBoardRoute,
  getListsIdListCardsFilterRoute,
  getListsIdListCardsRoute,
  getListsIdListFieldRoute,
  getListsIdListRoute,
  postListsIdListArchiveAllCardsRoute,
  postListsIdListCardsRoute,
  postListsIdListMoveAllCardsRoute,
  postListsRoute,
  putListsIdListClosedRoute,
  putListsIdListIdBoardRoute,
  putListsIdListNameRoute,
  putListsIdListPosRoute,
  putListsIdListRoute,
  putListsIdListSubscribedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listHandler = app
  .openapi(postListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdListActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsIdListArchiveAllCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdListBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdListBoardFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdListCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsIdListCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdListCardsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsIdListClosedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsIdListIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsIdListMoveAllCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsIdListNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsIdListPosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsIdListSubscribedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdListFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
