import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EntitiesIdRoute,
  getV1EntitiesIdRoute,
  getV1EntitiesRoute,
  postV1EntitiesRoute,
  putV1EntitiesIdProvisionRoute,
  putV1EntitiesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entitiesHandler = app
  .openapi(getV1EntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EntitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EntitiesIdProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
