import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionManagedContactsContactIdRoute,
  getApiVersionManagedContactsContactIdRoute,
  getApiVersionManagedContactsRoute,
  postApiVersionManagedContactsRoute,
  putApiVersionManagedContactsContactIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedContactsHandler = app
  .openapi(postApiVersionManagedContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionManagedContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionManagedContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionManagedContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
