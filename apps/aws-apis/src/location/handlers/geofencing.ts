import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGeofencingV0CollectionsCollectionNameRoute,
  getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRoute,
  getGeofencingV0CollectionsCollectionNameRoute,
  patchGeofencingV0CollectionsCollectionNameRoute,
  postGeofencingV0CollectionsCollectionNameDeleteGeofencesRoute,
  postGeofencingV0CollectionsCollectionNameListGeofencesRoute,
  postGeofencingV0CollectionsCollectionNamePositionsRoute,
  postGeofencingV0CollectionsCollectionNamePutGeofencesRoute,
  postGeofencingV0CollectionsRoute,
  postGeofencingV0ListCollectionsRoute,
  putGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const geofencingHandler = app
  .openapi(postGeofencingV0CollectionsCollectionNameDeleteGeofencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGeofencingV0CollectionsCollectionNamePositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGeofencingV0CollectionsCollectionNamePutGeofencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGeofencingV0CollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGeofencingV0CollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeofencingV0CollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGeofencingV0CollectionsCollectionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGeofencingV0ListCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGeofencingV0CollectionsCollectionNameListGeofencesRoute, (c) => {
    throw new Error('Not implemented')
  })
