import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlannerBucketsPlannerBucketIdRoute,
  deletePlannerBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  deletePlannerBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  deletePlannerBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  deletePlannerBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  deletePlannerBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  getPlannerBucketsPlannerBucketIdRoute,
  getPlannerBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  getPlannerBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  getPlannerBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  getPlannerBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  getPlannerBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  getPlannerBucketsPlannerBucketIdTasksRoute,
  getPlannerBucketsRoute,
  patchPlannerBucketsPlannerBucketIdRoute,
  patchPlannerBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  patchPlannerBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  patchPlannerBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  patchPlannerBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  patchPlannerBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  postPlannerBucketsPlannerBucketIdTasksRoute,
  postPlannerBucketsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const plannerPlannerBucketHandler = app
  .openapi(getPlannerBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlannerBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerBucketsPlannerBucketIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlannerBucketsPlannerBucketIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerBucketsPlannerBucketIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerBucketsPlannerBucketIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerBucketsPlannerBucketIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePlannerBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPlannerBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPlannerBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deletePlannerBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePlannerBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPlannerBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchPlannerBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
