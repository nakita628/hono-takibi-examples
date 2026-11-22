import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1RequisitionListsRoute } from '../routes'

const app = new OpenAPIHono()

export const requisitionListsHandler = app.openapi(postV1RequisitionListsRoute, (c) => {
  throw new Error('Not implemented')
})
