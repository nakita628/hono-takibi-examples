import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postStoreDetailAndSubmitThirdPartyRoute,
  postStoreDetailRoute,
  postSubmitThirdPartyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const initializationHandler = app
  .openapi(postStoreDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoreDetailAndSubmitThirdPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubmitThirdPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
