import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postConsumersGroupidInstancesNamePositionsBeginningRoute,
  postConsumersGroupidInstancesNamePositionsEndRoute,
  postConsumersGroupidInstancesNamePositionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const seekHandler = app
  .openapi(postConsumersGroupidInstancesNamePositionsBeginningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersGroupidInstancesNamePositionsEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersGroupidInstancesNamePositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
