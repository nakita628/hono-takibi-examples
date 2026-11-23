import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClickwrapsIdRoute,
  getClickwrapsIdRoute,
  getClickwrapsRoute,
  patchClickwrapsIdRoute,
  postClickwrapsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clickwrapsHandler = app
  .openapi(getClickwrapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClickwrapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClickwrapsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClickwrapsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchClickwrapsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
