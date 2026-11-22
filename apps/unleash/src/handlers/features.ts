import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminFeaturesFeatureNameTagsTypeValueRoute,
  deleteApiAdminProjectsProjectIdFavoritesRoute,
  deleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
  deleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRoute,
  deleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRoute,
  deleteApiAdminProjectsProjectIdFeaturesFeatureNameRoute,
  getApiAdminFeaturesFeatureNameTagsRoute,
  getApiAdminLifecycleCountRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleRoute,
  getApiAdminProjectsProjectIdFeaturesFeatureNameRoute,
  getApiAdminProjectsProjectIdFeaturesRoute,
  patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
  patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
  patchApiAdminProjectsProjectIdFeaturesFeatureNameRoute,
  postApiAdminConstraintsValidateRoute,
  postApiAdminFeaturesFeatureNameTagsRoute,
  postApiAdminFeaturesValidateRoute,
  postApiAdminProjectsProjectIdArchiveRoute,
  postApiAdminProjectsProjectIdArchiveValidateRoute,
  postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffRoute,
  postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnRoute,
  postApiAdminProjectsProjectIdFavoritesRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameCloneRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteRoute,
  postApiAdminProjectsProjectIdFeaturesFeatureNameLinkRoute,
  postApiAdminProjectsProjectIdFeaturesRoute,
  postApiAdminProjectsProjectIdStaleRoute,
  putApiAdminFeaturesFeatureNameTagsRoute,
  putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
  putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
  putApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRoute,
  putApiAdminProjectsProjectIdFeaturesFeatureNameRoute,
  putApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const featuresHandler = app
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminFeaturesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminFeaturesFeatureNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminFeaturesFeatureNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminFeaturesFeatureNameTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminFeaturesFeatureNameTagsTypeValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAdminProjectsProjectIdFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAdminProjectsProjectIdFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFeaturesFeatureNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdStaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdArchiveValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminLifecycleCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminConstraintsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFavoritesRoute, (c) => {
    throw new Error('Not implemented')
  })
