import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDealerCarIdRoute,
  getDealerCarUkIdRoute,
  getDealerHeavyEquipmentIdRoute,
  getDealerMotorcycleIdRoute,
  getDealerRvIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dealerHandler = app
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
