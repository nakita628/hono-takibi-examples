import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdDetailsRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  deleteUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute,
  deleteUsersUserIdPlannerRoute,
  deleteUsersUserIdPlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  deleteUsersUserIdPlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  deleteUsersUserIdPlannerTasksPlannerTaskIdDetailsRoute,
  deleteUsersUserIdPlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  deleteUsersUserIdPlannerTasksPlannerTaskIdRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdBucketsRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdDetailsRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute,
  getUsersUserIdPlannerPlansPlannerPlanIdTasksRoute,
  getUsersUserIdPlannerPlansRoute,
  getUsersUserIdPlannerRoute,
  getUsersUserIdPlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  getUsersUserIdPlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  getUsersUserIdPlannerTasksPlannerTaskIdDetailsRoute,
  getUsersUserIdPlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  getUsersUserIdPlannerTasksPlannerTaskIdRoute,
  getUsersUserIdPlannerTasksRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdDetailsRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  patchUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute,
  patchUsersUserIdPlannerRoute,
  patchUsersUserIdPlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
  patchUsersUserIdPlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute,
  patchUsersUserIdPlannerTasksPlannerTaskIdDetailsRoute,
  patchUsersUserIdPlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute,
  patchUsersUserIdPlannerTasksPlannerTaskIdRoute,
  postUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute,
  postUsersUserIdPlannerPlansPlannerPlanIdBucketsRoute,
  postUsersUserIdPlannerPlansPlannerPlanIdTasksRoute,
  postUsersUserIdPlannerPlansRoute,
  postUsersUserIdPlannerTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersPlannerUserHandler = app
  .openapi(deleteUsersUserIdPlannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPlannerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlannerPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlannerPlansPlannerPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansPlannerPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPlannerPlansPlannerPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansPlannerPlanIdBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlannerPlansPlannerPlanIdBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdDetailsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdPlannerPlansPlannerPlanIdBucketsPlannerBucketIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteUsersUserIdPlannerPlansPlannerPlanIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansPlannerPlanIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPlannerPlansPlannerPlanIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansPlannerPlanIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlannerPlansPlannerPlanIdTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdAssignedToTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdBucketTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchUsersUserIdPlannerPlansPlannerPlanIdTasksPlannerTaskIdProgressTaskBoardFormatRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getUsersUserIdPlannerTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlannerTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlannerTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPlannerTasksPlannerTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPlannerTasksPlannerTaskIdAssignedToTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPlannerTasksPlannerTaskIdBucketTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlannerTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPlannerTasksPlannerTaskIdDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdPlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdPlannerTasksPlannerTaskIdProgressTaskBoardFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
