import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePosLocationsIdRoute,
  getPosLocationsIdRoute,
  getPosLocationsRoute,
  patchPosLocationsIdRoute,
  postPosLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getPosLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
