import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdRoute,
  deleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdRoute,
  getMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsRoute,
  getMarketingMarketingEvents202609AssociationsMarketingEventIdListsRoute,
  putMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdRoute,
  putMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listAssociationsHandler = app
  .openapi(
    getMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsRoute,
    (c) => {},
  )
  .openapi(
    putMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdRoute,
    (c) => {},
  )
  .openapi(
    deleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdRoute,
    (c) => {},
  )
  .openapi(getMarketingMarketingEvents202609AssociationsMarketingEventIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdRoute,
    (c) => {},
  )
