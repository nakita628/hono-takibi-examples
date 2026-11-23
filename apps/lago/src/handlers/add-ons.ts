import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAddOnsCodeRoute,
  getAddOnsCodeRoute,
  getAddOnsRoute,
  postAddOnsRoute,
  putAddOnsCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const addOnsHandler = app
  .openapi(postAddOnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddOnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAddOnsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAddOnsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAddOnsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
