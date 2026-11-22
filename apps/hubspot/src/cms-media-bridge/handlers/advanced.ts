import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMediaBridge202609AppIdSchemasObjectTypeAssociationsRoute,
  postMediaBridge202609AppIdSettingsObjectDefinitionsRoute,
  postMediaBridge202609AppIdSettingsRegisterRoute,
  postMediaBridge202609AppIdSettingsVideoAssociationDefinitionRoute,
  postMediaBridge202609EventsAttentionSpanRoute,
  postMediaBridge202609EventsMediaPlayedPercentRoute,
  postMediaBridge202609EventsMediaPlayedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postMediaBridge202609EventsAttentionSpanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaBridge202609EventsMediaPlayedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaBridge202609EventsMediaPlayedPercentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaBridge202609AppIdSchemasObjectTypeAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaBridge202609AppIdSettingsObjectDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaBridge202609AppIdSettingsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaBridge202609AppIdSettingsVideoAssociationDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
