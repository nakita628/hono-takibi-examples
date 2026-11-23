import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOpenapiJsonRoute,
  getServiceCredentialsIdRoute,
  getServiceCredentialsRoute,
  getServiceCredentialTypesIdRoute,
  getServiceCredentialTypesRoute,
  getServiceInstancesIdRoute,
  getServiceInstancesRoute,
  getServiceInventoriesIdRoute,
  getServiceInventoriesIdTagsRoute,
  getServiceInventoriesRoute,
  getServiceOfferingNodesIdRoute,
  getServiceOfferingNodesRoute,
  getServiceOfferingsIdRoute,
  getServiceOfferingsIdServiceInstancesRoute,
  getServiceOfferingsIdServiceOfferingNodesRoute,
  getServiceOfferingsIdServicePlansRoute,
  getServiceOfferingsRoute,
  getServicePlansIdRoute,
  getServicePlansRoute,
  getSourcesIdRoute,
  getSourcesIdServiceInstancesRoute,
  getSourcesIdServiceInventoriesRoute,
  getSourcesIdServiceOfferingNodesRoute,
  getSourcesIdServiceOfferingsRoute,
  getSourcesIdServicePlansRoute,
  getSourcesIdTasksRoute,
  getSourcesRoute,
  getTagsRoute,
  getTasksIdRoute,
  getTasksRoute,
  patchSourcesIdIncrementalRefreshRoute,
  patchSourcesIdRefreshRoute,
  patchTasksIdRoute,
  postGraphqlRoute,
  postServiceInventoriesIdTagRoute,
  postServiceInventoriesIdUntagRoute,
  postServiceOfferingsIdAppliedInventoriesTagsRoute,
  postServiceOfferingsIdOrderRoute,
} from './routes'
import {
  getOpenapiJsonRouteHandler,
  getServiceCredentialsIdRouteHandler,
  getServiceCredentialsRouteHandler,
  getServiceCredentialTypesIdRouteHandler,
  getServiceCredentialTypesRouteHandler,
  getServiceInstancesIdRouteHandler,
  getServiceInstancesRouteHandler,
  getServiceInventoriesIdRouteHandler,
  getServiceInventoriesIdTagsRouteHandler,
  getServiceInventoriesRouteHandler,
  getServiceOfferingNodesIdRouteHandler,
  getServiceOfferingNodesRouteHandler,
  getServiceOfferingsIdRouteHandler,
  getServiceOfferingsIdServiceInstancesRouteHandler,
  getServiceOfferingsIdServiceOfferingNodesRouteHandler,
  getServiceOfferingsIdServicePlansRouteHandler,
  getServiceOfferingsRouteHandler,
  getServicePlansIdRouteHandler,
  getServicePlansRouteHandler,
  getSourcesIdRouteHandler,
  getSourcesIdServiceInstancesRouteHandler,
  getSourcesIdServiceInventoriesRouteHandler,
  getSourcesIdServiceOfferingNodesRouteHandler,
  getSourcesIdServiceOfferingsRouteHandler,
  getSourcesIdServicePlansRouteHandler,
  getSourcesIdTasksRouteHandler,
  getSourcesRouteHandler,
  getTagsRouteHandler,
  getTasksIdRouteHandler,
  getTasksRouteHandler,
  patchSourcesIdIncrementalRefreshRouteHandler,
  patchSourcesIdRefreshRouteHandler,
  patchTasksIdRouteHandler,
  postGraphqlRouteHandler,
  postServiceInventoriesIdTagRouteHandler,
  postServiceInventoriesIdUntagRouteHandler,
  postServiceOfferingsIdAppliedInventoriesTagsRouteHandler,
  postServiceOfferingsIdOrderRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGraphqlRoute, postGraphqlRouteHandler)
  .openapi(getOpenapiJsonRoute, getOpenapiJsonRouteHandler)
  .openapi(getServiceCredentialTypesRoute, getServiceCredentialTypesRouteHandler)
  .openapi(getServiceCredentialTypesIdRoute, getServiceCredentialTypesIdRouteHandler)
  .openapi(getServiceCredentialsRoute, getServiceCredentialsRouteHandler)
  .openapi(getServiceCredentialsIdRoute, getServiceCredentialsIdRouteHandler)
  .openapi(getServiceInstancesRoute, getServiceInstancesRouteHandler)
  .openapi(getServiceInstancesIdRoute, getServiceInstancesIdRouteHandler)
  .openapi(getServiceInventoriesRoute, getServiceInventoriesRouteHandler)
  .openapi(getServiceInventoriesIdRoute, getServiceInventoriesIdRouteHandler)
  .openapi(postServiceInventoriesIdTagRoute, postServiceInventoriesIdTagRouteHandler)
  .openapi(getServiceInventoriesIdTagsRoute, getServiceInventoriesIdTagsRouteHandler)
  .openapi(postServiceInventoriesIdUntagRoute, postServiceInventoriesIdUntagRouteHandler)
  .openapi(getServiceOfferingNodesRoute, getServiceOfferingNodesRouteHandler)
  .openapi(getServiceOfferingNodesIdRoute, getServiceOfferingNodesIdRouteHandler)
  .openapi(getServiceOfferingsRoute, getServiceOfferingsRouteHandler)
  .openapi(getServiceOfferingsIdRoute, getServiceOfferingsIdRouteHandler)
  .openapi(
    postServiceOfferingsIdAppliedInventoriesTagsRoute,
    postServiceOfferingsIdAppliedInventoriesTagsRouteHandler,
  )
  .openapi(postServiceOfferingsIdOrderRoute, postServiceOfferingsIdOrderRouteHandler)
  .openapi(
    getServiceOfferingsIdServiceInstancesRoute,
    getServiceOfferingsIdServiceInstancesRouteHandler,
  )
  .openapi(
    getServiceOfferingsIdServiceOfferingNodesRoute,
    getServiceOfferingsIdServiceOfferingNodesRouteHandler,
  )
  .openapi(getServiceOfferingsIdServicePlansRoute, getServiceOfferingsIdServicePlansRouteHandler)
  .openapi(getServicePlansRoute, getServicePlansRouteHandler)
  .openapi(getServicePlansIdRoute, getServicePlansIdRouteHandler)
  .openapi(getSourcesRoute, getSourcesRouteHandler)
  .openapi(getSourcesIdRoute, getSourcesIdRouteHandler)
  .openapi(patchSourcesIdIncrementalRefreshRoute, patchSourcesIdIncrementalRefreshRouteHandler)
  .openapi(patchSourcesIdRefreshRoute, patchSourcesIdRefreshRouteHandler)
  .openapi(getSourcesIdServiceInstancesRoute, getSourcesIdServiceInstancesRouteHandler)
  .openapi(getSourcesIdServiceInventoriesRoute, getSourcesIdServiceInventoriesRouteHandler)
  .openapi(getSourcesIdServiceOfferingNodesRoute, getSourcesIdServiceOfferingNodesRouteHandler)
  .openapi(getSourcesIdServiceOfferingsRoute, getSourcesIdServiceOfferingsRouteHandler)
  .openapi(getSourcesIdServicePlansRoute, getSourcesIdServicePlansRouteHandler)
  .openapi(getSourcesIdTasksRoute, getSourcesIdTasksRouteHandler)
  .openapi(getTagsRoute, getTagsRouteHandler)
  .openapi(getTasksRoute, getTasksRouteHandler)
  .openapi(getTasksIdRoute, getTasksIdRouteHandler)
  .openapi(patchTasksIdRoute, patchTasksIdRouteHandler)

export default app
