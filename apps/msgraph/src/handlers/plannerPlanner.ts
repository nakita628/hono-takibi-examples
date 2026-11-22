import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlannerRoute, patchPlannerRoute } from '../routes'

const app = new OpenAPIHono()

export const plannerPlannerHandler = app
  .openapi(getPlannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerRoute, (c) => {
    throw new Error('Not implemented')
  })
