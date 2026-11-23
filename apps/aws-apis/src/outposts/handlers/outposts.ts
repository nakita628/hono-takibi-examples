import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOutpostsOutpostIdRoute,
  getOutpostsOutpostIdAssetsRoute,
  getOutpostsOutpostIdInstanceTypesRoute,
  getOutpostsOutpostIdRoute,
  getOutpostsRoute,
  patchOutpostsOutpostIdRoute,
  postOutpostsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const outpostsHandler = app
  .openapi(postOutpostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOutpostsOutpostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsOutpostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOutpostsOutpostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsOutpostIdInstanceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOutpostsOutpostIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
