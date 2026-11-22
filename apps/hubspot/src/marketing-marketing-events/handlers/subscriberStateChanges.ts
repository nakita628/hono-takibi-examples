import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsertRoute,
  postMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriberStateChangesHandler = app
  .openapi(
    postMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsertRoute,
    (c) => {},
  )
  .openapi(
    postMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsertRoute,
    (c) => {},
  )
