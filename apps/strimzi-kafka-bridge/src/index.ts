import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConsumersGroupidInstancesNameRoute,
  deleteConsumersGroupidInstancesNameSubscriptionRoute,
  getConsumersGroupidInstancesNameRecordsRoute,
  getConsumersGroupidInstancesNameSubscriptionRoute,
  getHealthyRoute,
  getMetricsRoute,
  getOpenapiRoute,
  getOpenapiV3Route,
  getReadyRoute,
  getRoute,
  getTopicsRoute,
  getTopicsTopicnamePartitionsPartitionidOffsetsRoute,
  getTopicsTopicnamePartitionsPartitionidRoute,
  getTopicsTopicnamePartitionsRoute,
  getTopicsTopicnameRoute,
  postAdminTopicsRoute,
  postConsumersGroupidInstancesNameAssignmentsRoute,
  postConsumersGroupidInstancesNameOffsetsRoute,
  postConsumersGroupidInstancesNamePositionsBeginningRoute,
  postConsumersGroupidInstancesNamePositionsEndRoute,
  postConsumersGroupidInstancesNamePositionsRoute,
  postConsumersGroupidInstancesNameSubscriptionRoute,
  postConsumersGroupidRoute,
  postTopicsTopicnamePartitionsPartitionidRoute,
  postTopicsTopicnameRoute,
} from './routes'
import {
  deleteConsumersGroupidInstancesNameRouteHandler,
  deleteConsumersGroupidInstancesNameSubscriptionRouteHandler,
  getConsumersGroupidInstancesNameRecordsRouteHandler,
  getConsumersGroupidInstancesNameSubscriptionRouteHandler,
  getHealthyRouteHandler,
  getMetricsRouteHandler,
  getOpenapiRouteHandler,
  getOpenapiV3RouteHandler,
  getReadyRouteHandler,
  getRouteHandler,
  getTopicsRouteHandler,
  getTopicsTopicnamePartitionsPartitionidOffsetsRouteHandler,
  getTopicsTopicnamePartitionsPartitionidRouteHandler,
  getTopicsTopicnamePartitionsRouteHandler,
  getTopicsTopicnameRouteHandler,
  postAdminTopicsRouteHandler,
  postConsumersGroupidInstancesNameAssignmentsRouteHandler,
  postConsumersGroupidInstancesNameOffsetsRouteHandler,
  postConsumersGroupidInstancesNamePositionsBeginningRouteHandler,
  postConsumersGroupidInstancesNamePositionsEndRouteHandler,
  postConsumersGroupidInstancesNamePositionsRouteHandler,
  postConsumersGroupidInstancesNameSubscriptionRouteHandler,
  postConsumersGroupidRouteHandler,
  postTopicsTopicnamePartitionsPartitionidRouteHandler,
  postTopicsTopicnameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postConsumersGroupidRoute, postConsumersGroupidRouteHandler)
  .openapi(
    postConsumersGroupidInstancesNamePositionsBeginningRoute,
    postConsumersGroupidInstancesNamePositionsBeginningRouteHandler,
  )
  .openapi(
    postConsumersGroupidInstancesNamePositionsEndRoute,
    postConsumersGroupidInstancesNamePositionsEndRouteHandler,
  )
  .openapi(
    getConsumersGroupidInstancesNameSubscriptionRoute,
    getConsumersGroupidInstancesNameSubscriptionRouteHandler,
  )
  .openapi(
    postConsumersGroupidInstancesNameSubscriptionRoute,
    postConsumersGroupidInstancesNameSubscriptionRouteHandler,
  )
  .openapi(
    deleteConsumersGroupidInstancesNameSubscriptionRoute,
    deleteConsumersGroupidInstancesNameSubscriptionRouteHandler,
  )
  .openapi(
    postConsumersGroupidInstancesNamePositionsRoute,
    postConsumersGroupidInstancesNamePositionsRouteHandler,
  )
  .openapi(
    postConsumersGroupidInstancesNameAssignmentsRoute,
    postConsumersGroupidInstancesNameAssignmentsRouteHandler,
  )
  .openapi(getTopicsRoute, getTopicsRouteHandler)
  .openapi(getTopicsTopicnameRoute, getTopicsTopicnameRouteHandler)
  .openapi(postTopicsTopicnameRoute, postTopicsTopicnameRouteHandler)
  .openapi(postAdminTopicsRoute, postAdminTopicsRouteHandler)
  .openapi(
    getConsumersGroupidInstancesNameRecordsRoute,
    getConsumersGroupidInstancesNameRecordsRouteHandler,
  )
  .openapi(getTopicsTopicnamePartitionsRoute, getTopicsTopicnamePartitionsRouteHandler)
  .openapi(
    getTopicsTopicnamePartitionsPartitionidRoute,
    getTopicsTopicnamePartitionsPartitionidRouteHandler,
  )
  .openapi(
    postTopicsTopicnamePartitionsPartitionidRoute,
    postTopicsTopicnamePartitionsPartitionidRouteHandler,
  )
  .openapi(
    getTopicsTopicnamePartitionsPartitionidOffsetsRoute,
    getTopicsTopicnamePartitionsPartitionidOffsetsRouteHandler,
  )
  .openapi(
    deleteConsumersGroupidInstancesNameRoute,
    deleteConsumersGroupidInstancesNameRouteHandler,
  )
  .openapi(
    postConsumersGroupidInstancesNameOffsetsRoute,
    postConsumersGroupidInstancesNameOffsetsRouteHandler,
  )
  .openapi(getHealthyRoute, getHealthyRouteHandler)
  .openapi(getReadyRoute, getReadyRouteHandler)
  .openapi(getOpenapiRoute, getOpenapiRouteHandler)
  .openapi(getOpenapiV3Route, getOpenapiV3RouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(getRoute, getRouteHandler)

export default app
