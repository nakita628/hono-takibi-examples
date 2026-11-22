import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMosaikTokenburnGetUuidRoute,
  getMosaikTokenburnRoute,
  postMosaikTokenburnPrepareRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokenBurnControllerHandler = app
  .openapi(getMosaikTokenburnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMosaikTokenburnGetUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMosaikTokenburnPrepareRoute, (c) => {
    throw new Error('Not implemented')
  })
