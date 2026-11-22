import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTicketTypesTicketTypeIdAttributesRoute,
  putTicketTypesTicketTypeIdAttributesAttributeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ticketTypeAttributesHandler = app
  .openapi(postTicketTypesTicketTypeIdAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTicketTypesTicketTypeIdAttributesAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
