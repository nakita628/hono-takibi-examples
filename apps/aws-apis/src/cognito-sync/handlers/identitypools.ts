import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute,
  deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRoute,
  getIdentitypoolsIdentityPoolIdConfigurationRoute,
  getIdentitypoolsIdentityPoolIdEventsRoute,
  getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsRoute,
  getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute,
  getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsRoute,
  getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdRoute,
  getIdentitypoolsIdentityPoolIdRoute,
  getIdentitypoolsRoute,
  postIdentitypoolsIdentityPoolIdBulkpublishRoute,
  postIdentitypoolsIdentityPoolIdConfigurationRoute,
  postIdentitypoolsIdentityPoolIdEventsRoute,
  postIdentitypoolsIdentityPoolIdGetBulkPublishDetailsRoute,
  postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute,
  postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRoute,
  postIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identitypoolsHandler = app
  .openapi(postIdentitypoolsIdentityPoolIdBulkpublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentitypoolsIdentityPoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentitypoolsIdentityPoolIdGetBulkPublishDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentitypoolsIdentityPoolIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentitypoolsIdentityPoolIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentitypoolsIdentityPoolIdConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentitypoolsIdentityPoolIdConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentitypoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
