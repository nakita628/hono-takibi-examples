import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventConfigurationsResourceTypesRoute,
  patchEventConfigurationsResourceTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventConfigurationsResourceTypesHandler = app
  .openapi(getEventConfigurationsResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventConfigurationsResourceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
