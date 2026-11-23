import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAliasesAliasIdRoute,
  getAliasesRoute,
  postAliasesRoute,
  putAliasesAliasIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aliasesHandler = app
  .openapi(getAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAliasesAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAliasesAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
