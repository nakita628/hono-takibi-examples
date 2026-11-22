import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAliasNameRoute,
  getAliasRoute,
  headAliasNameRoute,
  postAliasNameRoute,
  postAliasRolloverNewIndexRoute,
  postAliasRolloverRoute,
  putAliasNameRoute,
  putAliasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aliasHandler = app
  .openapi(getAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAliasRolloverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAliasRolloverNewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
