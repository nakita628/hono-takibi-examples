import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdRoute,
  deleteSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersCrossTenantMigrationTaskIdRoute,
  deleteSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameRoute,
  deleteSolutionsMigrationsRoute,
  getSolutionsMigrationsCrossTenantMigrationJobsCountRoute,
  getSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdRoute,
  getSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersCountRoute,
  getSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersCrossTenantMigrationTaskIdRoute,
  getSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersRoute,
  getSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameRoute,
  getSolutionsMigrationsCrossTenantMigrationJobsRoute,
  getSolutionsMigrationsRoute,
  patchSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdRoute,
  patchSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersCrossTenantMigrationTaskIdRoute,
  patchSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameRoute,
  patchSolutionsMigrationsRoute,
  postSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdCancelRoute,
  postSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdMigrateRoute,
  postSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersCrossTenantMigrationTaskIdCancelRoute,
  postSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersRoute,
  postSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdValidateRoute,
  postSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameCancelRoute,
  postSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameMigrateRoute,
  postSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameValidateRoute,
  postSolutionsMigrationsCrossTenantMigrationJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const solutionsMigrationsRootHandler = app
  .openapi(getSolutionsMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsMigrationsCrossTenantMigrationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsMigrationsCrossTenantMigrationJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdMigrateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersCrossTenantMigrationTaskIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersCrossTenantMigrationTaskIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersCrossTenantMigrationTaskIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersCrossTenantMigrationTaskIdCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSolutionsMigrationsCrossTenantMigrationJobsCrossTenantMigrationJobIdUsersCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameMigrateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsMigrationsCrossTenantMigrationJobsDisplayNameDisplayNameValidateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSolutionsMigrationsCrossTenantMigrationJobsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
