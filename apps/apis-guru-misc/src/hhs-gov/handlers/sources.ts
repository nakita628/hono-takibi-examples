import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesSourcesIdJsonRoute,
  getResourcesSourcesIdSyndicateFormatRoute,
  getResourcesSourcesJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sourcesHandler = app
  .openapi(getResourcesSourcesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesSourcesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesSourcesIdSyndicateFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
