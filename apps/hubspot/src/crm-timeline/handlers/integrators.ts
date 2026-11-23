import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIntegratorsTimeline202609EventsBatchRoute,
  postIntegratorsTimeline202609EventsRoute,
  postIntegratorsTimeline202609TypesProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integratorsHandler = app
  .openapi(postIntegratorsTimeline202609EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegratorsTimeline202609EventsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegratorsTimeline202609TypesProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
