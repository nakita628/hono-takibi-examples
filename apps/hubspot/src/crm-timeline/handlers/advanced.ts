import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIntegratorsTimeline202609EventsRoute,
  postIntegratorsTimeline202609TypesProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postIntegratorsTimeline202609EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegratorsTimeline202609TypesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
