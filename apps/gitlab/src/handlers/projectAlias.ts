import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectAliasesNameRoute,
  getApiV4ProjectAliasesNameRoute,
  getApiV4ProjectAliasesRoute,
  postApiV4ProjectAliasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectAliasHandler = app
  .openapi(getApiV4ProjectAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectAliasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectAliasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
