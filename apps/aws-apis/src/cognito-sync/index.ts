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
} from './routes'
import {
  deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRouteHandler,
  deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRouteHandler,
  getIdentitypoolsIdentityPoolIdConfigurationRouteHandler,
  getIdentitypoolsIdentityPoolIdEventsRouteHandler,
  getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsRouteHandler,
  getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRouteHandler,
  getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsRouteHandler,
  getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdRouteHandler,
  getIdentitypoolsIdentityPoolIdRouteHandler,
  getIdentitypoolsRouteHandler,
  postIdentitypoolsIdentityPoolIdBulkpublishRouteHandler,
  postIdentitypoolsIdentityPoolIdConfigurationRouteHandler,
  postIdentitypoolsIdentityPoolIdEventsRouteHandler,
  postIdentitypoolsIdentityPoolIdGetBulkPublishDetailsRouteHandler,
  postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRouteHandler,
  postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRouteHandler,
  postIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postIdentitypoolsIdentityPoolIdBulkpublishRoute,
    postIdentitypoolsIdentityPoolIdBulkpublishRouteHandler,
  )
  .openapi(
    deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute,
    deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRouteHandler,
  )
  .openapi(
    getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute,
    getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRouteHandler,
  )
  .openapi(
    postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRoute,
    postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRouteHandler,
  )
  .openapi(getIdentitypoolsIdentityPoolIdRoute, getIdentitypoolsIdentityPoolIdRouteHandler)
  .openapi(
    getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdRoute,
    getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdRouteHandler,
  )
  .openapi(
    postIdentitypoolsIdentityPoolIdGetBulkPublishDetailsRoute,
    postIdentitypoolsIdentityPoolIdGetBulkPublishDetailsRouteHandler,
  )
  .openapi(
    getIdentitypoolsIdentityPoolIdEventsRoute,
    getIdentitypoolsIdentityPoolIdEventsRouteHandler,
  )
  .openapi(
    postIdentitypoolsIdentityPoolIdEventsRoute,
    postIdentitypoolsIdentityPoolIdEventsRouteHandler,
  )
  .openapi(
    getIdentitypoolsIdentityPoolIdConfigurationRoute,
    getIdentitypoolsIdentityPoolIdConfigurationRouteHandler,
  )
  .openapi(
    postIdentitypoolsIdentityPoolIdConfigurationRoute,
    postIdentitypoolsIdentityPoolIdConfigurationRouteHandler,
  )
  .openapi(
    getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsRoute,
    getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsRouteHandler,
  )
  .openapi(getIdentitypoolsRoute, getIdentitypoolsRouteHandler)
  .openapi(
    getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsRoute,
    getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecordsRouteHandler,
  )
  .openapi(
    postIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceRoute,
    postIdentitypoolsIdentityPoolIdIdentityIdentityIdDeviceRouteHandler,
  )
  .openapi(
    postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRoute,
    postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRouteHandler,
  )
  .openapi(
    deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRoute,
    deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceIdRouteHandler,
  )

export default app
