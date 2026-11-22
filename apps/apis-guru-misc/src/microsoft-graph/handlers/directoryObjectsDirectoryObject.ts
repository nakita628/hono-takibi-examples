import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryObjectsDirectoryObjectIdRoute,
  getDirectoryObjectsDirectoryObjectIdRoute,
  getDirectoryObjectsRoute,
  patchDirectoryObjectsDirectoryObjectIdRoute,
  postDirectoryObjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryObjectsDirectoryObjectHandler = app
  .openapi(getDirectoryObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryObjectsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
