import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConsumersConsumerUsernameOrIdRoute,
  getConsumersConsumerUsernameOrIdRoute,
  getConsumersRoute,
  patchConsumersConsumerUsernameOrIdRoute,
  postConsumersRoute,
  putConsumersConsumerUsernameOrIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consumersHandler = app
  .openapi(getConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConsumersConsumerUsernameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumersConsumerUsernameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConsumersConsumerUsernameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumersConsumerUsernameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
