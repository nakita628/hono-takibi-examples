import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTykCertsCertIDRoute,
  getTykCertsCertIDRoute,
  getTykCertsRoute,
  postTykCertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const certsHandler = app
  .openapi(getTykCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykCertsCertIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykCertsCertIDRoute, (c) => {
    throw new Error('Not implemented')
  })
