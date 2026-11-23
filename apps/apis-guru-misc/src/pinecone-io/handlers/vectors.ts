import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postVectorsDeleteRoute,
  postVectorsFetchRoute,
  postVectorsUpdateRoute,
  postVectorsUpsertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vectorsHandler = app
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
