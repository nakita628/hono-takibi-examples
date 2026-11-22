import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdChallengesWidgetsSitekeyRoute,
  getAccountsAccountIdChallengesWidgetsRoute,
  getAccountsAccountIdChallengesWidgetsSitekeyRoute,
  postAccountsAccountIdChallengesWidgetsRoute,
  postAccountsAccountIdChallengesWidgetsSitekeyRotateSecretRoute,
  putAccountsAccountIdChallengesWidgetsSitekeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const turnstileHandler = app
  .openapi(getAccountsAccountIdChallengesWidgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdChallengesWidgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdChallengesWidgetsSitekeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdChallengesWidgetsSitekeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdChallengesWidgetsSitekeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdChallengesWidgetsSitekeyRotateSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
