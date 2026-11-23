import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAliasNameRoute,
  getAliasRoute,
  headAliasNameRoute,
  postAliasRolloverNewIndexRoute,
  postAliasRolloverRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aliasHandler = app
  .openapi(getAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAliasRolloverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAliasRolloverNewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
