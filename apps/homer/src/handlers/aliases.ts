import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAliasesAliasIdRoute,
  deleteIpaliasesAliasIdRoute,
  getAliasesRoute,
  getIpaliasesRoute,
  postAliasesRoute,
  postIpaliasesRoute,
  putAliasesAliasIdRoute,
  putIpaliasesAliasIdRoute,
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
  .openapi(getIpaliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpaliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpaliasesAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpaliasesAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
