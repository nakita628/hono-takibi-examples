import { OpenAPIHono } from '@hono/zod-openapi'
import { post20100401AccountsAccountSidOutgoingCallerIdsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401ValidationRequestHandler = app.openapi(
  post20100401AccountsAccountSidOutgoingCallerIdsJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
