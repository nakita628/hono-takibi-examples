import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AbuseTicketsRoute,
  getV1AbuseTicketsTicketIdRoute,
  postV1AbuseTicketsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AbuseTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AbuseTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AbuseTicketsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
