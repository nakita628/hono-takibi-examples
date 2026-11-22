import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFeedsUuidRoute,
  getFeedsRoute,
  getFeedsUuidRoute,
  postFeedsRoute,
  putFeedsUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalFeedsHandler = app
  .openapi(getFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFeedsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFeedsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
