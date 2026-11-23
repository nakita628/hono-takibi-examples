import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTokensCbTokenIdRoute,
  postTokensCreateForCardRoute,
  postTokensCreateUsingTempTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app
  .openapi(postTokensCreateUsingTempTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTokensCreateForCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensCbTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
