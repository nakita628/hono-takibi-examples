import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbrpsDbrpIDRoute,
  getDbrpsDbrpIDRoute,
  getDbrpsRoute,
  patchDbrpsDbrpIDRoute,
  postDbrpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbrpsHandler = app
  .openapi(getDbrpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbrpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbrpsDbrpIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDbrpsDbrpIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbrpsDbrpIDRoute, (c) => {
    throw new Error('Not implemented')
  })
