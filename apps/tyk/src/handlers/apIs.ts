import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTykApisApiIDRoute,
  getTykApisApiIDRoute,
  getTykApisApiIDVersionsRoute,
  getTykApisRoute,
  postTykApisRoute,
  putTykApisApiIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apIsHandler = app
  .openapi(getTykApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykApisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykApisApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykApisApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykApisApiIDVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
