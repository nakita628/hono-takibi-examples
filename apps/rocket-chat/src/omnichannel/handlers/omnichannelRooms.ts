import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LivechatRoomRidPriorityRoute,
  getApiV1LivechatRoomJoinRoute,
  getApiV1LivechatRoomRoute,
  getApiV1LivechatRoomsFiltersRoute,
  getApiV1LivechatRoomsRoute,
  getApiV1LivechatTransferHistoryRidRoute,
  postApiV1LivechatRoomCloseByUserRoute,
  postApiV1LivechatRoomCloseRoute,
  postApiV1LivechatRoomForwardRoute,
  postApiV1LivechatRoomOnHoldRoute,
  postApiV1LivechatRoomResumeOnHoldRoute,
  postApiV1LivechatRoomRidPriorityRoute,
  postApiV1LivechatRoomSaveInfoRoute,
  postApiV1LivechatRoomsDeleteRoute,
  postApiV1LivechatRoomsRemoveAllClosedRoomsRoute,
  postApiV1LivechatRoomSurveyRoute,
  postApiV1LivechatUploadRidRoute,
  postApiV1LivechatVisitorDepartmentTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelRoomsHandler = app
  .openapi(getApiV1LivechatRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomCloseByUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatRoomJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomSaveInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatTransferHistoryRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomSurveyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomOnHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatUploadRidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomRidPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatRoomRidPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomsRemoveAllClosedRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatRoomResumeOnHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatRoomsFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatVisitorDepartmentTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
