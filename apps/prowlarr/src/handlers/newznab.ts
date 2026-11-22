import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1IndexerIdDownloadRoute,
  getApiV1IndexerIdNewznabRoute,
  getIdApiRoute,
  getIdDownloadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const newznabHandler = app
  .openapi(getApiV1IndexerIdNewznabRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1IndexerIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
