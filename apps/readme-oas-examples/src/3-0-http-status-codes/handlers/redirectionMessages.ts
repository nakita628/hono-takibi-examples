import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatus300Route,
  getStatus301Route,
  getStatus302Route,
  getStatus303Route,
  getStatus304Route,
  getStatus305Route,
  getStatus306Route,
  getStatus307Route,
  getStatus308Route,
} from '../routes'

const app = new OpenAPIHono()

export const redirectionMessagesHandler = app
  .openapi(getStatus300Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus301Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus302Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus303Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus304Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus305Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus306Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus307Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatus308Route, (c) => {
    throw new Error('Not implemented')
  })
