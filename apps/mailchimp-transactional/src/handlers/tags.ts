import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTagsAllTimeSeriesRoute,
  postTagsDeleteRoute,
  postTagsInfoRoute,
  postTagsListRoute,
  postTagsTimeSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(postTagsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsTimeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagsAllTimeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
