import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSsfStreamsUuidIndexRoute,
  getSsfStreamsIndexRoute,
  getSsfStreamsUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ssfHandler = app
  .openapi(getSsfStreamsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSsfStreamsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSsfStreamsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
