import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1WalletablesTypeIdRoute,
  getApi1WalletablesRoute,
  getApi1WalletablesTypeIdRoute,
  postApi1WalletablesRoute,
  putApi1WalletablesTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const walletablesHandler = app
  .openapi(getApi1WalletablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1WalletablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1WalletablesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1WalletablesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1WalletablesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
