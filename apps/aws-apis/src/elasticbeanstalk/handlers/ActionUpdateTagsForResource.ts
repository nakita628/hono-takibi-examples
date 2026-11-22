import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateTagsForResourceRoute,
  postActionUpdateTagsForResourceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateTagsForResourceHandler = app
  .openapi(getActionUpdateTagsForResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateTagsForResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
