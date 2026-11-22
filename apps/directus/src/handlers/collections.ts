import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCollectionsIdRoute,
  getCollectionsIdRoute,
  getCollectionsRoute,
  patchCollectionsIdRoute,
  postCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
