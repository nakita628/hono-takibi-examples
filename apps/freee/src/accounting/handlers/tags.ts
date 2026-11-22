import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1TagsIdRoute,
  getApi1TagsIdRoute,
  getApi1TagsRoute,
  postApi1TagsRoute,
  putApi1TagsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getApi1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1TagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
