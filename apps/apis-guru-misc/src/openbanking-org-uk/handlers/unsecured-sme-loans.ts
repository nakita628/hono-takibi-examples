import { OpenAPIHono } from '@hono/zod-openapi'
import { getUnsecuredSmeLoansRoute, headUnsecuredSmeLoansRoute } from '../routes'

const app = new OpenAPIHono()

export const unsecuredSmeLoansHandler = app
  .openapi(getUnsecuredSmeLoansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headUnsecuredSmeLoansRoute, (c) => {
    throw new Error('Not implemented')
  })
