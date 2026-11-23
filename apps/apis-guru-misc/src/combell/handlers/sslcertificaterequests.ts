import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSslcertificaterequestsIdRoute,
  getSslcertificaterequestsRoute,
  postSslcertificaterequestsRoute,
  putSslcertificaterequestsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sslcertificaterequestsHandler = app
  .openapi(getSslcertificaterequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSslcertificaterequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSslcertificaterequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSslcertificaterequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
