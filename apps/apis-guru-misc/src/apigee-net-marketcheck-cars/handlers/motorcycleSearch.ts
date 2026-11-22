import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListingMotorcycleIdExtraRoute,
  getListingMotorcycleIdMediaRoute,
  getListingMotorcycleIdRoute,
  getSearchMotorcycleActiveRoute,
  getSearchMotorcycleAutoCompleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const motorcycleSearchHandler = app
  .openapi(getListingMotorcycleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingMotorcycleIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingMotorcycleIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchMotorcycleActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchMotorcycleAutoCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
