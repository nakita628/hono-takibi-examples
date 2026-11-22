import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListingRvIdExtraRoute,
  getListingRvIdMediaRoute,
  getListingRvIdRoute,
  getListingRvUkIdExtraRoute,
  getListingRvUkIdMediaRoute,
  getListingRvUkIdRoute,
  getSearchRvActiveRoute,
  getSearchRvAutoCompleteRoute,
  getSearchRvUkActiveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rvSearchHandler = app
  .openapi(getListingRvUkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingRvUkIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingRvUkIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingRvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingRvIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingRvIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRvActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRvAutoCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRvUkActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
