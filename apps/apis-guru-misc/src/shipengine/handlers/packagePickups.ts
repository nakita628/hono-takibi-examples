import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PickupsPickupIdRoute,
  getV1PickupsPickupIdRoute,
  getV1PickupsRoute,
  postV1PickupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagePickupsHandler = app
  .openapi(getV1PickupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PickupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PickupsPickupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PickupsPickupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
