import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRegistrierkassenRegistrierkasseUuidDepRoute,
  getRegistrierkassenRegistrierkasseUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registrierkasseHandler = app
  .openapi(getRegistrierkassenRegistrierkasseUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrierkassenRegistrierkasseUuidDepRoute, (c) => {
    throw new Error('Not implemented')
  })
