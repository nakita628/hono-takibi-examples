import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListInstanceProfileTagsRoute,
  postActionListInstanceProfileTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListInstanceProfileTagsHandler = app
  .openapi(getActionListInstanceProfileTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListInstanceProfileTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
