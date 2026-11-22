import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1IposOfferingReferenceRoute, getV1IposRoute } from '../routes'

const app = new OpenAPIHono()

export const ipoHandler = app
  .openapi(getV1IposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IposOfferingReferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
