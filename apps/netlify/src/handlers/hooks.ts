import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHooksHookIdRoute,
  getHooksHookIdRoute,
  getHooksRoute,
  getHooksTypesRoute,
  postHooksHookIdEnableRoute,
  postHooksRoute,
  putHooksHookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hooksHandler = app
  .openapi(getHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHooksHookIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHooksTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
