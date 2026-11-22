import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConfigsKeyRoute,
  getV1ConfigsKeyKeyUsageRoute,
  getV1ConfigsKeyLineageRoute,
  getV1ConfigsKeyReferencesRoute,
  getV1ConfigsKeyRoute,
  getV1ConfigsKeySchemaRoute,
  getV1ConfigsRoute,
  postV1ConfigsKeyArchiveRoute,
  postV1ConfigsKeyLockRoute,
  postV1ConfigsKeyRoute,
  postV1ConfigsKeySchemaVerifyRoute,
  postV1ConfigsKeyUnarchiveRoute,
  postV1ConfigsKeyUnlockRoute,
  postV1ConfigsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configsHandler = app
  .openapi(getV1ConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsKeyReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsKeyKeyUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsKeyLineageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeySchemaVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsKeySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConfigsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeyArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeyLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigsKeyUnlockRoute, (c) => {
    throw new Error('Not implemented')
  })
