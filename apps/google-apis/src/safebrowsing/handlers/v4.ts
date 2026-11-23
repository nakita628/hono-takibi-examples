import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4EncodedFullHashesEncodedRequestRoute,
  getV4EncodedUpdatesEncodedRequestRoute,
  getV4ThreatListsRoute,
  postV4FullHashesFindRoute,
  postV4ThreatHitsRoute,
  postV4ThreatListUpdatesFetchRoute,
  postV4ThreatMatchesFindRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v4Handler = app
  .openapi(getV4EncodedFullHashesEncodedRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4EncodedUpdatesEncodedRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4FullHashesFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ThreatHitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ThreatListUpdatesFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4ThreatListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4ThreatMatchesFindRoute, (c) => {
    throw new Error('Not implemented')
  })
