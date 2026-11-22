import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4BoundariesBoundaryIdRoute,
  postV4BoundariesQueryRoute,
  postV4BoundariesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boundariesHandler = app
  .openapi(postV4BoundariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4BoundariesQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4BoundariesBoundaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
