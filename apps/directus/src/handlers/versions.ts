import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionsIdRoute,
  deleteVersionsRoute,
  getVersionsIdCompareRoute,
  getVersionsIdRoute,
  getVersionsRoute,
  patchVersionsIdRoute,
  patchVersionsRoute,
  postVersionsIdPromoteRoute,
  postVersionsIdSaveRoute,
  postVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const versionsHandler = app
  .openapi(getVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionsIdSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionsIdCompareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionsIdPromoteRoute, (c) => {
    throw new Error('Not implemented')
  })
