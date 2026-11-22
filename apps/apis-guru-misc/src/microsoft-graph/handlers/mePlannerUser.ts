import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute,
  deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  deleteMePlannerPlansPlannerPlanIdDetailsRoute,
  deleteMePlannerPlansPlannerPlanIdRoute,
  deleteMePlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  deleteMePlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  deleteMePlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute,
  deleteMePlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  deleteMePlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute,
  deleteMePlannerRoute,
  deleteMePlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  deleteMePlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  deleteMePlannerTasksPlannerTaskIdDetailsRoute,
  deleteMePlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  deleteMePlannerTasksPlannerTaskIdRoute,
  getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute,
  getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute,
  getMePlannerPlansPlannerPlanIdBucketsRoute,
  getMePlannerPlansPlannerPlanIdDetailsRoute,
  getMePlannerPlansPlannerPlanIdRoute,
  getMePlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  getMePlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  getMePlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute,
  getMePlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  getMePlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute,
  getMePlannerPlansPlannerPlanIdTasksRoute,
  getMePlannerPlansRoute,
  getMePlannerRoute,
  getMePlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  getMePlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  getMePlannerTasksPlannerTaskIdDetailsRoute,
  getMePlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  getMePlannerTasksPlannerTaskIdRoute,
  getMePlannerTasksRoute,
  patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute,
  patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  patchMePlannerPlansPlannerPlanIdDetailsRoute,
  patchMePlannerPlansPlannerPlanIdRoute,
  patchMePlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  patchMePlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  patchMePlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute,
  patchMePlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  patchMePlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute,
  patchMePlannerRoute,
  patchMePlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  patchMePlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  patchMePlannerTasksPlannerTaskIdDetailsRoute,
  patchMePlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  patchMePlannerTasksPlannerTaskIdRoute,
  postMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute,
  postMePlannerPlansPlannerPlanIdBucketsRoute,
  postMePlannerPlansPlannerPlanIdTasksRoute,
  postMePlannerPlansRoute,
  postMePlannerTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mePlannerUserHandler = app
  .openapi(deleteMePlannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePlannerPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePlannerPlansPlannerPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerPlansPlannerPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePlannerPlansPlannerPlanIdBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchMePlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteMePlannerPlansPlannerPlanIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerPlansPlannerPlanIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePlannerPlansPlannerPlanIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMePlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMePlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchMePlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteMePlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePlannerTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePlannerTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePlannerTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMePlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
