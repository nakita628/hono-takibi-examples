import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAliasesAliasNameRoute,
  getAliasesAliasNameRoute,
  getAliasesRoute,
  putAliasesAliasNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aliasesHandler = app
  .openapi(getAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAliasesAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
