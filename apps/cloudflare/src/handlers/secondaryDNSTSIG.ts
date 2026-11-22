import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdSecondaryDnsTsigsTsigIdRoute,
  getAccountsAccountIdSecondaryDnsTsigsRoute,
  getAccountsAccountIdSecondaryDnsTsigsTsigIdRoute,
  postAccountsAccountIdSecondaryDnsTsigsRoute,
  putAccountsAccountIdSecondaryDnsTsigsTsigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secondaryDNSTSIGHandler = app
  .openapi(getAccountsAccountIdSecondaryDnsTsigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdSecondaryDnsTsigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdSecondaryDnsTsigsTsigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSecondaryDnsTsigsTsigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdSecondaryDnsTsigsTsigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
