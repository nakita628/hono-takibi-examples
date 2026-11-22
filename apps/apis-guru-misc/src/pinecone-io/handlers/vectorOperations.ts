import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDescribeIndexStatsRoute,
  postQueryRoute,
  postVectorsDeleteRoute,
  postVectorsFetchRoute,
  postVectorsUpdateRoute,
  postVectorsUpsertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vectorOperationsHandler = app
  .openapi(postDescribeIndexStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVectorsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVectorsFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVectorsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVectorsUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
