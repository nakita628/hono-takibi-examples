import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3FilterIdColumnsRoute,
  deleteRestApi3FilterIdFavouriteRoute,
  deleteRestApi3FilterIdRoute,
  getRestApi3FilterFavouriteRoute,
  getRestApi3FilterIdColumnsRoute,
  getRestApi3FilterIdRoute,
  getRestApi3FilterMyRoute,
  getRestApi3FilterSearchRoute,
  postRestApi3FilterRoute,
  putRestApi3FilterIdColumnsRoute,
  putRestApi3FilterIdFavouriteRoute,
  putRestApi3FilterIdOwnerRoute,
  putRestApi3FilterIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const filtersHandler = app
  .openapi(postRestApi3FilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterMyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FilterIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FilterIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FilterIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FilterIdFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FilterIdFavouriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FilterIdOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
