import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksJournalSubscriptions202609FiltersFilterIdRoute,
  deleteWebhooksJournalSubscriptions202609PortalsPortalIdRoute,
  deleteWebhooksJournalSubscriptions202609SubscriptionIdRoute,
  getWebhooksJournalJournal202609EarliestRoute,
  getWebhooksJournalJournal202609LatestRoute,
  getWebhooksJournalJournal202609OffsetOffsetNextRoute,
  getWebhooksJournalJournal202609StatusStatusIdRoute,
  getWebhooksJournalJournalLocal202609EarliestRoute,
  getWebhooksJournalJournalLocal202609LatestRoute,
  getWebhooksJournalJournalLocal202609OffsetOffsetNextRoute,
  getWebhooksJournalJournalLocal202609StatusStatusIdRoute,
  getWebhooksJournalSubscriptions202609FiltersFilterIdRoute,
  getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdRoute,
  getWebhooksJournalSubscriptions202609Route,
  getWebhooksJournalSubscriptions202609SubscriptionIdRoute,
  postWebhooksJournalSubscriptions202609Route,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getWebhooksJournalJournalLocal202609EarliestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournalLocal202609LatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournalLocal202609OffsetOffsetNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournalLocal202609StatusStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournal202609EarliestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournal202609LatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournal202609OffsetOffsetNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalJournal202609StatusStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalSubscriptions202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksJournalSubscriptions202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalSubscriptions202609FiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksJournalSubscriptions202609FiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksJournalSubscriptions202609PortalsPortalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksJournalSubscriptions202609SubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksJournalSubscriptions202609SubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
