import { OpenAPIHono } from '@hono/zod-openapi'
import { getWeaponRoute, getWeaponSearchRoute, postWeaponSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const weaponHandler = app
  .openapi(getWeaponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWeaponSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWeaponSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
