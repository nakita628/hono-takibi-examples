import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPlansPlanIdRoute,
  getPlansRoute,
  optionsPlansPlanIdRoute,
  optionsPlansRoute,
} from '../routes'

const app = new OpenAPIHono()

export const plansHandler = app
  .openapi(getPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsPlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
