import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3UserTokensTokenIdRoute,
  getV3EventsRoute,
  getV3SecretsIdOrNameRoute,
  getV3SecretsRoute,
  postV3UserTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app
  .openapi(getV3EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SecretsIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3UserTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3UserTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
