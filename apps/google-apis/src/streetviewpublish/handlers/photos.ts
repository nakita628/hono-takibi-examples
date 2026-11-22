import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PhotosBatchGetRoute,
  getV1PhotosRoute,
  postV1PhotosBatchDeleteRoute,
  postV1PhotosBatchUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const photosHandler = app
  .openapi(getV1PhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PhotosBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PhotosBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PhotosBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
