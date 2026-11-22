import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGenerateNewTokenRoute,
  putInvalidateAllTokensRoute,
  putInvalidateTokenRoute,
  putListAllTokenIdsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationAPIHandler = app
  .openapi(postGenerateNewTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvalidateAllTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInvalidateTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putListAllTokenIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
