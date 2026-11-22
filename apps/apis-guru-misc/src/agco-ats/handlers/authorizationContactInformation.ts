import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AuthorizationContactInformationRoute,
  postApiV2AuthorizationContactInformationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizationContactInformationHandler = app
  .openapi(getApiV2AuthorizationContactInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationContactInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
