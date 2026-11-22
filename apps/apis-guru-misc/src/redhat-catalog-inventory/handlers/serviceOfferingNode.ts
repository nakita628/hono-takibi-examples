import { OpenAPIHono } from '@hono/zod-openapi'
import { getServiceOfferingNodesIdRoute, getServiceOfferingNodesRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceOfferingNodeHandler = app
  .openapi(getServiceOfferingNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceOfferingNodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
