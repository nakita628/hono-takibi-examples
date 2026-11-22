import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePostcardsPscIdRoute,
  getPostcardsPscIdRoute,
  getPostcardsRoute,
  postPostcardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postcardsHandler = app
  .openapi(getPostcardsPscIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePostcardsPscIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostcardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostcardsRoute, (c) => {
    throw new Error('Not implemented')
  })
