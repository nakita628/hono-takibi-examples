import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAiGatewayTokenRoute,
  getAiGatewayProvidersRoute,
  getSitesSiteIdAiGatewayTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayHandler = app
  .openapi(getAiGatewayProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdAiGatewayTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiGatewayTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
