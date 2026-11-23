import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContractIdRoute,
  optionsContractIdRoute,
  optionsContractRoute,
  postContractIdRoute,
  postContractRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contractHandler = app
  .openapi(optionsContractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsContractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContractIdRoute, (c) => {
    throw new Error('Not implemented')
  })
