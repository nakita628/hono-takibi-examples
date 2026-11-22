import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBlocklistsNameRoute,
  deleteChanneltypesNameRoute,
  getAppRoute,
  getBlocklistsNameRoute,
  getBlocklistsRoute,
  getChanneltypesNameRoute,
  getChanneltypesRoute,
  getRateLimitsRoute,
  patchAppRoute,
  postBlocklistsRoute,
  postChanneltypesRoute,
  postCheckPushRoute,
  postCheckSqsRoute,
  putBlocklistsNameRoute,
  putChanneltypesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBlocklistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocklistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBlocklistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChanneltypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChanneltypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChanneltypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChanneltypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChanneltypesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckPushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCheckSqsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRateLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
