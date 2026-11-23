import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexerDeleteIdxNameRoute,
  getIndexerStatusRoute,
  getIndexerStorageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexerHandler = app
  .openapi(deleteIndexerDeleteIdxNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexerStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexerStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
