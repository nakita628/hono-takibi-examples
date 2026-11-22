import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePosMerchantsIdRoute,
  getPosMerchantsIdRoute,
  getPosMerchantsRoute,
  patchPosMerchantsIdRoute,
  postPosMerchantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const merchantsHandler = app
  .openapi(getPosMerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosMerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosMerchantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosMerchantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosMerchantsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
