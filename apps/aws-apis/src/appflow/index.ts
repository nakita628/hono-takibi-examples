import { OpenAPIHono } from '@hono/zod-openapi'
import {
  createConnectorProfileHandler,
  createFlowHandler,
  deleteConnectorProfileHandler,
  deleteFlowHandler,
  describeConnectorEntityHandler,
  describeConnectorHandler,
  describeConnectorProfilesHandler,
  describeConnectorsHandler,
  describeFlowExecutionRecordsHandler,
  describeFlowHandler,
  listConnectorEntitiesHandler,
  listConnectorsHandler,
  listFlowsHandler,
  registerConnectorHandler,
  startFlowHandler,
  stopFlowHandler,
  tagsHandler,
  unregisterConnectorHandler,
  updateConnectorProfileHandler,
  updateConnectorRegistrationHandler,
  updateFlowHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', createConnectorProfileHandler)
  .route('/', createFlowHandler)
  .route('/', deleteConnectorProfileHandler)
  .route('/', deleteFlowHandler)
  .route('/', describeConnectorHandler)
  .route('/', describeConnectorEntityHandler)
  .route('/', describeConnectorProfilesHandler)
  .route('/', describeConnectorsHandler)
  .route('/', describeFlowHandler)
  .route('/', describeFlowExecutionRecordsHandler)
  .route('/', listConnectorEntitiesHandler)
  .route('/', listConnectorsHandler)
  .route('/', listFlowsHandler)
  .route('/', tagsHandler)
  .route('/', registerConnectorHandler)
  .route('/', startFlowHandler)
  .route('/', stopFlowHandler)
  .route('/', unregisterConnectorHandler)
  .route('/', updateConnectorProfileHandler)
  .route('/', updateConnectorRegistrationHandler)
  .route('/', updateFlowHandler)

export default app
