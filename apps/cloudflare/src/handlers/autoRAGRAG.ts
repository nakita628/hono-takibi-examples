import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAutoragRagsIdFilesRoute,
  patchAccountsAccountIdAutoragRagsIdSyncRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autoRAGRAGHandler = app
  .openapi(getAccountsAccountIdAutoragRagsIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdAutoragRagsIdSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
