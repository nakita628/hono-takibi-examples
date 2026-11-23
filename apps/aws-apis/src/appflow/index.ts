import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  getTagsResourceArnRoute,
  postCreateConnectorProfileRoute,
  postCreateFlowRoute,
  postDeleteConnectorProfileRoute,
  postDeleteFlowRoute,
  postDescribeConnectorEntityRoute,
  postDescribeConnectorProfilesRoute,
  postDescribeConnectorRoute,
  postDescribeConnectorsRoute,
  postDescribeFlowExecutionRecordsRoute,
  postDescribeFlowRoute,
  postListConnectorEntitiesRoute,
  postListConnectorsRoute,
  postListFlowsRoute,
  postRegisterConnectorRoute,
  postStartFlowRoute,
  postStopFlowRoute,
  postTagsResourceArnRoute,
  postUnregisterConnectorRoute,
  postUpdateConnectorProfileRoute,
  postUpdateConnectorRegistrationRoute,
  postUpdateFlowRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  getTagsResourceArnRouteHandler,
  postCreateConnectorProfileRouteHandler,
  postCreateFlowRouteHandler,
  postDeleteConnectorProfileRouteHandler,
  postDeleteFlowRouteHandler,
  postDescribeConnectorEntityRouteHandler,
  postDescribeConnectorProfilesRouteHandler,
  postDescribeConnectorRouteHandler,
  postDescribeConnectorsRouteHandler,
  postDescribeFlowExecutionRecordsRouteHandler,
  postDescribeFlowRouteHandler,
  postListConnectorEntitiesRouteHandler,
  postListConnectorsRouteHandler,
  postListFlowsRouteHandler,
  postRegisterConnectorRouteHandler,
  postStartFlowRouteHandler,
  postStopFlowRouteHandler,
  postTagsResourceArnRouteHandler,
  postUnregisterConnectorRouteHandler,
  postUpdateConnectorProfileRouteHandler,
  postUpdateConnectorRegistrationRouteHandler,
  postUpdateFlowRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCreateConnectorProfileRoute, postCreateConnectorProfileRouteHandler)
  .openapi(postCreateFlowRoute, postCreateFlowRouteHandler)
  .openapi(postDeleteConnectorProfileRoute, postDeleteConnectorProfileRouteHandler)
  .openapi(postDeleteFlowRoute, postDeleteFlowRouteHandler)
  .openapi(postDescribeConnectorRoute, postDescribeConnectorRouteHandler)
  .openapi(postDescribeConnectorEntityRoute, postDescribeConnectorEntityRouteHandler)
  .openapi(postDescribeConnectorProfilesRoute, postDescribeConnectorProfilesRouteHandler)
  .openapi(postDescribeConnectorsRoute, postDescribeConnectorsRouteHandler)
  .openapi(postDescribeFlowRoute, postDescribeFlowRouteHandler)
  .openapi(postDescribeFlowExecutionRecordsRoute, postDescribeFlowExecutionRecordsRouteHandler)
  .openapi(postListConnectorEntitiesRoute, postListConnectorEntitiesRouteHandler)
  .openapi(postListConnectorsRoute, postListConnectorsRouteHandler)
  .openapi(postListFlowsRoute, postListFlowsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postRegisterConnectorRoute, postRegisterConnectorRouteHandler)
  .openapi(postStartFlowRoute, postStartFlowRouteHandler)
  .openapi(postStopFlowRoute, postStopFlowRouteHandler)
  .openapi(postUnregisterConnectorRoute, postUnregisterConnectorRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(postUpdateConnectorProfileRoute, postUpdateConnectorProfileRouteHandler)
  .openapi(postUpdateConnectorRegistrationRoute, postUpdateConnectorRegistrationRouteHandler)
  .openapi(postUpdateFlowRoute, postUpdateFlowRouteHandler)

export default app
