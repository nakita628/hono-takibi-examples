import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateConfigurationSetSendingEnabledRoute,
  postActionUpdateConfigurationSetSendingEnabledRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateConfigurationSetSendingEnabledHandler = app
  .openapi(getActionUpdateConfigurationSetSendingEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateConfigurationSetSendingEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
