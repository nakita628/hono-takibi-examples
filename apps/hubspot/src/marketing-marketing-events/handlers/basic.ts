import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingMarketingEvents202609EventsExternalEventIdRoute,
  deleteMarketingMarketingEvents202609ObjectIdRoute,
  getMarketingMarketingEvents202609EventsExternalEventIdRoute,
  getMarketingMarketingEvents202609ObjectIdRoute,
  getMarketingMarketingEvents202609Route,
  patchMarketingMarketingEvents202609EventsExternalEventIdRoute,
  patchMarketingMarketingEvents202609ObjectIdRoute,
  postMarketingMarketingEvents202609EventsRoute,
  putMarketingMarketingEvents202609EventsExternalEventIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getMarketingMarketingEvents202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingMarketingEvents202609EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingMarketingEvents202609EventsExternalEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMarketingMarketingEvents202609EventsExternalEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingMarketingEvents202609EventsExternalEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingMarketingEvents202609EventsExternalEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingMarketingEvents202609ObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingMarketingEvents202609ObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingMarketingEvents202609ObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
