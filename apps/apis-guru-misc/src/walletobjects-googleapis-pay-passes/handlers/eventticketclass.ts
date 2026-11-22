import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1EventTicketClassResourceIdRoute,
  getWalletobjectsV1EventTicketClassRoute,
  patchWalletobjectsV1EventTicketClassResourceIdRoute,
  postWalletobjectsV1EventTicketClassResourceIdAddMessageRoute,
  postWalletobjectsV1EventTicketClassRoute,
  putWalletobjectsV1EventTicketClassResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventticketclassHandler = app
  .openapi(getWalletobjectsV1EventTicketClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1EventTicketClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1EventTicketClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1EventTicketClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1EventTicketClassResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1EventTicketClassResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
