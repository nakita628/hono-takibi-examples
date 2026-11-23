import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDealersCarRoute,
  getDealersCarUkRoute,
  getDealersHeavyEquipmentRoute,
  getDealersMotorcycleRoute,
  getDealersRvRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dealersHandler = app
  .openapi(getDealersCarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDealersCarUkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDealersHeavyEquipmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDealersMotorcycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDealersRvRoute, (c) => {
    throw new Error('Not implemented')
  })
