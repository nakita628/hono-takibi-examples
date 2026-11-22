import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePosTendersIdRoute,
  getPosTendersIdRoute,
  getPosTendersRoute,
  patchPosTendersIdRoute,
  postPosTendersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tendersHandler = app
  .openapi(getPosTendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosTendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosTendersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosTendersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosTendersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
