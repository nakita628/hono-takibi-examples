import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionOptInPhoneNumberRoute, postActionOptInPhoneNumberRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionOptInPhoneNumberHandler = app
  .openapi(getActionOptInPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionOptInPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
