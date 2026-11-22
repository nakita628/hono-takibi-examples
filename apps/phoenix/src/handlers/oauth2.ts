import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauth2IdpNameLoginRoute,
  getOauth2IdpNameTokensRoute,
  postOauth2IdpNameLoginRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app
  .openapi(postOauth2IdpNameLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2IdpNameLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2IdpNameTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
