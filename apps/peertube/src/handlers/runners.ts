import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1RunnersRunnerIdRoute,
  getApiV1RunnersRoute,
  postApiV1RunnersRegisterRoute,
  postApiV1RunnersUnregisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const runnersHandler = app
  .openapi(postApiV1RunnersRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RunnersUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1RunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
