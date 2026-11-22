import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiReleaseEventsIdRoute,
  getApiReleaseEventsEventIdAlbumsRoute,
  getApiReleaseEventsEventIdPublishedSongsRoute,
  getApiReleaseEventsIdRoute,
  getApiReleaseEventsNamesRoute,
  getApiReleaseEventsRoute,
  postApiReleaseEventsEventIdReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const releaseEventApiHandler = app
  .openapi(getApiReleaseEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventsEventIdAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventsEventIdPublishedSongsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReleaseEventsEventIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiReleaseEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReleaseEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
