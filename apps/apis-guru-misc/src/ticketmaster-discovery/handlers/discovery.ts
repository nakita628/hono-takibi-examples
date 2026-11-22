import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDiscoveryV2AttractionsIdRoute,
  getDiscoveryV2AttractionsRoute,
  getDiscoveryV2ClassificationsGenresIdRoute,
  getDiscoveryV2ClassificationsIdRoute,
  getDiscoveryV2ClassificationsRoute,
  getDiscoveryV2ClassificationsSegmentsIdRoute,
  getDiscoveryV2ClassificationsSubgenresIdRoute,
  getDiscoveryV2EventsIdImagesRoute,
  getDiscoveryV2EventsIdRoute,
  getDiscoveryV2EventsRoute,
  getDiscoveryV2VenuesIdRoute,
  getDiscoveryV2VenuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const discoveryHandler = app
  .openapi(getDiscoveryV2AttractionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryV2AttractionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryV2ClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryV2ClassificationsGenresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryV2ClassificationsSegmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryV2ClassificationsSubgenresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryV2ClassificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryV2EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryV2EventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryV2EventsIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryV2VenuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDiscoveryV2VenuesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
