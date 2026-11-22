import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPersonChaptersByRoleRoute,
  getApiPersonCoversdbImageRoute,
  getApiPersonRolesRoute,
  getApiPersonRoute,
  getApiPersonSearchRoute,
  getApiPersonSeriesKnownForRoute,
  postApiPersonAllRoute,
  postApiPersonMergeRoute,
  postApiPersonUpdateRoute,
  postApiPersonValidAliasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const personHandler = app
  .openapi(getApiPersonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPersonSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPersonRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPersonAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPersonUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPersonCoversdbImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPersonSeriesKnownForRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPersonChaptersByRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPersonMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPersonValidAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
