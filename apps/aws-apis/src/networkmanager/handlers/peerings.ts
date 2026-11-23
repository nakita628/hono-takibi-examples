import { OpenAPIHono } from '@hono/zod-openapi'
import { deletePeeringsPeeringIdRoute, getPeeringsRoute } from '../routes'

const app = new OpenAPIHono()

export const peeringsHandler = app
  .openapi(deletePeeringsPeeringIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPeeringsRoute, (c) => {
    throw new Error('Not implemented')
  })
