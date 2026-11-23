import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlacesV0IndexesIndexNameRoute,
  getPlacesV0IndexesIndexNamePlacesPlaceIdRoute,
  getPlacesV0IndexesIndexNameRoute,
  patchPlacesV0IndexesIndexNameRoute,
  postPlacesV0IndexesIndexNameSearchPositionRoute,
  postPlacesV0IndexesIndexNameSearchSuggestionsRoute,
  postPlacesV0IndexesIndexNameSearchTextRoute,
  postPlacesV0IndexesRoute,
  postPlacesV0ListIndexesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placesHandler = app
  .openapi(postPlacesV0IndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesV0IndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesV0IndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesV0IndexesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesV0IndexesIndexNamePlacesPlaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesV0ListIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesV0IndexesIndexNameSearchPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesV0IndexesIndexNameSearchSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesV0IndexesIndexNameSearchTextRoute, (c) => {
    throw new Error('Not implemented')
  })
