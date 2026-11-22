import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1betaAccountsRoute,
  postV1betaAccountSearchChangeHistoryEventsRoute,
  postV1betaAccountsProvisionAccountTicketRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getV1betaAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaAccountsProvisionAccountTicketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1betaAccountSearchChangeHistoryEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
