import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsDeleteEventIdRoute,
  getEventsRoute,
  getEventsViewEventIdRoute,
  postEventsAddRoute,
  postEventsAddTagEventIdTagIdLocalLocalRoute,
  postEventsEnrichEventEventIdRoute,
  postEventsIndexRoute,
  postEventsPublishEventIdRoute,
  postEventsRemoveTagEventIdTagIdRoute,
  postEventsRestSearchRoute,
  postEventsUnpublishEventIdRoute,
  putEventsEditEventIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(postEventsRestSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEventsEditEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsDeleteEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsViewEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsPublishEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsUnpublishEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsAddTagEventIdTagIdLocalLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsRemoveTagEventIdTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEnrichEventEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
