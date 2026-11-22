import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1Id4nsId4nAliasAliasTypeRoute,
  getApiV1Id4nsId4nAliasRoute,
  getApiV1SearchGuidsAliasesTypesRoute,
  getApiV1SearchGuidsRoute,
  postApiV1Id4nsId4nAliasAliasTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aliasHandler = app
  .openapi(getApiV1Id4nsId4nAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1Id4nsId4nAliasAliasTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1Id4nsId4nAliasAliasTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchGuidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchGuidsAliasesTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
