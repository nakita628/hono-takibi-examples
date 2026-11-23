import { OpenAPIHono } from '@hono/zod-openapi'
import { postStoreDetailAndSubmitThirdPartyRoute } from '../routes'

const app = new OpenAPIHono()

export const storeDetailAndSubmitThirdPartyHandler = app.openapi(
  postStoreDetailAndSubmitThirdPartyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
