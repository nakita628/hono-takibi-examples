import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminMappingsRoute,
  deleteAdminMappingsStubMappingIdRoute,
  deleteAdminRequestsRequestIdRoute,
  deleteAdminRequestsRoute,
  getAdminMappingsRoute,
  getAdminMappingsStubMappingIdRoute,
  getAdminRecordingsStatusRoute,
  getAdminRequestsRequestIdRoute,
  getAdminRequestsRoute,
  getAdminRequestsUnmatchedNearMissesRoute,
  getAdminRequestsUnmatchedRoute,
  getAdminScenariosRoute,
  postAdminMappingsFindByMetadataRoute,
  postAdminMappingsImportRoute,
  postAdminMappingsRemoveByMetadataRoute,
  postAdminMappingsResetRoute,
  postAdminMappingsRoute,
  postAdminMappingsSaveRoute,
  postAdminNearMissesRequestPatternRoute,
  postAdminNearMissesRequestRoute,
  postAdminRecordingsSnapshotRoute,
  postAdminRecordingsStartRoute,
  postAdminRecordingsStopRoute,
  postAdminRequestsCountRoute,
  postAdminRequestsFindRoute,
  postAdminRequestsRemoveByMetadataRoute,
  postAdminRequestsRemoveRoute,
  postAdminRequestsResetRoute,
  postAdminResetRoute,
  postAdminScenariosResetRoute,
  postAdminSettingsRoute,
  postAdminShutdownRoute,
  putAdminMappingsStubMappingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(deleteAdminMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsFindByMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsRemoveByMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMappingsSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminMappingsStubMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminMappingsStubMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminMappingsStubMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminNearMissesRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminNearMissesRequestPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRecordingsSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRecordingsStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRecordingsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRecordingsStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRequestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRequestsFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRequestsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRequestsRemoveByMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRequestsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRequestsUnmatchedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRequestsUnmatchedNearMissesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminScenariosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminScenariosResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
