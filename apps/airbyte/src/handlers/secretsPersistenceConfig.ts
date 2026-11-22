import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1SecretsPersistenceConfigCreateOrUpdateRoute,
  postV1SecretsPersistenceConfigGetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const secretsPersistenceConfigHandler = app
  .openapi(postV1SecretsPersistenceConfigGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SecretsPersistenceConfigCreateOrUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
