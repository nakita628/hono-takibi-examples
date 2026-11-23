import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsModelsModelIdRoute,
  getConversationsModelsModelIdRoute,
  getConversationsModelsRoute,
  postConversationsModelsRoute,
  putConversationsModelsModelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(getConversationsModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsModelsModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
