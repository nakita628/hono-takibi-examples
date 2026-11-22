import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentRoute,
  deleteApiAdminProjectsProjectIdFeaturesChildDependenciesRoute,
  getApiAdminProjectsProjectIdDependenciesRoute,
  getApiAdminProjectsProjectIdFeaturesChildParentsRoute,
  getApiAdminProjectsProjectIdFeaturesParentParentVariantsRoute,
  postApiAdminProjectsProjectIdFeaturesChildDependenciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dependenciesHandler = app
  .openapi(postApiAdminProjectsProjectIdFeaturesChildDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFeaturesChildDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFeaturesChildParentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFeaturesParentParentVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
