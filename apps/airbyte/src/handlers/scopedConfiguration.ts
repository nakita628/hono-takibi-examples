import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ScopedConfigurationCreateRoute,
  postV1ScopedConfigurationDeleteRoute,
  postV1ScopedConfigurationGetContextRoute,
  postV1ScopedConfigurationGetRoute,
  postV1ScopedConfigurationListRoute,
  postV1ScopedConfigurationUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scopedConfigurationHandler = app
  .openapi(postV1ScopedConfigurationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScopedConfigurationGetContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScopedConfigurationCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScopedConfigurationGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScopedConfigurationUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ScopedConfigurationDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
