import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BrokersBrokerIdRoute,
  deleteV1BrokersBrokerIdUsersUsernameRoute,
  deleteV1TagsResourceArnTagKeysRoute,
  getV1BrokerEngineTypesRoute,
  getV1BrokerInstanceOptionsRoute,
  getV1BrokersBrokerIdRoute,
  getV1BrokersBrokerIdUsersRoute,
  getV1BrokersBrokerIdUsersUsernameRoute,
  getV1BrokersRoute,
  getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionRoute,
  getV1ConfigurationsConfigurationIdRevisionsRoute,
  getV1ConfigurationsConfigurationIdRoute,
  getV1ConfigurationsRoute,
  getV1TagsResourceArnRoute,
  postV1BrokersBrokerIdPromoteRoute,
  postV1BrokersBrokerIdRebootRoute,
  postV1BrokersBrokerIdUsersUsernameRoute,
  postV1BrokersRoute,
  postV1ConfigurationsRoute,
  postV1TagsResourceArnRoute,
  putV1BrokersBrokerIdRoute,
  putV1BrokersBrokerIdUsersUsernameRoute,
  putV1ConfigurationsConfigurationIdRoute,
} from './routes'
import {
  deleteV1BrokersBrokerIdRouteHandler,
  deleteV1BrokersBrokerIdUsersUsernameRouteHandler,
  deleteV1TagsResourceArnTagKeysRouteHandler,
  getV1BrokerEngineTypesRouteHandler,
  getV1BrokerInstanceOptionsRouteHandler,
  getV1BrokersBrokerIdRouteHandler,
  getV1BrokersBrokerIdUsersRouteHandler,
  getV1BrokersBrokerIdUsersUsernameRouteHandler,
  getV1BrokersRouteHandler,
  getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionRouteHandler,
  getV1ConfigurationsConfigurationIdRevisionsRouteHandler,
  getV1ConfigurationsConfigurationIdRouteHandler,
  getV1ConfigurationsRouteHandler,
  getV1TagsResourceArnRouteHandler,
  postV1BrokersBrokerIdPromoteRouteHandler,
  postV1BrokersBrokerIdRebootRouteHandler,
  postV1BrokersBrokerIdUsersUsernameRouteHandler,
  postV1BrokersRouteHandler,
  postV1ConfigurationsRouteHandler,
  postV1TagsResourceArnRouteHandler,
  putV1BrokersBrokerIdRouteHandler,
  putV1BrokersBrokerIdUsersUsernameRouteHandler,
  putV1ConfigurationsConfigurationIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1BrokersRoute, postV1BrokersRouteHandler)
  .openapi(getV1BrokersRoute, getV1BrokersRouteHandler)
  .openapi(postV1ConfigurationsRoute, postV1ConfigurationsRouteHandler)
  .openapi(getV1ConfigurationsRoute, getV1ConfigurationsRouteHandler)
  .openapi(postV1TagsResourceArnRoute, postV1TagsResourceArnRouteHandler)
  .openapi(getV1TagsResourceArnRoute, getV1TagsResourceArnRouteHandler)
  .openapi(postV1BrokersBrokerIdUsersUsernameRoute, postV1BrokersBrokerIdUsersUsernameRouteHandler)
  .openapi(
    deleteV1BrokersBrokerIdUsersUsernameRoute,
    deleteV1BrokersBrokerIdUsersUsernameRouteHandler,
  )
  .openapi(getV1BrokersBrokerIdUsersUsernameRoute, getV1BrokersBrokerIdUsersUsernameRouteHandler)
  .openapi(putV1BrokersBrokerIdUsersUsernameRoute, putV1BrokersBrokerIdUsersUsernameRouteHandler)
  .openapi(deleteV1BrokersBrokerIdRoute, deleteV1BrokersBrokerIdRouteHandler)
  .openapi(getV1BrokersBrokerIdRoute, getV1BrokersBrokerIdRouteHandler)
  .openapi(putV1BrokersBrokerIdRoute, putV1BrokersBrokerIdRouteHandler)
  .openapi(deleteV1TagsResourceArnTagKeysRoute, deleteV1TagsResourceArnTagKeysRouteHandler)
  .openapi(getV1BrokerEngineTypesRoute, getV1BrokerEngineTypesRouteHandler)
  .openapi(getV1BrokerInstanceOptionsRoute, getV1BrokerInstanceOptionsRouteHandler)
  .openapi(getV1ConfigurationsConfigurationIdRoute, getV1ConfigurationsConfigurationIdRouteHandler)
  .openapi(putV1ConfigurationsConfigurationIdRoute, putV1ConfigurationsConfigurationIdRouteHandler)
  .openapi(
    getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionRoute,
    getV1ConfigurationsConfigurationIdRevisionsConfigurationRevisionRouteHandler,
  )
  .openapi(
    getV1ConfigurationsConfigurationIdRevisionsRoute,
    getV1ConfigurationsConfigurationIdRevisionsRouteHandler,
  )
  .openapi(getV1BrokersBrokerIdUsersRoute, getV1BrokersBrokerIdUsersRouteHandler)
  .openapi(postV1BrokersBrokerIdPromoteRoute, postV1BrokersBrokerIdPromoteRouteHandler)
  .openapi(postV1BrokersBrokerIdRebootRoute, postV1BrokersBrokerIdRebootRouteHandler)

export default app
