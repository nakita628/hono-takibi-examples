import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIdentifierMapperSourceTargetIndexRoute,
  getIdentifierPrefixesContractUriRoute,
  getIdentifierPrefixesExpandIdRoute,
  getIdentifierPrefixesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identifierHandler = app
  .openapi(getIdentifierMapperSourceTargetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentifierPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentifierPrefixesContractUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentifierPrefixesExpandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
