import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDealerCarIdRoute,
  getDealerCarUkIdRoute,
  getDealerHeavyEquipmentIdRoute,
  getDealerMotorcycleIdRoute,
  getDealerRvIdRoute,
  getDealersCarRoute,
  getDealersCarUkRoute,
  getDealersHeavyEquipmentRoute,
  getDealersMotorcycleRoute,
  getDealersRvRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dealerAPIHandler = app
  .openapi(getDealerCarUkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDealerCarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDealerHeavyEquipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDealerMotorcycleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDealerRvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
