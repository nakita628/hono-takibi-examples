import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2AliasesAliasIdRoute,
  getV2DeploymentsIdAliasesRoute,
  getV4AliasesIdOrAliasRoute,
  getV4AliasesRoute,
  postV2DeploymentsIdAliasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aliasesHandler = app
  .openapi(deleteV2AliasesAliasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DeploymentsIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DeploymentsIdAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4AliasesIdOrAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
