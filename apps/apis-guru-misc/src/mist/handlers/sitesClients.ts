import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdClientsClientMacEventsRoute,
  getApiV1SitesSiteIdClientsCountRoute,
  getApiV1SitesSiteIdClientsEventsCountRoute,
  getApiV1SitesSiteIdClientsEventsSearchRoute,
  getApiV1SitesSiteIdClientsSearchRoute,
  getApiV1SitesSiteIdClientsSessionsCountRoute,
  getApiV1SitesSiteIdClientsSessionsSearchRoute,
  postApiV1SitesSiteIdClientsClientMacDisconnectRoute,
  postApiV1SitesSiteIdClientsClientMacUnauthorizeRoute,
  postApiV1SitesSiteIdClientsDisconnectRoute,
  postApiV1SitesSiteIdClientsUnauthorizeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesClientsHandler = app
  .openapi(getApiV1SitesSiteIdClientsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdClientsDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsSessionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdClientsUnauthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdClientsClientMacDisconnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdClientsClientMacEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdClientsClientMacUnauthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
