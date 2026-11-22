import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCmsSourceCode202609EnvironmentContentPathRoute,
  getCmsSourceCode202609EnvironmentContentPathRoute,
  getCmsSourceCode202609EnvironmentMetadataPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCmsSourceCode202609EnvironmentContentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCmsSourceCode202609EnvironmentContentPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCmsSourceCode202609EnvironmentMetadataPathRoute, (c) => {
    throw new Error('Not implemented')
  })
