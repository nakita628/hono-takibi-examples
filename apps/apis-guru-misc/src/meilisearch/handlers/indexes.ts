import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexesBooksRoute,
  getIndexesBooksRoute,
  getIndexesRoute,
  patchIndexesBooksRoute,
  postIndexesRoute,
  postIndexesSwapIndexesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexesHandler = app
  .openapi(getIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesBooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesSwapIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
