import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchPublishV2AttractionsIdRoute,
  patchPublishV2EventsIdRoute,
  patchPublishV2VenuesIdRoute,
  postPublishV2AttractionsIdVideosRoute,
  postPublishV2AttractionsRoute,
  postPublishV2EntitlementsRoute,
  postPublishV2EventsIdVideosRoute,
  postPublishV2EventsRoute,
  postPublishV2ExtensionsRoute,
  postPublishV2VenuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publishHandler = app
  .openapi(postPublishV2AttractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublishV2AttractionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublishV2AttractionsIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublishV2EntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublishV2EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublishV2EventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublishV2EventsIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublishV2ExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublishV2VenuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPublishV2VenuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
