import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ParentLocationsRoute, postV1ParentLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getV1ParentLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
