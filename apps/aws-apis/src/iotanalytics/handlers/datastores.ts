import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatastoresDatastoreNameRoute,
  getDatastoresDatastoreNameRoute,
  getDatastoresRoute,
  postDatastoresRoute,
  putDatastoresDatastoreNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datastoresHandler = app
  .openapi(postDatastoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatastoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatastoresDatastoreNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatastoresDatastoreNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatastoresDatastoreNameRoute, (c) => {
    throw new Error('Not implemented')
  })
