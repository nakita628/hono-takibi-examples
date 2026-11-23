import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV7CertsIdRoute,
  getV7CertsIdRoute,
  postV7CertsRoute,
  putV7CertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v7Handler = app
  .openapi(postV7CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV7CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV7CertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV7CertsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
