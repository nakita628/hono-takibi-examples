import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConversationsAttributesIdOptionsOptionIdRoute,
  deleteConversationsAttributesIdRoute,
  getConversationsAttributesIdRoute,
  getConversationsAttributesRoute,
  postConversationsAttributesIdOptionsRoute,
  postConversationsAttributesRoute,
  putConversationsAttributesIdOptionsOptionIdRoute,
  putConversationsAttributesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversationsAttributesHandler = app
  .openapi(getConversationsAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConversationsAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsAttributesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsAttributesIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConversationsAttributesIdOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConversationsAttributesIdOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
