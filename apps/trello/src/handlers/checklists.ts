import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChecklistsIdCheckItemsIdCheckItemRoute,
  deleteChecklistsIdRoute,
  getChecklistsIdBoardRoute,
  getChecklistsIdCardsRoute,
  getChecklistsIdCheckItemsIdCheckItemRoute,
  getChecklistsIdCheckItemsRoute,
  getChecklistsIdFieldRoute,
  getChecklistsIdRoute,
  postChecklistsIdCheckItemsRoute,
  postChecklistsRoute,
  putChecklistsIdFieldRoute,
  putChecklistsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checklistsHandler = app
  .openapi(postChecklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChecklistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChecklistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChecklistsIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdCheckItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChecklistsIdCheckItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecklistsIdCheckItemsIdCheckItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChecklistsIdCheckItemsIdCheckItemRoute, (c) => {
    throw new Error('Not implemented')
  })
