import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute,
  deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  deletePlannerPlansPlannerPlanIdDetailsRoute,
  deletePlannerPlansPlannerPlanIdRoute,
  deletePlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  deletePlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  deletePlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute,
  deletePlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  deletePlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute,
  getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute,
  getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute,
  getPlannerPlansPlannerPlanIdBucketsRoute,
  getPlannerPlansPlannerPlanIdDetailsRoute,
  getPlannerPlansPlannerPlanIdRoute,
  getPlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  getPlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  getPlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute,
  getPlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  getPlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute,
  getPlannerPlansPlannerPlanIdTasksRoute,
  getPlannerPlansRoute,
  patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute,
  patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  patchPlannerPlansPlannerPlanIdDetailsRoute,
  patchPlannerPlansPlannerPlanIdRoute,
  patchPlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  patchPlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  patchPlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute,
  patchPlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  patchPlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute,
  postPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute,
  postPlannerPlansPlannerPlanIdBucketsRoute,
  postPlannerPlansPlannerPlanIdTasksRoute,
  postPlannerPlansRoute,
} from '../routes'

const app = new OpenAPIHono()

export const plannerPlannerPlanHandler = app
  .openapi(getPlannerPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlannerPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerPlansPlannerPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerPlansPlannerPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlannerPlansPlannerPlanIdBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deletePlannerPlansPlannerPlanIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerPlansPlannerPlanIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlannerPlansPlannerPlanIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
