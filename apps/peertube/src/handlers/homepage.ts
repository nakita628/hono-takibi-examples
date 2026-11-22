import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CustomPagesHomepageInstanceRoute,
  putApiV1CustomPagesHomepageInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const homepageHandler = app
  .openapi(getApiV1CustomPagesHomepageInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomPagesHomepageInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
