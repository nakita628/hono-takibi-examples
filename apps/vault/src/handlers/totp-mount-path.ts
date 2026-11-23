import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTotpMountPathKeysNameRoute,
  getTotpMountPathCodeNameRoute,
  getTotpMountPathKeysIndexRoute,
  getTotpMountPathKeysNameRoute,
  postTotpMountPathCodeNameRoute,
  postTotpMountPathKeysNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const totpMountPathHandler = app
  .openapi(getTotpMountPathCodeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTotpMountPathCodeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTotpMountPathKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTotpMountPathKeysNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTotpMountPathKeysNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTotpMountPathKeysNameRoute, (c) => {
    throw new Error('Not implemented')
  })
