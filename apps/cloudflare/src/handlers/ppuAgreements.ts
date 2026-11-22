import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdPayPerUseAgreementsRoute,
  postAccountsAccountIdPayPerUseAgreementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ppuAgreementsHandler = app
  .openapi(getAccountsAccountIdPayPerUseAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPayPerUseAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
