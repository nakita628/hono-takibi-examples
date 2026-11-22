import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1ParentMembershipsRoute, postV1beta1NameMoveRoute } from '../routes'

const app = new OpenAPIHono()

export const orgUnitsHandler = app
  .openapi(postV1beta1NameMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
