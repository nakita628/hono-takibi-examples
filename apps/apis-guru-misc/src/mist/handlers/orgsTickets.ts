import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdTicketsCountRoute,
  getApiV1OrgsOrgIdTicketsRoute,
  getApiV1OrgsOrgIdTicketsTicketIdRoute,
  postApiV1OrgsOrgIdTicketsRoute,
  postApiV1OrgsOrgIdTicketsTicketIdCommentsRoute,
  putApiV1OrgsOrgIdTicketsTicketIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsTicketsHandler = app
  .openapi(getApiV1OrgsOrgIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdTicketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdTicketsTicketIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
