import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAliasesRoute,
  getAliasesAllRoute,
  getAliasesRoute,
  postAliasesRoute,
  putAliasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aliasesHandler = app
  .openapi(deleteAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasesAllRoute, (c) => {
    throw new Error('Not implemented')
  })
