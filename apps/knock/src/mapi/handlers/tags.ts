import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1TagsNameRoute, getV1TagsRoute, putV1TagsNameRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(deleteV1TagsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TagsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
