import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiLocationBrowseLocationTypeLocationNameRoute,
  getApiLocationConstituencyIdElectionResultElectionIdRoute,
  getApiLocationConstituencyIdElectionResultLatestRoute,
  getApiLocationConstituencyIdElectionResultsRoute,
  getApiLocationConstituencyIdGeometryRoute,
  getApiLocationConstituencyIdRepresentationsRoute,
  getApiLocationConstituencyIdRoute,
  getApiLocationConstituencyIdSynopsisRoute,
  getApiLocationConstituencySearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationHandler = app
  .openapi(getApiLocationBrowseLocationTypeLocationNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationConstituencySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationConstituencyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationConstituencyIdElectionResultLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationConstituencyIdElectionResultElectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationConstituencyIdElectionResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationConstituencyIdGeometryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationConstituencyIdRepresentationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationConstituencyIdSynopsisRoute, (c) => {
    throw new Error('Not implemented')
  })
