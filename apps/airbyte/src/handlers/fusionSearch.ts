import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DestinationsDestinationIdSearchStatusRoute,
  getV1SourcesSourceIdSearchStatusRoute,
  postV1DestinationsDestinationIdSearchRoute,
  postV1SourcesSourceIdSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fusionSearchHandler = app
  .openapi(postV1SourcesSourceIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationsDestinationIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesSourceIdSearchStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DestinationsDestinationIdSearchStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
