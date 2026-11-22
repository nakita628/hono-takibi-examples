import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdAccountsAdAccountIdAdvertiserDefinedEventsRoute,
  getAdAccountsAdAccountIdAdvertiserDefinedEventsRoute,
  patchAdAccountsAdAccountIdAdvertiserDefinedEventsRoute,
  postAdAccountsAdAccountIdAdvertiserDefinedEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversionsHandler = app
  .openapi(getAdAccountsAdAccountIdAdvertiserDefinedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAdvertiserDefinedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdAdvertiserDefinedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdAdvertiserDefinedEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
