import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWalletobjectsV1EventTicketObjectResourceIdRoute,
  getWalletobjectsV1EventTicketObjectRoute,
  patchWalletobjectsV1EventTicketObjectResourceIdRoute,
  postWalletobjectsV1EventTicketObjectResourceIdAddMessageRoute,
  postWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjectsRoute,
  postWalletobjectsV1EventTicketObjectRoute,
  putWalletobjectsV1EventTicketObjectResourceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventticketobjectHandler = app
  .openapi(getWalletobjectsV1EventTicketObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1EventTicketObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWalletobjectsV1EventTicketObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWalletobjectsV1EventTicketObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWalletobjectsV1EventTicketObjectResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1EventTicketObjectResourceIdAddMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
