import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSwapEnvironmentCNAMEsRoute,
  postActionSwapEnvironmentCNAMEsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSwapEnvironmentCnamEsHandler = app
  .openapi(getActionSwapEnvironmentCNAMEsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSwapEnvironmentCNAMEsRoute, (c) => {
    throw new Error('Not implemented')
  })
