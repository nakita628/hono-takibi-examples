import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConsumersGroupidInstancesNameRoute,
  deleteConsumersGroupidInstancesNameSubscriptionRoute,
  getConsumersGroupidInstancesNameRecordsRoute,
  getConsumersGroupidInstancesNameSubscriptionRoute,
  postConsumersGroupidInstancesNameAssignmentsRoute,
  postConsumersGroupidInstancesNameOffsetsRoute,
  postConsumersGroupidInstancesNamePositionsBeginningRoute,
  postConsumersGroupidInstancesNamePositionsEndRoute,
  postConsumersGroupidInstancesNamePositionsRoute,
  postConsumersGroupidInstancesNameSubscriptionRoute,
  postConsumersGroupidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consumersHandler = app
  .openapi(postConsumersGroupidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersGroupidInstancesNamePositionsBeginningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersGroupidInstancesNamePositionsEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumersGroupidInstancesNameSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersGroupidInstancesNameSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConsumersGroupidInstancesNameSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersGroupidInstancesNamePositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersGroupidInstancesNameAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumersGroupidInstancesNameRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConsumersGroupidInstancesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersGroupidInstancesNameOffsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
