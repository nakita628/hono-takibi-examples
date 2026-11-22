import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1GlobalConfigEdgeConfigIdRoute,
  deleteV1GlobalConfigEdgeConfigIdSchemaRoute,
  deleteV1GlobalConfigEdgeConfigIdTokensRoute,
  getV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRoute,
  getV1GlobalConfigEdgeConfigIdBackupsRoute,
  getV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKeyRoute,
  getV1GlobalConfigEdgeConfigIdItemsRoute,
  getV1GlobalConfigEdgeConfigIdRoute,
  getV1GlobalConfigEdgeConfigIdSchemaRoute,
  getV1GlobalConfigEdgeConfigIdTokensRoute,
  getV1GlobalConfigEdgeConfigIdTokenTokenRoute,
  getV1GlobalConfigRoute,
  patchV1GlobalConfigEdgeConfigIdItemsRoute,
  postV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRestoreRoute,
  postV1GlobalConfigEdgeConfigIdSchemaRoute,
  postV1GlobalConfigEdgeConfigIdTokenRoute,
  postV1GlobalConfigRoute,
  putV1GlobalConfigEdgeConfigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalConfigHandler = app
  .openapi(getV1GlobalConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GlobalConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GlobalConfigEdgeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GlobalConfigEdgeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1GlobalConfigEdgeConfigIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GlobalConfigEdgeConfigIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GlobalConfigEdgeConfigIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GlobalConfigEdgeConfigIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdTokenTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GlobalConfigEdgeConfigIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GlobalConfigEdgeConfigIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
