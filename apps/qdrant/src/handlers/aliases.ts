import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAliasesRoute,
  getCollectionsCollectionNameAliasesRoute,
  postCollectionsAliasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aliasesHandler = app
  .openapi(postCollectionsAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCollectionsCollectionNameAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
