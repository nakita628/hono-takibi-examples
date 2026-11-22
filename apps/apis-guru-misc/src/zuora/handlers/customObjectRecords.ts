import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteObjectsRecordsDefaultObjectIdRoute,
  getObjectsRecordsDefaultObjectIdRoute,
  getObjectsRecordsDefaultObjectRoute,
  patchObjectsRecordsDefaultObjectIdRoute,
  postObjectsBatchDefaultObjectRoute,
  postObjectsRecordsDefaultObjectRoute,
  putObjectsRecordsDefaultObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customObjectRecordsHandler = app
  .openapi(postObjectsBatchDefaultObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsRecordsDefaultObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postObjectsRecordsDefaultObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteObjectsRecordsDefaultObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getObjectsRecordsDefaultObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchObjectsRecordsDefaultObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putObjectsRecordsDefaultObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
