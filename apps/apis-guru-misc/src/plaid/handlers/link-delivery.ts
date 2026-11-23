import { OpenAPIHono } from '@hono/zod-openapi'
import { postLinkDeliveryCreateRoute, postLinkDeliveryGetRoute } from '../routes'

const app = new OpenAPIHono()

export const linkDeliveryHandler = app
  .openapi(postLinkDeliveryCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinkDeliveryGetRoute, (c) => {
    throw new Error('Not implemented')
  })
