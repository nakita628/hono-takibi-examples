import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609TicketsGdprDeleteRoute,
  postCrmObjects202609TicketsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609TicketsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609TicketsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
