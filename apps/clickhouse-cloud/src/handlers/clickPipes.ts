import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute,
  deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRoute,
  getV1OrganizationsOrganizationIdServicesServiceIdClickpipesRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateRoute,
  patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickpipesRoute,
  postV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryRoute,
  putV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clickPipesHandler = app
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickpipesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrganizationsOrganizationIdServicesServiceIdClickpipesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickpipesContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdSettingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1OrganizationsOrganizationIdServicesServiceIdClickpipesSchemaDiscoveryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdScalingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesClickPipeIdStateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesCdcScalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV1OrganizationsOrganizationIdServicesServiceIdClickpipesReversePrivateEndpointsReversePrivateEndpointIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
