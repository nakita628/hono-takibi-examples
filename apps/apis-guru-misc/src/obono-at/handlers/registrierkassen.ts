import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute,
  getRegistrierkassenRegistrierkasseUuidBelegeRoute,
  getRegistrierkassenRegistrierkasseUuidDepRoute,
  getRegistrierkassenRegistrierkasseUuidMonatsbelegeRoute,
  getRegistrierkassenRegistrierkasseUuidRoute,
  postRegistrierkassenRegistrierkasseUuidAbschlussRoute,
  putRegistrierkassenRegistrierkasseUuidBelegeBelegUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registrierkassenHandler = app
  .openapi(getRegistrierkassenRegistrierkasseUuidRoute, (c) => {
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
  .openapi(getRegistrierkassenRegistrierkasseUuidDepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrierkassenRegistrierkasseUuidMonatsbelegeRoute, (c) => {
    throw new Error('Not implemented')
  })
