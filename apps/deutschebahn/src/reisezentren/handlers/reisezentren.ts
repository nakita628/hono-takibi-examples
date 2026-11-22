import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReisezentrenIdRoute,
  getReisezentrenLocLatLonDistRoute,
  getReisezentrenLocLatLonRoute,
  getReisezentrenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reisezentrenHandler = app
  .openapi(getReisezentrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReisezentrenLocLatLonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReisezentrenLocLatLonDistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReisezentrenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
