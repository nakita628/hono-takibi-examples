import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPartiesGetActiveHouseRoute,
  getApiPartiesLordsByTypeForDateRoute,
  getApiPartiesStateOfThePartiesHouseForDateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partiesHandler = app
  .openapi(getApiPartiesGetActiveHouseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPartiesLordsByTypeForDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPartiesStateOfThePartiesHouseForDateRoute, (c) => {
    throw new Error('Not implemented')
  })
