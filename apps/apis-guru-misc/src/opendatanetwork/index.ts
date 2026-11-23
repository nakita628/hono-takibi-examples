import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataV1AvailabilityIndexRoute,
  getDataV1ConstraintVariableRoute,
  getDataV1MapNewRoute,
  getDataV1ValuesRoute,
  getEntityV1RelationRoute,
  getEntityV1Route,
  getSearchV1DatasetRoute,
  getSearchV1QuestionRoute,
  getSuggestV1TypeRoute,
} from './routes'
import {
  getDataV1AvailabilityIndexRouteHandler,
  getDataV1ConstraintVariableRouteHandler,
  getDataV1MapNewRouteHandler,
  getDataV1ValuesRouteHandler,
  getEntityV1RelationRouteHandler,
  getEntityV1RouteHandler,
  getSearchV1DatasetRouteHandler,
  getSearchV1QuestionRouteHandler,
  getSuggestV1TypeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDataV1AvailabilityIndexRoute, getDataV1AvailabilityIndexRouteHandler)
  .openapi(getDataV1ConstraintVariableRoute, getDataV1ConstraintVariableRouteHandler)
  .openapi(getDataV1MapNewRoute, getDataV1MapNewRouteHandler)
  .openapi(getDataV1ValuesRoute, getDataV1ValuesRouteHandler)
  .openapi(getEntityV1Route, getEntityV1RouteHandler)
  .openapi(getEntityV1RelationRoute, getEntityV1RelationRouteHandler)
  .openapi(getSearchV1DatasetRoute, getSearchV1DatasetRouteHandler)
  .openapi(getSearchV1QuestionRoute, getSearchV1QuestionRouteHandler)
  .openapi(getSuggestV1TypeRoute, getSuggestV1TypeRouteHandler)

export default app
