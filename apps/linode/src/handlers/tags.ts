import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionTagsTagLabelRoute,
  getApiVersionTagsRoute,
  getApiVersionTagsTagLabelRoute,
  postApiVersionTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(postApiVersionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionTagsTagLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionTagsTagLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
