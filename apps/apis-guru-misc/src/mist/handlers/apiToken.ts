import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SelfApitokensApitokenIdRoute,
  getApiV1SelfApitokensRoute,
  postApiV1SelfApitokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiTokenHandler = app
  .openapi(getApiV1SelfApitokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SelfApitokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SelfApitokensApitokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
