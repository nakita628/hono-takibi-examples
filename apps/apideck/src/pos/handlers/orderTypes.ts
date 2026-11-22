import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePosOrderTypesIdRoute,
  getPosOrderTypesIdRoute,
  getPosOrderTypesRoute,
  patchPosOrderTypesIdRoute,
  postPosOrderTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderTypesHandler = app
  .openapi(getPosOrderTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosOrderTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosOrderTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosOrderTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosOrderTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
