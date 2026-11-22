import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListManagedInsightRulesRoute,
  postActionListManagedInsightRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListManagedInsightRulesHandler = app
  .openapi(getActionListManagedInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListManagedInsightRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
