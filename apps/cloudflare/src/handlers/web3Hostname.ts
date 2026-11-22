import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute,
  deleteZonesZoneIdWeb3HostnamesIdentifierRoute,
  getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute,
  getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesRoute,
  getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListRoute,
  getZonesZoneIdWeb3HostnamesIdentifierRoute,
  getZonesZoneIdWeb3HostnamesRoute,
  patchZonesZoneIdWeb3HostnamesIdentifierRoute,
  postZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesRoute,
  postZonesZoneIdWeb3HostnamesRoute,
  putZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute,
  putZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const web3HostnameHandler = app
  .openapi(getZonesZoneIdWeb3HostnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdWeb3HostnamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdWeb3HostnamesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWeb3HostnamesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdWeb3HostnamesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putZonesZoneIdWeb3HostnamesIdentifierIpfsUniversalPathContentListEntriesContentListEntryIdentifierRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
