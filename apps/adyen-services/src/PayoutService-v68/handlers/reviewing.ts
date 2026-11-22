import { OpenAPIHono } from '@hono/zod-openapi'
import { postConfirmThirdPartyRoute, postDeclineThirdPartyRoute } from '../routes'

const app = new OpenAPIHono()

export const reviewingHandler = app
  .openapi(postConfirmThirdPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeclineThirdPartyRoute, (c) => {
    throw new Error('Not implemented')
  })
