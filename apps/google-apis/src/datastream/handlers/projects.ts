import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameFetchStaticIpsRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentConnectionProfilesRoute,
  getV1ParentObjectsRoute,
  getV1ParentPrivateConnectionsRoute,
  getV1ParentRoutesRoute,
  getV1ParentStreamsRoute,
  patchV1NameRoute,
  postV1NameCancelRoute,
  postV1ObjectStartBackfillJobRoute,
  postV1ObjectStopBackfillJobRoute,
  postV1ParentConnectionProfilesDiscoverRoute,
  postV1ParentConnectionProfilesRoute,
  postV1ParentObjectsLookupRoute,
  postV1ParentPrivateConnectionsRoute,
  postV1ParentRoutesRoute,
  postV1ParentStreamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameFetchStaticIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectStartBackfillJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ObjectStopBackfillJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentConnectionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentConnectionProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentConnectionProfilesDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentObjectsLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentPrivateConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentPrivateConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
