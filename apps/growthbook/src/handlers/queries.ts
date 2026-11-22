import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DataSourcesIdQueriesRoute,
  getV1QueriesIdRoute,
  postV1QueriesIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queriesHandler = app
  .openapi(getV1QueriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DataSourcesIdQueriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1QueriesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
