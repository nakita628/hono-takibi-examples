import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexesIndexUidRoute,
  getIndexesIndexUidRoute,
  getIndexesIndexUidSearchRoute,
  getIndexesRoute,
  patchIndexesIndexUidRoute,
  postIndexesIndexUidSearchRoute,
  postIndexesRoute,
  postSwapIndexesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexesHandler = app
  .openapi(getIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexesIndexUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIndexesIndexUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexesIndexUidSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSwapIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
