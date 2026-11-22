import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMetadataQueryIndicesRoute,
  getSearchRoute,
  postMetadataQueriesExecuteReadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(postMetadataQueriesExecuteReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataQueryIndicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
