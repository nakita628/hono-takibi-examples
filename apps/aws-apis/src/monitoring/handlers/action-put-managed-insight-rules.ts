import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPutManagedInsightRulesRoute,
  postActionPutManagedInsightRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionPutManagedInsightRulesHandler = app
  .openapi(getActionPutManagedInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutManagedInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
