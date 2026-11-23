import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSpotsetsIdRoute,
  getSpotsetsRoute,
  postSpotsetsRoute,
  putSpotsetsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spotsetsHandler = app
  .openapi(getSpotsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSpotsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpotsetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSpotsetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
