import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsJsonRoute,
  get20100401AccountsSidJsonRoute,
  post20100401AccountsJsonRoute,
  post20100401AccountsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401AccountHandler = app
  .openapi(post20100401AccountsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
