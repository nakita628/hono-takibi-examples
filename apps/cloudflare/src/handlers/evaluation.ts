import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdFlagshipAppsAppIdEvaluateRoute,
  postAccountsAccountIdFlagshipAppsAppIdEvaluateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const evaluationHandler = app
  .openapi(getAccountsAccountIdFlagshipAppsAppIdEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdFlagshipAppsAppIdEvaluateRoute, (c) => {
    throw new Error('Not implemented')
  })
