import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupGroupTitleRoute,
  getGroupGroupTitleRoute,
  getGroupRoute,
  postGroupGroupTitleRoute,
  putGroupGroupTitleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupGroupTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupGroupTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupGroupTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupGroupTitleRoute, (c) => {
    throw new Error('Not implemented')
  })
