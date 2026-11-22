import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIdentifierPrefixesContractUriRoute,
  getIdentifierPrefixesExpandIdRoute,
  getIdentifierPrefixesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identifierPrefixesHandler = app
  .openapi(getIdentifierPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentifierPrefixesContractUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentifierPrefixesExpandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
