import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAliasesV2TrackingId2Route,
  deleteAliasesV2TrackingIdTypeExternalIdRoute,
  deleteAliasesV2TrackingIdTypeRoute,
  getAliasesV2HealthRoute,
  getAliasesV2Route,
  getAliasesV2TrackingId2Route,
  getAliasesV2TrackingIdRoute,
  getAliasesV2TrackingIdTypeRoute,
  getAliasesV2VersionRoute,
  putAliasesV2TrackingIdBatchRoute,
  putAliasesV2TrackingIdTypeExternalIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aliasesHandler = app
  .openapi(getAliasesV2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasesV2HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasesV2TrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasesV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAliasesV2TrackingId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasesV2TrackingId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAliasesV2TrackingIdBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAliasesV2TrackingIdTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasesV2TrackingIdTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAliasesV2TrackingIdTypeExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAliasesV2TrackingIdTypeExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
