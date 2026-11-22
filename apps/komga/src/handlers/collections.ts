import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CollectionsIdRoute,
  getApiV1CollectionsIdRoute,
  getApiV1CollectionsRoute,
  patchApiV1CollectionsIdRoute,
  postApiV1CollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getApiV1CollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1CollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
