import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommunicationsRoute, patchCommunicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const communicationsCloudCommunicationsHandler = app
  .openapi(getCommunicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
