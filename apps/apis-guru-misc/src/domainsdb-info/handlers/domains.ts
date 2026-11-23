import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomainsSearchRoute,
  getDomainsTldZoneIdDownloadRoute,
  getDomainsTldZoneIdRoute,
  getDomainsTldZoneIdSearchRoute,
  getDomainsUpdatesAddedDownloadRoute,
  getDomainsUpdatesAddedRoute,
  getDomainsUpdatesDeletedDownloadRoute,
  getDomainsUpdatesDeletedRoute,
  getDomainsUpdatesListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(getDomainsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsTldZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsTldZoneIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsTldZoneIdSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsUpdatesAddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsUpdatesAddedDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsUpdatesDeletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsUpdatesDeletedDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsUpdatesListRoute, (c) => {
    throw new Error('Not implemented')
  })
