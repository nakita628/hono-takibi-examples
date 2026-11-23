import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConcurrencyGroupsPruneConcurrencyIdRoute,
  getConcurrencyGroupsIdKeyRoute,
  getConcurrencyGroupsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const concurrencyGroupsHandler = app
  .openapi(getConcurrencyGroupsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConcurrencyGroupsPruneConcurrencyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConcurrencyGroupsIdKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
