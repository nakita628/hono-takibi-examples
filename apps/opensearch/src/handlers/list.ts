import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListIndicesIndexRoute,
  getListIndicesRoute,
  getListRoute,
  getListShardsIndexRoute,
  getListShardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listHandler = app
  .openapi(getListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListIndicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListIndicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListShardsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
