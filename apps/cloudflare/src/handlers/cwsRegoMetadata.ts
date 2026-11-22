import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCwsRegoMetadataRegoMetadataIdRoute,
  getAccountsAccountIdCwsRegoMetadataRegoMetadataIdRoute,
  getAccountsAccountIdCwsRegoMetadataRoute,
  postAccountsAccountIdCwsRegoMetadataRoute,
  putAccountsAccountIdCwsRegoMetadataRegoMetadataIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cwsRegoMetadataHandler = app
  .openapi(getAccountsAccountIdCwsRegoMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsRegoMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCwsRegoMetadataRegoMetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsRegoMetadataRegoMetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCwsRegoMetadataRegoMetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
