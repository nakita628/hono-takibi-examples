import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CustomStatusesCustomStatusIdRoute,
  getApiV2CustomStatusesCustomStatusIdRoute,
  getApiV2CustomStatusesRoute,
  getApiV2CustomStatusesShowManyRoute,
  postApiV2CustomStatusesCustomStatusIdTicketFormStatusesRoute,
  postApiV2CustomStatusesRoute,
  putApiV2CustomStatusDefaultRoute,
  putApiV2CustomStatusesCustomStatusIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customTicketStatusesHandler = app
  .openapi(putApiV2CustomStatusDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomStatusesCustomStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CustomStatusesCustomStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomStatusesCustomStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomStatusesCustomStatusIdTicketFormStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomStatusesShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
