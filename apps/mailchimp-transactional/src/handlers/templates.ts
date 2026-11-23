import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTemplatesAddRoute,
  postTemplatesDeleteRoute,
  postTemplatesInfoRoute,
  postTemplatesListRoute,
  postTemplatesPublishRoute,
  postTemplatesRenderRoute,
  postTemplatesTimeSeriesRoute,
  postTemplatesUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(postTemplatesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesTimeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplatesRenderRoute, (c) => {
    throw new Error('Not implemented')
  })
