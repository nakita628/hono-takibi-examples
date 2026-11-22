import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1TagsCreateRoute,
  postV1TagsDeleteRoute,
  postV1TagsListRoute,
  postV1TagsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagHandler = app
  .openapi(postV1TagsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
