import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAiFinetunesFinetuneIdRoute,
  getAccountsAccountIdAiFinetunesPublicRoute,
  getAccountsAccountIdAiFinetunesRoute,
  postAccountsAccountIdAiFinetunesFinetuneIdFinetuneAssetsRoute,
  postAccountsAccountIdAiFinetunesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workersAIFinetuneHandler = app
  .openapi(getAccountsAccountIdAiFinetunesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiFinetunesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiFinetunesPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAiFinetunesFinetuneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiFinetunesFinetuneIdFinetuneAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
