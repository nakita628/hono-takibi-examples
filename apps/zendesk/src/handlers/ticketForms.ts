import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TicketFormsTicketFormIdRoute,
  getApiV2TicketFormsRoute,
  getApiV2TicketFormsShowManyRoute,
  getApiV2TicketFormsTicketFormIdRoute,
  getApiV2TicketFormsTicketFormIdTicketFormStatusesRoute,
  postApiV2TicketFormsRoute,
  postApiV2TicketFormsTicketFormIdCloneRoute,
  postApiV2TicketFormsTicketFormIdTicketFormStatusesRoute,
  putApiV2TicketFormsReorderRoute,
  putApiV2TicketFormsTicketFormIdRoute,
  putApiV2TicketFormsTicketFormIdTicketFormStatusesRoute,
  putApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketFormsHandler = app
  .openapi(getApiV2TicketFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFormsTicketFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFormsTicketFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TicketFormsTicketFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketFormsTicketFormIdCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFormsTicketFormIdTicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TicketFormsTicketFormIdTicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFormsTicketFormIdTicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFormsTicketFormIdTicketFormStatusesTicketFormStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TicketFormsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TicketFormsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
