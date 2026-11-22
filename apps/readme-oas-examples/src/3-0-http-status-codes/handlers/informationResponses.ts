import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatus100Route,
  getStatus101Route,
  getStatus102Route,
  getStatus103Route,
} from '../routes'

const app = new OpenAPIHono()

export const informationResponsesHandler = app
  .openapi(getStatus100Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus101Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus102Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus103Route, (c) => {
    throw new Error('Not implemented')
  })
