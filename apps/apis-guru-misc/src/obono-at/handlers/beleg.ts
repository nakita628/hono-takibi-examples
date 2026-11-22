import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBelegeBelegUuidRoute,
  getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute,
  getRegistrierkassenRegistrierkasseUuidBelegeRoute,
  postRegistrierkassenRegistrierkasseUuidAbschlussRoute,
  putRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const belegHandler = app
  .openapi(getBelegeBelegUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegistrierkassenRegistrierkasseUuidAbschlussRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrierkassenRegistrierkasseUuidBelegeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
