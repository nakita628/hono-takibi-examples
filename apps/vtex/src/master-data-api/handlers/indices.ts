import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDataentitiesDataEntityNameIndicesIndexNameRoute,
  getApiDataentitiesDataEntityNameIndicesIndexNameRoute,
  getApiDataentitiesDataEntityNameIndicesRoute,
  putApiDataentitiesDataEntityNameIndicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indicesHandler = app
  .openapi(getApiDataentitiesDataEntityNameIndicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDataentitiesDataEntityNameIndicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDataentitiesDataEntityNameIndicesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDataentitiesDataEntityNameIndicesIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
