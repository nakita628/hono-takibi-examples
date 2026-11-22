import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameRoute,
  postV1EnvironmentAddPublicKeyRoute,
  postV1EnvironmentRemovePublicKeyRoute,
  postV1NameAuthorizeRoute,
  postV1NameStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postV1EnvironmentAddPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnvironmentRemovePublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
