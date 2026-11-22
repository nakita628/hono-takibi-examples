import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdSettingsPasswordRulesRoute,
  getV21CurrentUserPasswordRulesRoute,
  putV21AccountsAccountIdSettingsPasswordRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountPasswordRulesHandler = app
  .openapi(getV21AccountsAccountIdSettingsPasswordRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSettingsPasswordRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21CurrentUserPasswordRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
