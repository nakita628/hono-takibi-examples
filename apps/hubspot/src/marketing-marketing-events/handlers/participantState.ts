import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownRoute,
  getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownRoute,
  getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdRoute,
  getMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownRoute,
  getMarketingMarketingEvents202609ParticipationsMarketingEventIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const participantStateHandler = app
  .openapi(
    getMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownRoute,
    (c) => {},
  )
  .openapi(
    getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdRoute,
    (c) => {},
  )
  .openapi(
    getMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownRoute,
    (c) => {},
  )
  .openapi(getMarketingMarketingEvents202609ParticipationsMarketingEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownRoute, (c) => {
    throw new Error('Not implemented')
  })
