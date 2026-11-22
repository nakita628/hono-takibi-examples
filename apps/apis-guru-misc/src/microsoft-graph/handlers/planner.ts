import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPlannerBucketsCountRoute,
  getPlannerBucketsPlannerBucketIdTasksCountRoute,
  getPlannerPlansCountRoute,
  getPlannerPlansPlannerPlanIdBucketsCountRoute,
  getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksCountRoute,
  getPlannerPlansPlannerPlanIdTasksCountRoute,
  getPlannerTasksCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const plannerHandler = app
  .openapi(getPlannerBucketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerBucketsPlannerBucketIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdBucketsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerTasksCountRoute, (c) => {
    throw new Error('Not implemented')
  })
