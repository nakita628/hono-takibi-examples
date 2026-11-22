import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postWebhooksJournalSnapshots202609CrmRoute,
  postWebhooksJournalSubscriptions202609FiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postWebhooksJournalSnapshots202609CrmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksJournalSubscriptions202609FiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
