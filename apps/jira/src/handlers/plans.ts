import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3PlansPlanPlanIdRoute,
  getRestApi3PlansPlanRoute,
  postRestApi3PlansPlanPlanIdDuplicateRoute,
  postRestApi3PlansPlanRoute,
  putRestApi3PlansPlanPlanIdArchiveRoute,
  putRestApi3PlansPlanPlanIdRoute,
  putRestApi3PlansPlanPlanIdTrashRoute,
} from '../routes'

const app = new OpenAPIHono()

export const plansHandler = app
  .openapi(getRestApi3PlansPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PlansPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PlansPlanPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PlansPlanPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PlansPlanPlanIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PlansPlanPlanIdDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PlansPlanPlanIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
