import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUuidStreamRoute,
  deleteUuidTalkRoute,
  getUuidRoute,
  putUuidDtmfRoute,
  putUuidRoute,
  putUuidStreamRoute,
  putUuidTalkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uuidHandler = app
  .openapi(getUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUuidDtmfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUuidStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUuidStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUuidTalkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUuidTalkRoute, (c) => {
    throw new Error('Not implemented')
  })
