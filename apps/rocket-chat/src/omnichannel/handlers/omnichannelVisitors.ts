import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LivechatVisitorTokenRoute,
  getApiV1LivechatVisitorsAutocompleteRoute,
  getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdRoute,
  getApiV1LivechatVisitorsInfoRoute,
  getApiV1LivechatVisitorsPagesVisitedRoomIdRoute,
  getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdRoute,
  getApiV1LivechatVisitorsSearchRoute,
  getApiV1LivechatVisitorTokenRoomRoute,
  getApiV1LivechatVisitorTokenRoute,
  postApiV1LivechatVisitorRoute,
  postApiV1LivechatVisitorStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelVisitorsHandler = app
  .openapi(postApiV1LivechatVisitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatVisitorTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorTokenRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsPagesVisitedRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatVisitorsAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatVisitorStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
