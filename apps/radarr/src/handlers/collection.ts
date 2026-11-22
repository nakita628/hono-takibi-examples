import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3CollectionIdRoute,
  getApiV3CollectionRoute,
  putApiV3CollectionIdRoute,
  putApiV3CollectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionHandler = app
  .openapi(getApiV3CollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3CollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3CollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
