import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePosModifierGroupsIdRoute,
  getPosModifierGroupsIdRoute,
  getPosModifierGroupsRoute,
  patchPosModifierGroupsIdRoute,
  postPosModifierGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modifierGroupsHandler = app
  .openapi(getPosModifierGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosModifierGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosModifierGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosModifierGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosModifierGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
