import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesLocalizedNotificationMessageIdRoute,
  deleteDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdRoute,
  getDeviceManagementNotificationMessageTemplatesCountRoute,
  getDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesCountRoute,
  getDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesLocalizedNotificationMessageIdRoute,
  getDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesRoute,
  getDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdRoute,
  getDeviceManagementNotificationMessageTemplatesRoute,
  patchDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesLocalizedNotificationMessageIdRoute,
  patchDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdRoute,
  postDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesRoute,
  postDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdSendTestMessageRoute,
  postDeviceManagementNotificationMessageTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementNotificationMessageTemplateHandler = app
  .openapi(getDeviceManagementNotificationMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementNotificationMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesLocalizedNotificationMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesLocalizedNotificationMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesLocalizedNotificationMessageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdLocalizedNotificationMessagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDeviceManagementNotificationMessageTemplatesNotificationMessageTemplateIdSendTestMessageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementNotificationMessageTemplatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
