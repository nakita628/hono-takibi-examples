import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountOrZoneAccountOrZoneIdCustomPagesIdentifierRoute,
  getAccountOrZoneAccountOrZoneIdCustomPagesRoute,
  getAccountsAccountIdCustomPagesIdentifierRoute,
  getAccountsAccountIdCustomPagesRoute,
  postAccountOrZoneAccountOrZoneIdCustomPagesPreviewTokensRoute,
  postAccountsAccountIdCustomPagesPreviewTokensRoute,
  putAccountOrZoneAccountOrZoneIdCustomPagesIdentifierRoute,
  putAccountsAccountIdCustomPagesIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customPagesForAnAccountHandler = app
  .openapi(getAccountsAccountIdCustomPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCustomPagesPreviewTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCustomPagesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCustomPagesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdCustomPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdCustomPagesPreviewTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdCustomPagesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdCustomPagesIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
