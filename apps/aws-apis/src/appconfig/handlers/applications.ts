import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberRoute,
  deleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdRoute,
  deleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberRoute,
  deleteApplicationsApplicationIdEnvironmentsEnvironmentIdRoute,
  deleteApplicationsApplicationIdRoute,
  getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdRoute,
  getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsRoute,
  getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberRoute,
  getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdRoute,
  getApplicationsApplicationIdConfigurationprofilesRoute,
  getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberRoute,
  getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsRoute,
  getApplicationsApplicationIdEnvironmentsEnvironmentIdRoute,
  getApplicationsApplicationIdEnvironmentsRoute,
  getApplicationsApplicationIdRoute,
  getApplicationsRoute,
  patchApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdRoute,
  patchApplicationsApplicationIdEnvironmentsEnvironmentIdRoute,
  patchApplicationsApplicationIdRoute,
  postApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentTypeRoute,
  postApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersionRoute,
  postApplicationsApplicationIdConfigurationprofilesRoute,
  postApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsRoute,
  postApplicationsApplicationIdEnvironmentsRoute,
  postApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(postApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdConfigurationprofilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdConfigurationprofilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsContentTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApplicationsApplicationIdEnvironmentsEnvironmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsVersionNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApplicationsApplicationEnvironmentsEnvironmentConfigurationsConfigurationClientIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsDeploymentNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdEnvironmentsEnvironmentIdDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdHostedconfigurationversionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApplicationsApplicationIdConfigurationprofilesConfigurationProfileIdValidatorsConfigurationVersionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
