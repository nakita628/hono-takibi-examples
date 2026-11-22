import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute,
  getApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute,
  getApiVersionLinodeInstancesLinodeIdConfigsRoute,
  postApiVersionLinodeInstancesLinodeIdConfigsRoute,
  putApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationProfilesHandler = app
  .openapi(postApiVersionLinodeInstancesLinodeIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLinodeInstancesLinodeIdConfigsConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
