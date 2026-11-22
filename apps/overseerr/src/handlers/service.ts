import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServiceRadarrRadarrIdRoute,
  getServiceRadarrRoute,
  getServiceSonarrLookupTmdbIdRoute,
  getServiceSonarrRoute,
  getServiceSonarrSonarrIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceHandler = app
  .openapi(getServiceRadarrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceRadarrRadarrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceSonarrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceSonarrSonarrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceSonarrLookupTmdbIdRoute, (c) => {
    throw new Error('Not implemented')
  })
