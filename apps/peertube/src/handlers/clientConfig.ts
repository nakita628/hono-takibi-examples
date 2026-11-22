import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1ClientConfigUpdateInterfaceLanguageRoute,
  postApiV1ClientConfigUpdateLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientConfigHandler = app
  .openapi(postApiV1ClientConfigUpdateLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientConfigUpdateInterfaceLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
