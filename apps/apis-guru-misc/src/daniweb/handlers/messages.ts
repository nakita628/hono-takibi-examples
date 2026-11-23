import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMessagesIDMetadataCollectionsRoute,
  getMessagesIDMetadataRoute,
  getMessagesIDRoute,
  postMessagesIDMetadataRoute,
  postMessagesMetadataFiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(postMessagesMetadataFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesIDMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesIDMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesIDMetadataCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
