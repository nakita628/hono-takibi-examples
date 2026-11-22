import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiEquipmentCategoriesIndexRoute,
  getApiEquipmentIndexRoute,
  getApiMagicItemsIndexRoute,
  getApiWeaponPropertiesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const equipmentHandler = app
  .openapi(getApiEquipmentCategoriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEquipmentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMagicItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWeaponPropertiesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
