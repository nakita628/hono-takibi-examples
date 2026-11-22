import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRoute,
  deleteApiV2TicketFieldsTicketFieldIdRoute,
  getApiV2TicketFieldsCountRoute,
  getApiV2TicketFieldsRoute,
  getApiV2TicketFieldsShowManyRoute,
  getApiV2TicketFieldsTicketFieldIdOptionsRoute,
  getApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRoute,
  getApiV2TicketFieldsTicketFieldIdRoute,
  postApiV2TicketFieldsRoute,
  postApiV2TicketFieldsTicketFieldIdOptionsRoute,
  putApiV2TicketFieldsReorderRoute,
  putApiV2TicketFieldsTicketFieldIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketFieldsHandler = app
  .openapi(getApiV2TicketFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFieldsTicketFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFieldsTicketFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketFieldsTicketFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFieldsTicketFieldIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketFieldsTicketFieldIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketFieldsTicketFieldIdOptionsTicketFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFieldsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFieldsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFieldsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
