import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChecklistsIdChecklistCheckItemsIdCheckItemRoute,
  deleteChecklistsIdChecklistRoute,
  getChecklistsIdChecklistBoardFieldRoute,
  getChecklistsIdChecklistBoardRoute,
  getChecklistsIdChecklistCardsFilterRoute,
  getChecklistsIdChecklistCardsRoute,
  getChecklistsIdChecklistCheckItemsIdCheckItemRoute,
  getChecklistsIdChecklistCheckItemsRoute,
  getChecklistsIdChecklistFieldRoute,
  getChecklistsIdChecklistRoute,
  postChecklistsIdChecklistCheckItemsRoute,
  postChecklistsRoute,
  putChecklistsIdChecklistIdCardRoute,
  putChecklistsIdChecklistNameRoute,
  putChecklistsIdChecklistPosRoute,
  putChecklistsIdChecklistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checklistHandler = app
  .openapi(postChecklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChecklistsIdChecklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdChecklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChecklistsIdChecklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdChecklistBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdChecklistBoardFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdChecklistCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdChecklistCardsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdChecklistCheckItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChecklistsIdChecklistCheckItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChecklistsIdChecklistCheckItemsIdCheckItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdChecklistCheckItemsIdCheckItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChecklistsIdChecklistIdCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChecklistsIdChecklistNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChecklistsIdChecklistPosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdChecklistFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
