import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauth2V21TokensKidRoute,
  getOauth2V21VerifyRoute,
  postOauth2V21RevokeRoute,
  postOauth2V21TokenRoute,
  postOauth2V3TokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app
  .openapi(postOauth2V3TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2V21TokensKidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2V21TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2V21VerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2V21RevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
