import { OpenAPIHono } from '@hono/zod-openapi'
import {
  putApiV4ElasticsearchIndexedNamespacesRollbackRoute,
  putApiV4ElasticsearchIndexedNamespacesRolloutRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedSearchRolloutHandler = app
  .openapi(putApiV4ElasticsearchIndexedNamespacesRolloutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ElasticsearchIndexedNamespacesRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
