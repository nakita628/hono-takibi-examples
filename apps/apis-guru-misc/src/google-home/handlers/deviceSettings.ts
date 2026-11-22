import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAssistantSetNightModeParamsRoute,
  postRebootRoute,
  postSetEurekaInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceSettingsHandler = app
  .openapi(postAssistantSetNightModeParamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetEurekaInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
