import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3BlocklistBulkRoute,
  deleteApiV3BlocklistIdRoute,
  getApiV3BlocklistMovieRoute,
  getApiV3BlocklistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blocklistHandler = app
  .openapi(getApiV3BlocklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3BlocklistMovieRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3BlocklistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3BlocklistBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
