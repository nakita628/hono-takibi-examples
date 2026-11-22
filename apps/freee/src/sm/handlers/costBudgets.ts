import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCostBudgetsIdRoute,
  getCostBudgetsRoute,
  patchCostBudgetsIdRoute,
  postCostBudgetsIdCancellationRoute,
  postCostBudgetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const costBudgetsHandler = app
  .openapi(getCostBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCostBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCostBudgetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCostBudgetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCostBudgetsIdCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
