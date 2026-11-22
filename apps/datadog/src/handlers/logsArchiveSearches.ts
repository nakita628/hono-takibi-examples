import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2LogsArchiveSearchesArchiveSearchIdRoute,
  getApiV2LogsArchiveSearchesRoute,
  patchApiV2LogsArchiveSearchesArchiveSearchIdRoute,
  postApiV2LogsArchiveSearchesArchiveSearchIdCancelRoute,
  postApiV2LogsArchiveSearchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsArchiveSearchesHandler = app
  .openapi(getApiV2LogsArchiveSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsArchiveSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsArchiveSearchesArchiveSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LogsArchiveSearchesArchiveSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsArchiveSearchesArchiveSearchIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
