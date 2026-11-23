import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIpaliasesAliasIdRoute,
  getIpaliasesRoute,
  postIpaliasesRoute,
  putIpaliasesAliasIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipaliasesHandler = app
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
