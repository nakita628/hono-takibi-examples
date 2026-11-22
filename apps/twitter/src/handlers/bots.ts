import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete2BotsIdRoute,
  delete2BotsIdTokenRoute,
  get2BotsRoute,
  post2BotsIdTokenRoute,
  post2BotsRoute,
  put2BotsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const botsHandler = app
  .openapi(get2BotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2BotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2BotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put2BotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete2BotsIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post2BotsIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
