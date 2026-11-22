import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHepsubsHepsubIdRoute,
  getHepsubsHepsubIdRoute,
  getHepsubsRoute,
  postHepsubsRoute,
  putHepsubsHepsubIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hepsubHandler = app
  .openapi(getHepsubsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHepsubsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHepsubsHepsubIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putHepsubsHepsubIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHepsubsHepsubIdRoute, (c) => {
    throw new Error('Not implemented')
  })
