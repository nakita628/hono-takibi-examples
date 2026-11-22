import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChildrenSha1CountCursorRoute,
  getInfoRoute,
  getLookupMd5Md5Route,
  getLookupSha1Sha1Route,
  getLookupSha256Sha256Route,
  getParentsSha1CountCursorRoute,
  getSessionCreateNameRoute,
  getSessionGetNameRoute,
  getStatsTopRoute,
  postBulkMd5Route,
  postBulkSha1Route,
} from '../routes'

const app = new OpenAPIHono()

export const defaultHandler = app
  .openapi(postBulkMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkSha1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChildrenSha1CountCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupMd5Md5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupSha1Sha1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupSha256Sha256Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getParentsSha1CountCursorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionCreateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionGetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsTopRoute, (c) => {
    throw new Error('Not implemented')
  })
