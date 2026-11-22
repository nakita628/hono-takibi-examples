import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdRegistrarRegistrationsDomainNameTransferInStatusRoute,
  postAccountsAccountIdRegistrarRegistrationsDomainNameTransferInRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registrarTransferHandler = app
  .openapi(postAccountsAccountIdRegistrarRegistrationsDomainNameTransferInRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRegistrarRegistrationsDomainNameTransferInStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
