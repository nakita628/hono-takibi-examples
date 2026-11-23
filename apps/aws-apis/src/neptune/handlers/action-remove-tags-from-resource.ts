import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRemoveTagsFromResourceRoute,
  postActionRemoveTagsFromResourceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRemoveTagsFromResourceHandler = app
  .openapi(getActionRemoveTagsFromResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemoveTagsFromResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
