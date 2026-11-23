import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKvpairsIdRoute,
  getKvpairsIdRoute,
  getKvpairsRoute,
  postKvpairsRoute,
  putKvpairsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kvpairsHandler = app
  .openapi(getKvpairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKvpairsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKvpairsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKvpairsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKvpairsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
