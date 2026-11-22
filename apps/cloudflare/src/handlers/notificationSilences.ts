import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAlertingV3SilencesSilenceIdRoute,
  getAccountsAccountIdAlertingV3SilencesRoute,
  getAccountsAccountIdAlertingV3SilencesSilenceIdRoute,
  postAccountsAccountIdAlertingV3SilencesRoute,
  putAccountsAccountIdAlertingV3SilencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationSilencesHandler = app
  .openapi(getAccountsAccountIdAlertingV3SilencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAlertingV3SilencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAlertingV3SilencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAlertingV3SilencesSilenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAlertingV3SilencesSilenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
