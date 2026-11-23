import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmLimits202609AssociationsLabelsRoute,
  getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdRoute,
  getCrmLimits202609AssociationsRecordsFromObjectTypeIdToRoute,
  getCrmLimits202609AssociationsRecordsFromRoute,
  getCrmLimits202609CalculatedPropertiesRoute,
  getCrmLimits202609CustomObjectTypesRoute,
  getCrmLimits202609CustomPropertiesRoute,
  getCrmLimits202609PipelinesRoute,
  getCrmLimits202609RecordsRoute,
} from './routes'
import {
  getCrmLimits202609AssociationsLabelsRouteHandler,
  getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdRouteHandler,
  getCrmLimits202609AssociationsRecordsFromObjectTypeIdToRouteHandler,
  getCrmLimits202609AssociationsRecordsFromRouteHandler,
  getCrmLimits202609CalculatedPropertiesRouteHandler,
  getCrmLimits202609CustomObjectTypesRouteHandler,
  getCrmLimits202609CustomPropertiesRouteHandler,
  getCrmLimits202609PipelinesRouteHandler,
  getCrmLimits202609RecordsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCrmLimits202609AssociationsLabelsRoute,
    getCrmLimits202609AssociationsLabelsRouteHandler,
  )
  .openapi(
    getCrmLimits202609AssociationsRecordsFromRoute,
    getCrmLimits202609AssociationsRecordsFromRouteHandler,
  )
  .openapi(
    getCrmLimits202609AssociationsRecordsFromObjectTypeIdToRoute,
    getCrmLimits202609AssociationsRecordsFromObjectTypeIdToRouteHandler,
  )
  .openapi(
    getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdRoute,
    getCrmLimits202609AssociationsRecordsFromObjectTypeIdToObjectTypeIdRouteHandler,
  )
  .openapi(
    getCrmLimits202609CalculatedPropertiesRoute,
    getCrmLimits202609CalculatedPropertiesRouteHandler,
  )
  .openapi(
    getCrmLimits202609CustomObjectTypesRoute,
    getCrmLimits202609CustomObjectTypesRouteHandler,
  )
  .openapi(getCrmLimits202609CustomPropertiesRoute, getCrmLimits202609CustomPropertiesRouteHandler)
  .openapi(getCrmLimits202609PipelinesRoute, getCrmLimits202609PipelinesRouteHandler)
  .openapi(getCrmLimits202609RecordsRoute, getCrmLimits202609RecordsRouteHandler)

export default app
