import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeySetsKeySetIdOrNameRoute,
  getKeySetsKeySetIdOrNameRoute,
  getKeySetsRoute,
  patchKeySetsKeySetIdOrNameRoute,
  postKeySetsRoute,
  putKeySetsKeySetIdOrNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keySetsHandler = app
  .openapi(getKeySetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKeySetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKeySetsKeySetIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeySetsKeySetIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchKeySetsKeySetIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKeySetsKeySetIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
