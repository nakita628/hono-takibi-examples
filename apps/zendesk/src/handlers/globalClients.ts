import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2OauthGlobalClientsGlobalClientIdRoute,
  getApiV2OauthGlobalClientsRoute,
  getApiV2OauthGlobalClientsTokenSummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalClientsHandler = app
  .openapi(getApiV2OauthGlobalClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthGlobalClientsGlobalClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2OauthGlobalClientsTokenSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
