import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOmnichannelOneTimeOrdersOmnichannelOneTimeOrderIdRoute,
  getOmnichannelOneTimeOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelOneTimeOrdersHandler = app
  .openapi(getOmnichannelOneTimeOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOmnichannelOneTimeOrdersOmnichannelOneTimeOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
