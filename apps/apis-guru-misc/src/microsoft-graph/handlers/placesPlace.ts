import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlacesPlaceIdRoute,
  getPlacesPlaceIdRoute,
  getPlacesRoute,
  patchPlacesPlaceIdRoute,
  postPlacesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placesPlaceHandler = app
  .openapi(getPlacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
