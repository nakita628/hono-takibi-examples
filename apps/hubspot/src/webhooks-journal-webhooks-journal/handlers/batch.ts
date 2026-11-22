import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWebhooksJournalJournal202609BatchEarliestCountRoute,
  getWebhooksJournalJournal202609BatchLatestCountRoute,
  getWebhooksJournalJournal202609BatchOffsetNextCountRoute,
  getWebhooksJournalJournalLocal202609BatchEarliestCountRoute,
  getWebhooksJournalJournalLocal202609BatchLatestCountRoute,
  getWebhooksJournalJournalLocal202609BatchOffsetNextCountRoute,
  postWebhooksJournalJournal202609BatchReadRoute,
  postWebhooksJournalJournalLocal202609BatchReadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchHandler = app
  .openapi(getWebhooksJournalJournalLocal202609BatchEarliestCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournalLocal202609BatchLatestCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksJournalJournalLocal202609BatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournalLocal202609BatchOffsetNextCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournal202609BatchEarliestCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournal202609BatchLatestCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksJournalJournal202609BatchReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournal202609BatchOffsetNextCountRoute, (c) => {
    throw new Error('Not implemented')
  })
