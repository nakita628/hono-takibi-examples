import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2LogsConfigArchivesArchiveIdReadersRoute,
  deleteApiV2LogsConfigArchivesArchiveIdRoute,
  getApiV2LogsConfigArchiveOrderRoute,
  getApiV2LogsConfigArchivesArchiveIdReadersRoute,
  getApiV2LogsConfigArchivesArchiveIdRoute,
  getApiV2LogsConfigArchivesRoute,
  postApiV2LogsConfigArchivesArchiveIdReadersRoute,
  postApiV2LogsConfigArchivesRoute,
  putApiV2LogsConfigArchiveOrderRoute,
  putApiV2LogsConfigArchivesArchiveIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsArchivesHandler = app
  .openapi(getApiV2LogsConfigArchiveOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LogsConfigArchiveOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsConfigArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsConfigArchivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2LogsConfigArchivesArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsConfigArchivesArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LogsConfigArchivesArchiveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2LogsConfigArchivesArchiveIdReadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsConfigArchivesArchiveIdReadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsConfigArchivesArchiveIdReadersRoute, (c) => {
    throw new Error('Not implemented')
  })
