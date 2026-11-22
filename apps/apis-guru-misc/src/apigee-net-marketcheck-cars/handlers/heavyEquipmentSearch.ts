import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListingHeavyEquipmentIdExtraRoute,
  getListingHeavyEquipmentIdMediaRoute,
  getListingHeavyEquipmentIdRoute,
  getSearchHeavyEquipmentActiveRoute,
  getSearchHeavyEquipmentAutoCompleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const heavyEquipmentSearchHandler = app
  .openapi(getListingHeavyEquipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingHeavyEquipmentIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingHeavyEquipmentIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchHeavyEquipmentActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchHeavyEquipmentAutoCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
