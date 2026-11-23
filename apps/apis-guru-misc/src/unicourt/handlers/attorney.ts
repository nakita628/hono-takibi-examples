import { OpenAPIHono } from '@hono/zod-openapi'
import { getAttorneyAttorneyIdAssociatedPartiesRoute, getAttorneyAttorneyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const attorneyHandler = app
  .openapi(getAttorneyAttorneyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttorneyAttorneyIdAssociatedPartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
