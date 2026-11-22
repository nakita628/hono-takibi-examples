import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1DestinationOauthsCompleteOauthRoute,
  postV1DestinationOauthsGetConsentUrlRoute,
  postV1DestinationOauthsOauthParamsCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const destinationOauthHandler = app
  .openapi(postV1DestinationOauthsGetConsentUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationOauthsCompleteOauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DestinationOauthsOauthParamsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
