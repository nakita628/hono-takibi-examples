import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1ParentDeliveryDataRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app.openapi(getV1beta1ParentDeliveryDataRoute, (c) => {
  throw new Error('Not implemented')
})
