import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKkidChorelistRoute,
  deleteKkidUserlistRoute,
  deleteKkidWishlistRoute,
  getKkidAllowanceRoute,
  getKkidChorelistRoute,
  getKkidShareRoute,
  getKkidUserlistRoute,
  getKkidUserRoute,
  getKkidWishlistRoute,
  postKkidAllowanceRoute,
  postKkidApnsRoute,
  postKkidChorelistRoute,
  postKkidMasteruserRoute,
  postKkidUserlistRoute,
  postKkidWishlistRoute,
  putKkidChorelistRoute,
  putKkidUserlistRoute,
  putKkidWishlistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kkidHandler = app
  .openapi(getKkidAllowanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKkidAllowanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKkidApnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKkidChorelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKkidChorelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKkidChorelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKkidChorelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKkidMasteruserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKkidShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKkidUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKkidUserlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKkidUserlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKkidUserlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKkidUserlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKkidWishlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKkidWishlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKkidWishlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKkidWishlistRoute, (c) => {
    throw new Error('Not implemented')
  })
