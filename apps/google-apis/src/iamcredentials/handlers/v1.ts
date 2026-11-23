import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1NameGenerateAccessTokenRoute,
  postV1NameGenerateIdTokenRoute,
  postV1NameSignBlobRoute,
  postV1NameSignJwtRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1NameGenerateAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameGenerateIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameSignBlobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameSignJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
