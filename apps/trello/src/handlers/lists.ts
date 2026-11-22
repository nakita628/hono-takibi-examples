import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListsIdActionsRoute,
  getListsIdBoardRoute,
  getListsIdCardsRoute,
  getListsIdRoute,
  postListsIdArchiveAllCardsRoute,
  postListsIdMoveAllCardsRoute,
  postListsRoute,
  putListsIdClosedRoute,
  putListsIdFieldRoute,
  putListsIdIdBoardRoute,
  putListsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(getListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsIdArchiveAllCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListsIdMoveAllCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsIdClosedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsIdIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListsIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListsIdCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
