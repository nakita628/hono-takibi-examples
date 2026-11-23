import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMmeDiseaseRoute,
  postMmeFlyRoute,
  postMmeMouseRoute,
  postMmeNematodeRoute,
  postMmeZebrafishRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mmeHandler = app
  .openapi(postMmeDiseaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMmeFlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMmeMouseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMmeNematodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMmeZebrafishRoute, (c) => {
    throw new Error('Not implemented')
  })
