import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePosModifiersIdRoute,
  getPosModifiersIdRoute,
  getPosModifiersRoute,
  patchPosModifiersIdRoute,
  postPosModifiersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modifiersHandler = app
  .openapi(getPosModifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosModifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosModifiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosModifiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosModifiersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
